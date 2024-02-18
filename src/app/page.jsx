import Locais from '../components/Locais'
import NewsPenha from '../components/NewsPenha'
import TimeLine from '../components/TimeLine'
import Doe from '../components/Doe'
import Lideres from '../components/Ministerio'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col   items-center gap-5 pt-24 md:pt-[165px]">
      <NewsPenha />
      <TimeLine />
      <Lideres />
      <Locais />
      <Doe />
    </main>
  )
}
