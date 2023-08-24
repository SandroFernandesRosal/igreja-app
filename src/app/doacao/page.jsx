'use client'

import Search from '../components/Search'
import { useSearch } from '../store/searchStore'
import Link from 'next/link'
import New from '../components/New'
import ContainerResults from '../components/ContainerResults'
import ResultLength from '../components/ResultLength'
import Doe from '../components/Doe'

export default function Doacao() {
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
            <Link
              key={item.id}
              href={`/noticias/${item.id}`}
              onClick={() => setSearch('')}
            >
              <New url={item.url} title={item.title} />
            </Link>
          ))
        ) : (
          <>
            <div className="mt-10 md:mt-5">
              <h1>Página de Doações(em breve)</h1>
            </div>
            <Doe />
          </>
        )}
      </ContainerResults>
    </main>
  )
}
