import { api } from '@/lib/api'
import Testemunho from '@/components/Testemunho'

import { getUserIgreja } from '@/lib/getUserIgreja'
import { Suspense } from 'react'

export default async function Testemunhos() {
  const response = await api.get('/testemunhos')
  const data = response.data

  const userIgreja = getUserIgreja()

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 pt-24 md:pt-[165px]">
      <Suspense fallback={<p>Carregando...</p>}>
        <Testemunho data={data} userIgreja={userIgreja} />
      </Suspense>
    </main>
  )
}
