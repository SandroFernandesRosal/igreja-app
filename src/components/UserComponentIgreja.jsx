import { getUserIgreja } from '@/lib/getUserIgreja'
import LogoutIgreja from './LogoutIgreja'
import Image from 'next/image'
import ChangeTheme from './ChangeTheme'
import Link from 'next/link'

export default async function UserComponentIgreja() {
  const userIgreja = getUserIgreja()

  if (!userIgreja) {
    return null
  }

  const { name, avatarUrl } = userIgreja

  return (
    <>
      {userIgreja && (
        <div className=" flex flex-col items-start gap-3  md:flex-row md:items-center  ">
          <div className="flex  items-center gap-3">
            <Image
              src={avatarUrl}
              alt="imagem de perfil"
              width={40}
              height={40}
              className="h-[40px] w-[40px] rounded-full bg-gradient-to-r  from-slate-950 to-blue-900 p-[2px] hover:from-blue-900 hover:to-slate-900 "
            />
            <p className="text-lg font-bold">{name} </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href={'/perfil'}
              className="flex h-[32px] items-center rounded-lg  bg-gradient-to-r from-slate-950 to-blue-900 px-2  text-lg font-bold text-white  hover:from-blue-900 hover:to-slate-900"
            >
              Perfil
            </Link>
            <LogoutIgreja />
            <div className="flex md:hidden ">
              <ChangeTheme />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
