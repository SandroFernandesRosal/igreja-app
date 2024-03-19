'use client'
import Cookies from 'js-cookie'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { AiFillCloseCircle } from 'react-icons/ai'
import { api } from '@/lib/api'

export default function AddEndereco({ openEndereco, setOpenEndereco }) {
  const [local, setLocal] = useState('')
  const [rua, setRua] = useState('')
  const [cep, setCep] = useState('')

  const router = useRouter()
  const token = Cookies.get('tokennn')

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const response = await api.post(
        '/endereco',
        {
          local,
          rua,
          cep,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )

      const endereco = response.data

      if (response.status === 200 && endereco) {
        setOpenEndereco(false)
        router.push('/')
        window.location.href = '/'
        return endereco
      }

      console.log(endereco)
    } catch (error) {
      console.error('Erro ao criar endereço:', error)
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
        {openEndereco === true && (
          <AiFillCloseCircle
            onClick={() => setOpenEndereco(false)}
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
        name="rua"
        placeholder="Digite o nome da rua"
        onChange={(e) => setRua(e.target.value)}
      />

      <input
        className="mb-4 w-[200px] cursor-pointer rounded-lg  border-none bg-bglightsecundary p-2 text-center font-bold placeholder-textlight shadow-light outline-none focus:ring-0 dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark"
        type="text"
        name="cep"
        placeholder="Digite o cep"
        onChange={(e) => setCep(e.target.value)}
      />

      <button
        type="submit"
        className="z-20  flex w-[200px] cursor-pointer items-center justify-center rounded-lg  bg-gradient-to-r from-slate-950 to-blue-900  font-bold text-white  hover:from-blue-900 hover:to-slate-900"
      >
        Enviar
      </button>
    </form>
  )
}
