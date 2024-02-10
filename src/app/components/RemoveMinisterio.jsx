'use client'
import Cookies from 'js-cookie'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'
import { useLocal } from '../store/useStore'
import { useState } from 'react'

export default function RemoveMinisterio({ id }) {
  const { local } = useLocal()
  const router = useRouter()
  const token = Cookies.get('tokennn')
  const [isDeleting, setIsDeleting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    if (isDeleting) return
    setIsDeleting(true)

    try {
      const response = await api.delete(`/ministerio/${local}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.status === 200) {
        router.push('/') // Recarregue a página ou atualize a interface
      } else {
        console.error('Erro ao remover um líder:', response.statusText)
        // Exiba uma mensagem de erro ao usuário
      }
    } catch (error) {
      console.error('Erro ao remover um líder:', error)
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
