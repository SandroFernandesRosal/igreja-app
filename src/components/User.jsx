import { getUser } from '@/lib/getUser'
import Logout from './Logout'
import Image from 'next/image'
import ChangeTheme from './ChangeTheme'

export default async function UserComponent() {
  const user = getUser()

  if (!user) {
    return null
  }

  const { name, avatarUrl } = user

  return (
    <>
      {user && (
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
            <Logout />{' '}
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
