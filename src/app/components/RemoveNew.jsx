'use client'
import Cookies from 'js-cookie'

import { useRouter } from 'next/navigation'
import { useLocal } from '../store/useStore'
import { useState } from 'react'

export default function RemoveNew({ id }) {
  const { local } = useLocal()
  const router = useRouter()
  const token = Cookies.get('tokennn')
  const [isDeleting, setIsDeleting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    if (isDeleting) return
    setIsDeleting(true)

    try {
      const res = await fetch(`http://localhost:3333/news/${local}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      if (res.ok) {
        router.push('/') // Recarregue a página ou atualize a interface
      } else {
        console.error('Erro ao remover notícia:', res.statusText)
        // Exiba uma mensagem de erro ao usuário
      }
    } catch (error) {
      console.error('Erro ao remover notícia:', error)
      // Exiba uma mensagem de erro ao usuário
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <button
      onClick={handleSubmit}
      disabled={isDeleting}
      className="text-lg font-bold text-red-500"
    >
      {isDeleting ? 'Removendo...' : 'Remover'}
    </button>
  )
}
