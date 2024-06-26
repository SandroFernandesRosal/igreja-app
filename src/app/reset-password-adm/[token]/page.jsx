'use client'

import { useState } from 'react'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'

export default function ResetPasswordAdm({ params }) {
  const token = params.token
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState('')
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await api.post(
        `/reset-password-adm`,
        {
          login,
          password,
          passwordResetToken: token,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )

      if (response) {
        console.log('Senha redefinida com sucesso')
        alert('Senha redefinida com sucesso!')
        router.push('/login/adm')
      } else {
        throw new Error('Erro desconhecido')
      }
    } catch (error) {
      if (
        error.response &&
        (error.response.status === 400 ||
          error.response.status === 404 ||
          error.response.status === 500) &&
        error.response.data &&
        error.response.data.error
      ) {
        setError(error.response.data.error)
      } else {
        setError('Erro ao redefinir a senha. Tente novamente mais tarde.')
      }
    }
  }

  return (
    <div className="mb-2 mt-4 flex min-h-screen flex-col items-center gap-5 pt-24 md:mt-0 md:pt-[165px]">
      <form
        onSubmit={handleSubmit}
        className="mb-4 flex min-h-screen w-[100vw] flex-col items-center rounded-[35px] bg-bglightsecundary  px-1  pb-4 shadow-light dark:bg-bgdarksecundary  dark:shadow-dark md:w-[90vw] md:rounded-xl"
      >
        <div className="flex flex-col items-center  md:min-w-[35%]">
          <h1 className="m-0 text-lg font-bold text-primary dark:text-primary ">
            Recuperação de senha
          </h1>
          <p className="mb-4 text-lg ">Digite sua nova senha</p>
        </div>

        {error && <p className="mb-2 text-red-500">{error}</p>}

        <input
          type="text"
          name="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Email cadastrado"
          className="mb-3 rounded-lg border-none ring-0 focus:border-none focus:text-textlight  focus:ring-0  dark:text-black focus:dark:text-black"
        />

        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Nova senha"
          className="mb-3 rounded-lg border-none ring-0 focus:border-none focus:text-textlight  focus:ring-0  dark:text-black focus:dark:text-black"
        />

        <button
          type="submit"
          className="z-20  flex w-[100px] cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-slate-950 to-blue-900  font-bold text-white  shadow-light hover:from-blue-900 hover:to-slate-900 dark:shadow-dark"
        >
          Redefinir Senha
        </button>
      </form>
    </div>
  )
}
