'use client'
import Cookies from 'js-cookie'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'

import { useState } from 'react'

export default function RemoveSobreLider({ id }) {
  const router = useRouter()
  const token = Cookies.get('tokennn')
  const [isDeleting, setIsDeleting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    if (isDeleting) return
    setIsDeleting(true)

    try {
      const response = await api.delete(`/sobre/lider/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.status === 200) {
        router.push('/quemsomos')
        window.location.href = '/quemsomos' // Recarregue a página ou atualize a interface
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
      className="m-3 rounded-lg bg-gradient-to-r from-slate-950 to-blue-900  px-3 font-bold  text-white shadow-light hover:from-blue-900 hover:to-slate-900 dark:shadow-dark"
    >
      {isDeleting ? 'Removendo...' : 'Remover'}
    </button>
  )
}
