import { getUser } from '@/lib/getUser'
import Logout from './Logout'

export default async function UserComponent() {
  const user = getUser()

  if (!user) {
    return null
  }

  const { name } = user

  return (
    <>
      {user && (
        <p>
          Olá, {name}! <Logout />{' '}
        </p>
      )}
    </>
  )
}
