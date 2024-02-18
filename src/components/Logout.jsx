'use client'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

export default function Logout() {
  const router = useRouter()

  function Sair() {
    Cookies.remove('tokennn')
    router.push('/login')

    window.location.href = '/login'
  }
  return (
    <button
      className="w-[60px] rounded-md bg-red-500 p-1 font-bold"
      onClick={Sair}
    >
      Sair
    </button>
  )
}
