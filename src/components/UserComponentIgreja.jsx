import { getUserIgreja } from '@/lib/getUserIgreja'
import LogoutIgreja from './LogoutIgreja'
import Image from 'next/image'
import ChangeTheme from './ChangeTheme'

export default async function UserComponentIgreja() {
  const userIgreja = getUserIgreja()

  if (!userIgreja) {
    return null
  }

  const { name, avatarUrl } = userIgreja

  return (
    <>
      {userIgreja && (
        <div className=" items-center gap-3 md:flex">
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
          <div className="flex items-center justify-end gap-4">
            {' '}
            <LogoutIgreja />{' '}
            <div className="md:hidden">
              {' '}
              <ChangeTheme />{' '}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
