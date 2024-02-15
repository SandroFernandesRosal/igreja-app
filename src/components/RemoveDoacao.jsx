'use client'
import Cookies from 'js-cookie'

import { useRouter } from 'next/navigation'

import { useState } from 'react'
import { api } from '@/lib/api'

export default function RemoveDoacao({ id }) {
  const router = useRouter()
  const token = Cookies.get('tokennn')
  const [isDeleting, setIsDeleting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    if (isDeleting) return
    setIsDeleting(true)

    try {
      const response = await api.delete(`/doacao/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.status === 200) {
        router.push('/') // Recarregue a página ou atualize a interface
      } else {
        console.error('Erro ao remover doação:', response.statusText)
        // Exiba uma mensagem de erro ao usuário
      }
    } catch (error) {
      console.error('Erro ao remover doação:', error)
      // Exiba uma mensagem de erro ao usuário
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <button
      onClick={handleSubmit}
      disabled={isDeleting}
      className="font-bold text-red-500 md:text-lg"
    >
      {isDeleting ? 'Removendo...' : 'Remover'}
    </button>
  )
}
