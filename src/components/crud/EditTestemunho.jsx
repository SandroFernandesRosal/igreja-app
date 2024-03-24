'use client'
import Cookies from 'js-cookie'
import { FaCameraRetro } from 'react-icons/fa'
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { api } from '@/lib/api'

export default function EditTestemunho({ setOpenEdit, userIgreja, id }) {
  const [content, setContent] = useState('')
  const [preview, setPreview] = useState(null)
  const formRef = useRef(null)

  const router = useRouter()
  const token = Cookies.get('tokenigreja')

  const { name, avatarUrl } = userIgreja

  async function handleSubmit(event) {
    event.preventDefault()

    const form = formRef.current
    const fileToUpload = form.querySelector('input[type="file"]').files[0]

    let coverUrl = ''

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
      const response = await api.put(
        `/testemunhos/${id}`,
        {
          name,
          content,
          coverUrl,
          avatarUrl,
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
        setOpenEdit(null)
        router.push('/testemunhos')
        window.location.href = '/testemunhos'
        return newss
      }

      console.log(newss)
      return null
    } catch (error) {
      console.error('Erro ao criar testemunho:', error)
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
      className="fixed  left-0 top-0  flex h-[100vh]  w-[100vw] flex-col items-start  justify-center gap-3 bg-black/50 px-6  py-4 backdrop-blur-lg   md:flex-row md:items-center md:justify-center"
      onSubmit={handleSubmit}
    >
      <Image
        width={300}
        height={300}
        src={avatarUrl}
        alt={name}
        className=" h-[100px] w-[100px]  rounded-full bg-green-500 shadow-light dark:shadow-dark"
      />

      <div className="flex w-full flex-col   gap-2 rounded-2xl bg-bglight  shadow-light  dark:bg-bgdark  dark:shadow-dark md:w-[70%]  lg:min-w-[700px]">
        <p className="pl-3 text-lg font-bold">{name}</p>

        <textarea
          className="mx-1 flex w-full  flex-col gap-2 border-none bg-bglight  outline-none ring-0 focus:ring-0  dark:bg-bgdark"
          type="text"
          name="content"
          required
          placeholder="Escreva seu testemunho"
          onChange={(e) => setContent(e.target.value)}
        />

        {preview && (
          <div className="mb-4 flex w-full items-center justify-center">
            <img src={preview} alt="" className=" aspect-video w-[200px]" />
          </div>
        )}
        <div className="mx-2 mb-2 flex w-full justify-center gap-4">
          <label
            htmlFor="coverUrl"
            className=" flex cursor-pointer items-center gap-2  font-bold"
          >
            <FaCameraRetro className="text-xl text-primary" /> Anexar foto
            (Opcional)
          </label>
          <button
            type="submit"
            className="z-20  mr-2 flex cursor-pointer items-center justify-center rounded-lg  bg-gradient-to-r from-slate-950 to-blue-900 px-6 font-bold text-white  hover:from-blue-900 hover:to-slate-900"
          >
            Enviar
          </button>
        </div>
      </div>

      <input
        className="invisible h-0 w-0"
        type="file"
        name="coverUrl"
        id="coverUrl"
        placeholder="Digite a url da notícia"
        onChange={onFileSelected}
      />
    </form>
  )
}
