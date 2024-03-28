'use client'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { api } from '@/lib/api'

export default function ResetPassword({ params }) {
  const id = params.id
  const [password, setPassword] = useState('')

  const tokenIgreja = Cookies.get('tokenigreja')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Certifique-se de que a rota da API esteja correta para redefinição de senha
    const response = await api.post(
      `/reset-password/${id}`, // Ajuste a rota conforme necessário
      {
        password, // Certifique-se de que o campo da nova senha esteja correto
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenIgreja}`,
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
