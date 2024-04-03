import { cookies } from 'next/headers'
import { jwtDecode } from 'jwt-decode'

export function getUserIgreja() {
  const tokenigreja = cookies().get('tokenigreja')?.value

  try {
    const user = jwtDecode(tokenigreja)
    return user
  } catch (error) {
    return ''
  }
}
