import Locais from './components/Locais'
import NewsPenha from './components/NewsPenha'
import Link from 'next/link'
import TimeLine from './components/TimeLine'
import Doe from './components/Doe'
import Lideres from './components/Ministerio'

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col   items-center gap-5 pt-24 md:pt-[165px] 
         `}
    >
      <NewsPenha />
      <Locais />
      <TimeLine>
        <Link
          href={`/agenda`}
          className="mb-5   h-[30px] w-[150px] rounded-xl shadow-lg dark:shadow-dark"
        >
          <button className="flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-primary   font-bold text-white  hover:bg-primary/50    ">
            Saiba mais
          </button>
        </Link>
      </TimeLine>
      <Doe />
      <Lideres />
    </main>
  )
}
