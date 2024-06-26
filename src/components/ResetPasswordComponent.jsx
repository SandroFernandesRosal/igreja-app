'use client'

import { useState } from 'react'
import { api } from '@/lib/api'

export default function ResetPasswordComponent({ params }) {
  const token = params.token
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await api.post(
      `/reset-password`,
      {
        login,
        password,
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
    } else {
      console.error('Erro ao redefinir a senha')
    }
  }

  return (
    <div className="min-h-scren flex flex-col items-center justify-center pt-60 ">
      <h1>Recuperação de Senha</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Digite seu email"
          className="mb-3 rounded-lg border-none ring-0 focus:border-none focus:text-textlight  focus:ring-0  dark:text-black focus:dark:text-black"
        />
        <input
          type="password"
          name="login"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Nova senha"
          className="mb-3 rounded-lg border-none ring-0 focus:border-none focus:text-textlight  focus:ring-0  dark:text-black focus:dark:text-black"
        />
        <button type="submit">Redefinir Senha</button>
      </form>
    </div>
  )
}
