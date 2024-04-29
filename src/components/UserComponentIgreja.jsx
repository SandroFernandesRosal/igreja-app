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
        <div className=" flex flex-col items-start gap-1  md:flex-row md:items-center  ">
          <div className="flex  items-center gap-1">
            <Image
              src={avatarUrl}
              alt="imagem de perfil"
              width={40}
              height={40}
              className="m-2 h-[40px] w-[40px] rounded-full bg-gradient-to-r from-slate-950 to-blue-900  p-[2px] shadow-light hover:from-blue-900 hover:to-slate-900 dark:shadow-dark "
            />
            <p className="text-lg font-bold text-black dark:text-white">
              {name}{' '}
            </p>
          </div>
          <div className="flex items-center">
            <Link
              href={'/perfil'}
              className="m-2 flex h-[32px] items-center rounded-lg  bg-gradient-to-r from-slate-950 to-blue-900 px-2  text-lg font-bold text-white  shadow-light hover:from-blue-900 hover:to-slate-900 dark:shadow-dark"
            >
              Perfil
            </Link>
            <LogoutIgreja />
            <div className="m-2 flex md:hidden">
              <ChangeTheme />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
