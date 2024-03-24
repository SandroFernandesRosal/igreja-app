'use client'
import Cookies from 'js-cookie'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'

import { useState } from 'react'

export default function RemoveTestemunho({ id }) {
  const router = useRouter()
  const token = Cookies.get('tokenigreja')
  const [isDeleting, setIsDeleting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    if (isDeleting) return
    setIsDeleting(true)

    try {
      const response = await api.delete(`/testemunhos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.status === 200) {
        router.push('/testemunhos')
        window.location.href = '/testemunhos' // Recarregue a página ou atualize a interface
      } else {
        console.error('Erro ao remover testemunho:', response.statusText)
        // Exiba uma mensagem de erro ao usuário
      }
    } catch (error) {
      console.error('Erro ao remover testemunho:', error)
      // Exiba uma mensagem de erro ao usuário
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <button
      onClick={handleSubmit}
      disabled={isDeleting}
      className="rounded-lg bg-red-500  p-1 px-3 text-lg font-bold text-white hover:bg-red-700"
    >
      {isDeleting ? 'Removendo...' : 'Remover'}
    </button>
  )
}
