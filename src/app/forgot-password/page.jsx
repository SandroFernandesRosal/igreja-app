// pages/forgot-password.js
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { api } from '@/lib/api'

export default function ForgotPasswordPage() {
  const [login, setLogin] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await api.post('/recover-password', {
        login,
      })

      if (response.ok) {
        // Mostra uma mensagem de sucesso ou redireciona o usuário
        router.push('/login/igreja')
      } else {
        // Mostra uma mensagem de erro
      }
    } catch (error) {
      console.error('Erro ao solicitar redefinição de senha:', error)
    }
  }

  return (
    <div className="flex min-h-screen flex-col  items-center gap-5 pt-24 md:pt-[145px]">
      <form
        onSubmit={handleSubmit}
        className="mb-10 mt-5 flex  min-h-screen w-[100vw] flex-col  items-center  rounded-[35px] bg-bglightsecundary text-textlight shadow-light  dark:bg-bgdarksecundary dark:text-textdark dark:shadow-dark md:w-[90vw] md:rounded-xl"
      >
        <h1 className="m-0 text-lg font-bold text-primary ">
          Esqueceu a senha?
        </h1>
        <p className="mb-5 text-xl">Digite seu email cadastrado</p>
        <input
          type="email"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Digite seu e-mail"
          className="mb-3 rounded-lg border-none ring-0 focus:border-none focus:text-textlight  focus:ring-0 focus:dark:text-textdark"
        />
        <button
          type="submit"
          className="z-20  flex w-[200px] cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-slate-950 to-blue-900  font-bold text-white  hover:from-blue-900 hover:to-slate-900"
        >
          Solicitar redefinição de senha
        </button>
      </form>
    </div>
  )
}
