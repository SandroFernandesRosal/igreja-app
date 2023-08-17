'use client'

import Search from '../components/Search'
import { useSearch } from '../store/searchStore'
import Link from 'next/link'
import New from '../components/New'
import ContainerResults from '../components/ContainerResults'
import ResultLength from '../components/ResultLength'

export default function Liderancas() {
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
            <Link key={item.id} href={`/noticias/${item.id}`}>
              <New url={item.url} title={item.title} setSearch={setSearch} />
            </Link>
          ))
        ) : (
          <>
            <h1>Página de Lideranças(em breve)</h1>
          </>
        )}
      </ContainerResults>
    </main>
  )
}
