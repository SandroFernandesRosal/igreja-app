import { cookies } from 'next/headers'
import { jwtDecode } from 'jwt-decode'

export function getUser() {
  const token = cookies().get('tokennn')?.value

  try {
    const user = jwtDecode(token)
    return user
  } catch (error) {
    // O token é inválido
    return null
  }
}
