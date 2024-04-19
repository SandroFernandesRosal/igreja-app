'use client'
import Cookies from 'js-cookie'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'

import { useState } from 'react'

export default function RemoveTestemunho({ id }) {
  const router = useRouter()
  const token = Cookies.get('tokenigreja')

  const tokenAdm = Cookies.get('tokennn')

  const [isDeleting, setIsDeleting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    if (isDeleting) return
    setIsDeleting(true)

    try {
      const response = await api.delete(`/testemunhos/${id}`, {
        headers: {
          Authorization: `Bearer ${token || tokenAdm}`,
        },
      })

      if (response.status === 200) {
        router.push('/testemunhos')
        window.location.href = '/testemunhos'
      } else {
        console.error('Erro ao remover testemunho:', response.statusText)
      }
    } catch (error) {
      console.error('Erro ao remover testemunho:', error)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <button
      onClick={handleSubmit}
      disabled={isDeleting}
      className="m-[2px]  rounded-lg bg-gradient-to-r from-slate-950 to-blue-900 p-1 px-3 text-lg font-bold text-white  shadow-light hover:from-blue-900 hover:to-slate-900"
    >
      {isDeleting ? 'Removendo...' : 'Remover'}
    </button>
  )
}
