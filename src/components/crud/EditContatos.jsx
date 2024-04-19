'use client'
import Cookies from 'js-cookie'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { AiFillCloseCircle } from 'react-icons/ai'
import { api } from '@/lib/api'

export default function EditContatos({
  setOpenEdit,
  id,
  localInitial,
  whatsappInitial,
  facebookInitial,
  instagranInitial,
}) {
  const [local, setLocal] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [facebook, setFacebook] = useState('')
  const [instagran, setInstagran] = useState('')

  const router = useRouter()
  const token = Cookies.get('tokennn')

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const response = await api.put(
        `/contato/${id}`,
        {
          local: local || localInitial,
          whatsapp: whatsapp || whatsappInitial,
          facebook: facebook || facebookInitial,
          instagran: instagran || instagranInitial,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )

      const contato = response.data

      if (response.status === 200 && contato) {
        setOpenEdit(false)
        router.push('/')
        window.location.href = '/'
        return contato
      }

      console.log(contato)
    } catch (error) {
      console.error('Erro ao editar contato:', error)
    }

    return null
  }

  return (
    <form
      className="fixed left-0 top-0 z-30 flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-black/50 backdrop-blur-lg md:mt-5"
      onSubmit={handleSubmit}
    >
      <h1 className="z-20 mb-2 flex items-center justify-center gap-3 text-lg font-bold text-primary">
        Editar endereço{' '}
        <AiFillCloseCircle
          onClick={() => setOpenEdit(false)}
          className="cursor-pointer text-2xl font-bold text-black dark:text-white"
        />
      </h1>
      <input
        className="mb-4 mt-2  w-[80%] max-w-[600px] cursor-pointer rounded-lg  border-none bg-bglightsecundary p-2 text-center font-bold placeholder-textlight shadow-light outline-none focus:ring-0 dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark"
        type="text"
        name="local"
        required={true}
        placeholder="Digite o local"
        defaultValue={localInitial}
        onChange={(e) => setLocal(e.target.value)}
      />

      <input
        className="mb-4  w-[80%] max-w-[600px] cursor-pointer rounded-lg  border-none bg-bglightsecundary p-2 text-center font-bold placeholder-textlight shadow-light outline-none focus:ring-0 dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark"
        type="text"
        name="whatsapp"
        required={true}
        placeholder="Digite o número"
        defaultValue={whatsappInitial}
        onChange={(e) => setWhatsapp(e.target.value)}
      />

      <input
        className="mb-4  w-[80%] max-w-[600px] cursor-pointer rounded-lg  border-none bg-bglightsecundary p-2 text-center font-bold placeholder-textlight shadow-light outline-none focus:ring-0 dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark"
        type="text"
        name="instagran"
        required={true}
        placeholder="Digite o instagran"
        defaultValue={instagranInitial}
        onChange={(e) => setInstagran(e.target.value)}
      />

      <input
        className="mb-4  w-[80%] max-w-[600px] cursor-pointer rounded-lg  border-none bg-bglightsecundary p-2 text-center font-bold placeholder-textlight shadow-light outline-none focus:ring-0 dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark"
        type="text"
        name="facebook"
        required={true}
        placeholder="Digite o facebook"
        defaultValue={facebookInitial}
        onChange={(e) => setFacebook(e.target.value)}
      />

      <button
        type="submit"
        className="z-20  flex w-[100px] cursor-pointer items-center justify-center rounded-lg  bg-gradient-to-r from-slate-950 to-blue-900  font-bold text-white  hover:from-blue-900 hover:to-slate-900"
      >
        Enviar
      </button>
    </form>
  )
}
