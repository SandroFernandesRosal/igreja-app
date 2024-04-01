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
      className=" m-2 w-[60px] rounded-md bg-gradient-to-r from-slate-950 to-blue-900 px-1  font-bold  text-white  shadow-light hover:from-blue-900 hover:to-slate-900 dark:shadow-dark "
      onClick={Sair}
    >
      Sair
    </button>
  )
}
