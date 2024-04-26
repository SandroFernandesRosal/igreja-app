'use client'
import Cookies from 'js-cookie'
import { FaCameraRetro } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useLocal } from '../../store/useStore'
import { api } from '@/lib/api'
import Image from 'next/image'

export default function EditNew({
  setOpenEdit,
  id,
  img,
  titulo,
  conteudo,
  destacar,
}) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [destaque, setDestaque] = useState(destacar)
  const [preview, setPreview] = useState(null)

  const formRef = useRef(null)

  const { local } = useLocal()
  const router = useRouter()
  const token = Cookies.get('tokennn')

  async function handleSubmit(event) {
    event.preventDefault()

    const form = formRef.current
    const fileToUpload = form.querySelector('input[type="file"]').files[0]

    let coverUrl = ''

    if (fileToUpload) {
      try {
        const uploadFormData = new FormData()
        uploadFormData.append('file', fileToUpload)

        const uploadResponse = await api.post('/upload', uploadFormData)
        coverUrl = uploadResponse.data.fileUrl
      } catch (error) {
        console.error('Erro ao enviar imagem:', error)

        return
      }
    } else {
      coverUrl = img
    }

    try {
      const response = await api.put(
        `/news/${local}/${id}`,
        {
          title: title || titulo,
          content: content || conteudo,
          coverUrl,
          page: local,
          destaque,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      if (response.status === 200) {
        router.push('/')
        window.location.href = '/'
        return response.data
      }

      console.error('Erro ao editar notícia:', response.statusText)
    } catch (error) {
      console.error('Erro ao editar notícia:', error)
    }

    return null
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
      className="fixed left-0 top-0 z-30 mt-10 flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-black/50 backdrop-blur-lg md:mt-20"
      onSubmit={handleSubmit}
    >
      <h1 className="z-20 mb-2 flex items-center justify-center gap-3 text-lg font-bold  text-primary dark:text-secundary">
        Editar Notícia{' '}
        <AiFillCloseCircle
          onClick={() => setOpenEdit(false)}
          className="cursor-pointer text-2xl font-bold text-white"
        />
      </h1>

      <label
        htmlFor="coverUrl"
        className="mb-3 flex cursor-pointer flex-col items-center gap-2  font-bold"
      >
        <p className="flex items-center gap-3 text-white">
          {' '}
          <FaCameraRetro className="text-xl text-primary dark:text-secundary" />{' '}
          Anexar nava imagem (até 5mb){' '}
        </p>

        {preview ? (
          <Image
            src={preview}
            width={200}
            height={100}
            alt={titulo}
            className=" aspect-video"
          />
        ) : (
          <Image
            src={img}
            alt={titulo}
            width={500}
            height={250}
            className=" aspect-video w-[70%] md:w-[50%]"
          />
        )}
      </label>

      <input
        className="mb-4 mt-2  w-[80%] max-w-[600px] cursor-pointer rounded-lg border-none  bg-bglightsecundary p-2 text-center font-bold placeholder-textlight shadow-light outline-none focus:ring-0 dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark md:w-[50%]"
        type="text"
        name="title"
        id="title"
        required={true}
        defaultValue={titulo}
        placeholder="Você precisa digitar um título"
        onChange={(e) => setTitle(e.target.value.toLowerCase())}
      />

      <textarea
        className="mb-1 mt-2  w-[80%] max-w-[600px] cursor-pointer rounded-lg border-none  bg-bglightsecundary p-2 text-center font-bold placeholder-textlight shadow-light outline-none focus:ring-0 dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark md:w-[50%]"
        type="text"
        name="content"
        id="content"
        required={true}
        defaultValue={conteudo}
        placeholder="Você precisa digitar um conteúdo"
        onChange={(e) => setContent(e.target.value)}
      />

      <input
        className="invisible h-0 w-0"
        type="file"
        name="coverUrl"
        id="coverUrl"
        onChange={onFileSelected}
      />

      <div className="mb-4 flex items-center gap-2  p-2">
        <input
          type="checkbox"
          id="destaque"
          name="destaque"
          checked={destaque}
          defaultValue={destacar}
          onChange={(e) => setDestaque(e.target.checked)}
          className="cursor-pointer rounded-lg border-none bg-gray-300 focus:ring-primary dark:border-gray-500 dark:bg-gray-600"
        />
        <label
          htmlFor="destaque"
          className="font-bold text-black dark:text-white"
        >
          Marcar como destaque
        </label>
      </div>

      <button
        type="submit"
        className="z-20  m-1 mr-2 flex cursor-pointer items-center justify-center  rounded-lg bg-gradient-to-r from-slate-950 to-blue-900 px-6 font-bold  text-white shadow-light hover:from-blue-900 hover:to-slate-900 dark:shadow-dark"
      >
        Enviar
      </button>
    </form>
  )
}
