'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { api } from '@/lib/api'
import Link from 'next/link'

export default function RegisterIgreja() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const router = useRouter()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const response = await api.post('/login/igreja', {
        login,
        password,
      })

      const user = response.data

      if (user.error) {
        setError(true)
        return null
      }

      if (response.status === 200 && user) {
        const token = user.token
        Cookies.set('tokenigreja', token)

        router.push('/testemunhos')
        window.location.href = '/testemunhos'
        return token
      }
    } catch (error) {
      console.error('Erro ao fazer requisição:', error)
    }

    return null
  }

  return (
    <div className="mt-[80px] flex w-full  justify-center md:mt-[140px]">
      <div className="my-10 flex min-h-screen w-[100vw] flex-col items-center rounded-[35px] bg-bglightsecundary shadow-light dark:bg-bgdarksecundary dark:shadow-dark  md:w-[90vw] md:rounded-xl">
        <h1 className="mt-2 text-lg font-bold text-primary ">Login</h1>
        <p className="mb-5 text-xl">Use suas credenciais</p>

        <form
          className="flex w-[75%] max-w-[500px] flex-col items-center gap-3 rounded-xl bg-bglight p-3 shadow-light dark:bg-bgdark dark:shadow-dark md:mb-5"
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl font-bold text-primary">
            Preencha os campos abaixo:
          </h1>

          {error && (
            <p className="font-bold text-red-700">Login ou senha incorreta</p>
          )}

          <input
            className="shadow-ligh mb-[10px] w-[90%] cursor-pointer rounded-lg border-none  bg-bglightsecundary p-[5px] text-center font-bold placeholder-textlight shadow-light outline-none focus:ring-0  dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark"
            type="text"
            name="login"
            placeholder="Digite seu e-mail"
            onChange={(e) => setLogin(e.target.value.toLowerCase())}
          />

          <input
            className="shadow-ligh mb-[10px] w-[90%] cursor-pointer rounded-lg border-none  bg-bglightsecundary p-[5px] text-center font-bold placeholder-textlight shadow-light outline-none focus:ring-0  dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark"
            type="password"
            name="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="z-20  flex w-[200px] cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-slate-950 to-blue-900  font-bold text-white  hover:from-blue-900 hover:to-slate-900"
          >
            Entrar
          </button>
        </form>
        <Link
          href={'/register'}
          className="mt-4 flex flex-col items-center gap-2"
        >
          <p>Ainda não é membro?</p>
          <button className="z-20  flex w-[200px] cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-slate-950 to-blue-900  font-bold text-white  hover:from-blue-900 hover:to-slate-900">
            Registre-se
          </button>
        </Link>
      </div>
    </div>
  )
}
