'use client'
import Search from './components/Search'
import { useSearch } from './store/searchStore'
import Locais from './components/Locais'
import NewsPenha from './components/NewsPenha'
import Link from 'next/link'
import New from './components/New'
import TimeLine from './components/TimeLine'
import ResultLength from './components/ResultLength'
import ContainerResults from './components/ContainerResults'

export default function Home() {
  const { search } = useSearch()
  const { DataNews } = useSearch()

  const results = DataNews.filter(
    (item) => item.title.toLowerCase().indexOf(search) !== -1,
  )

  return (
    <main
      className={`flex min-h-screen flex-col  items-center gap-5 pt-24 md:pt-[165px] 
         `}
    >
      <Search />
      {search ? <ResultLength /> : null}

      <ContainerResults>
        {search ? (
          results.map((item) => (
            <Link key={item.id} href={`/noticias/${item.id}`}>
              <New url={item.url} title={item.title} />
            </Link>
          ))
        ) : (
          <>
            <NewsPenha />
            <Locais />
            <TimeLine />
          </>
        )}
      </ContainerResults>
    </main>
  )
}
