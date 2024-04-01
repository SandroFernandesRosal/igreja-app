import { cookies } from 'next/headers'
import { jwtDecode } from 'jwt-decode'

export function getUserIgreja() {
  const token = cookies().get('tokennn')?.value
  const tokenigreja = cookies().get('tokenigreja')?.value

  if (token) {
    return null
  }

  try {
    const user = jwtDecode(tokenigreja)
    return user
  } catch (error) {
    // O token é inválido
    return { name: '', login: '', avatarUrl: '', id: '' }
  }
}
