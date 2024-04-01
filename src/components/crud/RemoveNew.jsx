'use client'
import Cookies from 'js-cookie'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'
import { useLocal } from '../../store/useStore'
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
      const response = await api.delete(`/news/${local}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.status === 200) {
        router.push('/')
        window.location.href = '/'
      } else {
        console.error('Erro ao remover notícia:', response.statusText)
      }
    } catch (error) {
      console.error('Erro ao remover notícia:', error)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <button
      onClick={handleSubmit}
      disabled={isDeleting}
      className="m-[5px]  rounded-lg bg-gradient-to-r from-slate-950 to-blue-900  px-1 text-white  shadow-light hover:from-blue-900 hover:to-slate-900 dark:shadow-dark md:font-bold"
    >
      {isDeleting ? 'Removendo...' : 'Remover'}
    </button>
  )
}
