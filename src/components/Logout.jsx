'use client'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

export default function Logout() {
  const router = useRouter()

  function Sair() {
    Cookies.remove('tokennn')
    router.push('/login')
  }
  return (
    <button className="rounded-md bg-red-500 px-2 font-bold" onClick={Sair}>
      Sair
    </button>
  )
}
