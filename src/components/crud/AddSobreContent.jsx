'use client'
import Cookies from 'js-cookie'
import { FaCameraRetro } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'

import { api } from '@/lib/api'

export default function AddSobreContent({ open, setOpen }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const [preview, setPreview] = useState(null)
  const formRef = useRef(null)

  const router = useRouter()
  const token = Cookies.get('tokennn')

  async function handleSubmit(event) {
    event.preventDefault()

    const form = formRef.current
    const fileToUpload = form.querySelector('input[type="file"]').files[0]

    let coverUrl = ''

    if (!fileToUpload) {
      alert('você precisa adicionar uma imagem.')
      return
    }

    if (fileToUpload) {
      const formData = new FormData()
      formData.append('file', fileToUpload)

      try {
        const uploadResponse = await api.post('/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }, // Definir cabeçalho apropriado para uploads de arquivos
        })
        coverUrl = uploadResponse.data.fileUrl
      } catch (error) {
        console.error('Erro ao carregar arquivo:', error)
        // Tratar erros de upload aqui
      }
    }

    try {
      const response = await api.post(
        `/sobre`,
        {
          title,
          content,
          coverUrl,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )

      const newss = response.data

      if (response.status === 200 && newss) {
        setOpen(false)
        router.push('/quemsomos')
        window.location.href = '/quemsomos'
        return newss
      }

      console.log(newss)
      return null
    } catch (error) {
      console.error('Erro ao criar notícia:', error)
      // Tratar outros erros de requisição aqui
    }
  }

  function onFileSelected(event) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewUrl = URL.createObjectURL(files[0])

    setPreview(previewUrl)
  }

  return (
    <form
      ref={formRef}
      className="fixed left-0 top-0 z-20 flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-black/50 backdrop-blur-lg"
      onSubmit={handleSubmit}
    >
      <h1 className="mb-2 flex items-center justify-center gap-3 text-lg font-bold text-primary">
        Adicionar história{' '}
        {open === true && (
          <AiFillCloseCircle
            onClick={() => setOpen(false)}
            className="cursor-pointer text-2xl font-bold text-black dark:text-white"
          />
        )}
      </h1>

      <label
        htmlFor="coverUrl"
        className="mb-3 flex cursor-pointer items-center gap-2  font-bold"
      >
        {' '}
        <FaCameraRetro className="text-xl text-primary" /> Anexar foto (até 5mb)
      </label>
      {preview && (
        <img src={preview} alt="" className=" aspect-video w-[200px]" />
      )}

      <input
        className="mb-4 mt-2  w-[80%] max-w-[600px] cursor-pointer rounded-lg  border-none bg-bglightsecundary p-2 text-center font-bold placeholder-textlight shadow-light outline-none focus:ring-0 dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark"
        type="text"
        name="title"
        required
        placeholder="Escreva um título"
        onChange={(e) => setTitle(e.target.value.toLowerCase())}
      />

      <textarea
        className="mb-1  w-[80%] max-w-[600px] cursor-pointer rounded-lg  border-none bg-bglightsecundary p-2 text-center font-bold placeholder-textlight shadow-light outline-none focus:ring-0 dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark"
        type="text"
        name="content"
        required
        placeholder="Escreva a história"
        onChange={(e) => setContent(e.target.value)}
      />

      <input
        className="invisible h-0 w-0"
        type="file"
        name="coverUrl"
        id="coverUrl"
        required={true}
        placeholder="Digite a url da notícia"
        onChange={onFileSelected}
      />

      <button
        type="submit"
        className="z-20 my-3 flex w-[100px] cursor-pointer items-center justify-center rounded-lg  bg-gradient-to-r from-slate-950 to-blue-900  font-bold text-white  hover:from-blue-900 hover:to-slate-900"
      >
        Enviar
      </button>
    </form>
  )
}
