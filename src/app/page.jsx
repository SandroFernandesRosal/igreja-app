import Locais from '../components/Locais'
import NewsPenha from '../components/NewsPenha'
import TimeLine from '../components/TimeLine'
import Doe from '../components/Doe'
import Lideres from '../components/Ministerio'
import Testemunho from '@/components/Testemunho'
import { api } from '@/lib/api'
import { getUserIgreja } from '@/lib/getUserIgreja'
import { getUser } from '@/lib/getUser'

export default async function Home() {
  const response = await api.get('/testemunhos')
  const data = response.data

  const userIgreja = getUserIgreja()
  const user = getUser()
  return (
    <main className="flex min-h-screen flex-col   items-center gap-5 pt-24 md:pt-[165px]">
      <NewsPenha />
      <TimeLine />
      <Lideres />
      <Locais />
      <Doe />
      <Testemunho data={data} userIgreja={userIgreja} user={user} />
    </main>
  )
}
