'use client'

import { useState } from 'react'
import { api } from '@/lib/api'

export default function ResetPassword({ params }) {
  const token = params.token
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await api.post(
      `/reset-password`,
      {
        token,
        newPassword: password,
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
    <div className="min-h-scren flex flex-col items-center justify-center pt-60">
      <h1>Recuperação de Senha</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Nova senha"
        />
        <button type="submit">Redefinir Senha</button>
      </form>
    </div>
  )
}
