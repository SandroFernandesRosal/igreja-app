import { api } from '@/lib/api'
import Testemunho from '@/components/Testemunho'

import { getUserIgreja } from '@/lib/getUserIgreja'
import { getUser } from '@/lib/getUser'

export default async function Testemunhos() {
  const response = await api.get('/testemunhos')
  const data = response.data

  const userIgreja = getUserIgreja()
  const user = getUser()

  return (
    <main className="mb-2 mt-4 flex min-h-screen flex-col items-center gap-5 pt-24 md:mt-0 md:pt-[165px]">
      <Testemunho data={data} userIgreja={userIgreja} user={user} />
    </main>
  )
}
