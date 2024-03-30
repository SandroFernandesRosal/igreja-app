import { cookies } from 'next/headers'
import { jwtDecode } from 'jwt-decode'

export function getUserIgreja() {
  const token = cookies().get('tokenigreja')?.value

  try {
    const user = jwtDecode(token)
    return user
  } catch (error) {
    // O token é inválido
    return { name: '', login: '', avatarUrl: '', id: '' }
  }
}
