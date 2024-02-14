'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { api } from '@/lib/api'

export default function Register() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  async function handleSubmit(event) {
    event.preventDefault()

    // Utilize axios para fazer a requisição POST
    try {
      const response = await api.post('/login', {
        login,
        password,
      })

      const user = response.data

      if (user.error) {
        const message = user.error
          ? 'Login ou senha incorreta'
          : 'Erro desconhecido'
        alert(message)
        return null
      }

      if (response.status === 200 && user) {
        const token = user.token
        Cookies.set('tokennn', token)
        Cookies.set('login', login, { httpOnly: true })
        Cookies.set('password', password, { httpOnly: true })
        console.log(token, login, password)
        router.push('/')
        return token
      }
    } catch (error) {
      console.error('Erro ao fazer requisição:', error)
      // Tratar o erro de forma adequada, por exemplo, exibindo uma mensagem ao usuário
    }

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
