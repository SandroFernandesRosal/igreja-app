'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export default function Register() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  async function handleSubmit(event) {
    event.preventDefault()
    const res = await fetch('http://localhost:3333/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: `${login}`,
        password: `${password}`,
      }),
    })

    const user = await res.json()

    if (user.error) {
      const message = user.error
        ? 'Login ou senha incorreta'
        : 'Erro desconhecido'
      alert(message)
      return null
    }

    if (res.ok && user) {
      const token = user.token
      Cookies.set('tokennn', token) // Salva o token nos cookies
      console.log(token)
      router.push('/')
      return token
    }

    console.log(user)
    return null
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
