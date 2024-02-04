'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Register() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  async function handleSubmit(event) {
    event.preventDefault()

    const result = await signIn('credentials', {
      login,
      password,
      redirect: false,
    })

    if (result?.error) {
      console.log(result)
      return
    }

    router.replace('/')
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-6 text-3xl">Login</h1>

      <form className="flex w-[400px] flex-col gap-6" onSubmit={handleSubmit}>
        <input
          className="h-12 rounded-md border border-gray-300 bg-transparent p-2"
          type="text"
          name="login"
          placeholder="Digite seu e-mail"
          onChange={(e) => setLogin(e.target.value)}
        />

        <input
          className="h-12 rounded-md border border-gray-300 bg-transparent p-2"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="h-12 rounded-md bg-gray-300 text-gray-800 hover:bg-gray-400"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
