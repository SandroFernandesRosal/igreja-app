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
      className="w-[60px] rounded-md bg-gradient-to-r from-slate-950 to-blue-900  p-1 font-bold text-white  hover:from-blue-900 hover:to-slate-900 "
      onClick={Sair}
    >
      Sair
    </button>
  )
}
