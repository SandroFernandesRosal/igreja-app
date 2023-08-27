'use client'
import Search from './components/Search'
import { useSearch } from './store/searchStore'
import Locais from './components/Locais'
import NewsPenha from './components/NewsPenha'

import New from './components/New'
import TimeLine from './components/TimeLine'
import ResultLength from './components/ResultLength'
import ContainerResults from './components/ContainerResults'
import Doe from './components/Doe'

export default function Home() {
  const { search } = useSearch()
  const { DataNews } = useSearch()
  const { setSearch } = useSearch()

  const results = DataNews.filter(
    (item) => item.title.toLowerCase().indexOf(search) !== -1,
  )

  return (
    <main
      className={`flex min-h-screen flex-col   items-center gap-5 pt-24 md:pt-[165px] 
         `}
    >
      <Search />

      {search ? <ResultLength /> : null}

      <ContainerResults>
        {search ? (
          results.map((item) => (
            <New
              key={item.id}
              url={item.url}
              title={item.title}
              id={item.id}
              setSearch={setSearch}
            />
          ))
        ) : (
          <>
            <NewsPenha />
            <Locais />
            <TimeLine />
            <Doe />
          </>
        )}
      </ContainerResults>
    </main>
  )
}
