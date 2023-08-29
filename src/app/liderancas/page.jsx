'use client'

import Search from '../components/Search'
import { useSearch } from '../store/searchStore'

import New from '../components/New'
import ContainerResults from '../components/ContainerResults'
import ResultLength from '../components/ResultLength'
import Lideres from '../components/Lideres'

export default function Liderancas() {
  const { search } = useSearch()
  const { DataNews } = useSearch()
  const { setSearch } = useSearch()

  const results = DataNews.filter(
    (item) => item.title.toLowerCase().indexOf(search) !== -1,
  )
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 pt-24 md:pt-[165px]">
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
            <Lideres />
          </>
        )}
      </ContainerResults>
    </main>
  )
}
