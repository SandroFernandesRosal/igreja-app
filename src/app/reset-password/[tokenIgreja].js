import { useRouter } from 'next/router'
import { useState } from 'react'
import { api } from '@/lib/api'

export default function ResetPasswordPage() {
  const router = useRouter()
  const { tokenIgreja } = router.query
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Substitua 'http://seu-servidor.com' pelo endereço do seu servidor
    const response = await api.post(
      `/recover-password`,
      {
        tokenIgreja,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenIgreja}`,
        },
      },
    )

    if (response.ok) {
      // A senha foi redefinida com sucesso
      console.log('Senha redefinida com sucesso')
      // Redirecionar o usuário para a página de login ou outra página apropriada
    } else {
      // Algo deu errado ao tentar redefinir a senha
      console.error('Erro ao redefinir a senha')
    }
  }

  return (
    <div>
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
