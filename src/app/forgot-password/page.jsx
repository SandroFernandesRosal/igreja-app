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
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Esqueceu a senha?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Digite seu e-mail"
        />
        <button type="submit">Solicitar redefinição de senha</button>
      </form>
    </div>
  )
}
