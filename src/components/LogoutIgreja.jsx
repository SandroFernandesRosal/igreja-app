'use client'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

export default function LogoutIgreja() {
  const router = useRouter()

  function Sair() {
    Cookies.remove('tokenigreja')
    router.push('/login/igreja')

    window.location.href = '/login/igreja'
  }
  return (
    <button
      className="w-[60px] rounded-md bg-red-500 p-1 font-bold text-white hover:bg-red-500/50"
      onClick={Sair}
    >
      Sair
    </button>
  )
}
