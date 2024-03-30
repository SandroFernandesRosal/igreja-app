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
        <div className=" items-center gap-3 md:flex ">
          <div className="flex  items-center gap-3">
            <Image
              src={avatarUrl}
              alt="imagem de perfil"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p>{name} </p>
          </div>
          <div className="flex items-center gap-4 pt-2 md:pt-0">
            <Link
              href={'/perfil'}
              className="flex h-[32px] items-center rounded-lg bg-green-500 px-2 text-lg font-bold text-white hover:bg-green-500/50"
            >
              Perfil
            </Link>
            <LogoutIgreja />
            <div className="md:hidden">
              <ChangeTheme />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
