'use client'

import Search from '../components/Search'
import { useSearch } from '../store/searchStore'

import New from '../components/New'
import Locais from '../components/Locais'
import ContainerResults from '../components/ContainerResults'
import ResultLength from '../components/ResultLength'

export default function Enderecos() {
  const { search } = useSearch()
  const { DataNews } = useSearch()
  const { setSearch } = useSearch()

  const results = DataNews.filter(
    (item) => item.title.toLowerCase().indexOf(search) !== -1,
  )
  return (
    <main className="flex min-h-screen flex-col  items-center gap-5 pt-24 md:pt-[165px]">
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
            <div className="mt-10 md:mt-5">
              <Locais />
            </div>
          </>
        )}
      </ContainerResults>
    </main>
  )
}
