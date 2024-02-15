'use client'
import Cookies from 'js-cookie'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { AiFillCloseCircle } from 'react-icons/ai'
import { api } from '@/lib/api'

export default function AddDoacao({ openDoacao, setOpenDoacao }) {
  const [local, setLocal] = useState('')
  const [conta, setConta] = useState('')
  const [pix, setPix] = useState('')

  const router = useRouter()
  const token = Cookies.get('tokennn')

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const response = await api.post(
        '/doacao',
        {
          local,
          conta,
          pix,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )

      const doacao = response.data

      if (response.status === 200 && doacao) {
        setOpenDoacao(false)
        router.push('/')
        return doacao
      }

      console.log(doacao)
    } catch (error) {
      console.error('Erro ao criar doação:', error)
      // Tratar erros de requisição aqui
    }

    return null
  }

  return (
    <form
      className="fixed left-0 top-0 z-20 flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-black/50 backdrop-blur-lg"
      onSubmit={handleSubmit}
    >
      <h1 className="z-20 mb-2 flex items-center justify-center gap-3 text-lg font-bold text-primary">
        Adicionar endereço{' '}
        {openDoacao === true && (
          <AiFillCloseCircle
            onClick={() => setOpenDoacao(false)}
            className="cursor-pointer text-2xl font-bold text-black dark:text-white"
          />
        )}
      </h1>
      <input
        className="mb-4 mt-2 w-[200px] cursor-pointer rounded-lg  border-none bg-bglightsecundary p-2 text-center font-bold placeholder-textlight shadow-light outline-none focus:ring-0 dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark"
        type="text"
        name="local"
        placeholder="Digite um local"
        onChange={(e) => setLocal(e.target.value)}
      />

      <input
        className="mb-4 w-[200px] cursor-pointer rounded-lg  border-none bg-bglightsecundary p-2 text-center font-bold placeholder-textlight shadow-light outline-none focus:ring-0 dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark"
        type="text"
        name="conta"
        placeholder="Digite número da conta"
        onChange={(e) => setConta(e.target.value)}
      />

      <input
        className="mb-4 w-[200px] cursor-pointer rounded-lg  border-none bg-bglightsecundary p-2 text-center font-bold placeholder-textlight shadow-light outline-none focus:ring-0 dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark"
        type="text"
        name="pix"
        placeholder="Digite o pix"
        onChange={(e) => setPix(e.target.value)}
      />

      <button
        type="submit"
        className="z-20  flex w-[200px] cursor-pointer items-center justify-center rounded-lg  bg-primary font-bold  text-black hover:bg-primary/50"
      >
        Enviar
      </button>
    </form>
  )
}
