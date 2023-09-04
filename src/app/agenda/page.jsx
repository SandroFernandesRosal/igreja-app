'use client'

import Search from '../components/Search'
import { useSearch } from '../store/searchStore'

import New from '../components/New'
import ResultLength from '../components/ResultLength'
import ContainerResults from '../components/ContainerResults'

import TimeLine from '../components/TimeLine'

export default function Agenda() {
  const { search } = useSearch()
  const { DataNews } = useSearch()
  const { setSearch } = useSearch()

  const results = DataNews.filter(
    (item) => item.title.toLowerCase().indexOf(search) !== -1,
  )
  return (
    <main className="flex min-h-screen  flex-col  items-center gap-5 pt-24 md:pt-[165px]">
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
              description={item.description.slice(0, 30)}
            />
          ))
        ) : (
          <>
            <div className="mt-10 flex  w-full justify-center md:mt-5">
              <TimeLine />
            </div>
          </>
        )}
      </ContainerResults>
    </main>
  )
}
