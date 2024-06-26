import Locais from '../components/Locais'
import NewsContainer from '../components/NewsContainer'
import TimeLine from '../components/TimeLine'
import Doe from '../components/Doe'
import Lideres from '../components/Ministerio'
import { getUserIgreja } from '@/lib/getUserIgreja'
import TestemunhoLine from '@/components/TestemunhoLine'

export default function Home() {
  const userIgreja = getUserIgreja()

  return (
    <main className="flex min-h-screen flex-col   items-center gap-5 pt-24 md:pt-[165px]">
      <NewsContainer />
      <TimeLine />
      <Lideres />
      <Locais />
      <Doe />
      <TestemunhoLine userIgreja={userIgreja} />
    </main>
  )
}
