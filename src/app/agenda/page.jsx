'use client'
import TimeLine from '../components/TimeLine'
import Search from '../components/Search'
import { useSearch } from '../store/searchStore'
import Link from 'next/link'
import New from '../components/New'
import ResultLength from '../components/ResultLength'
import ContainerResults from '../components/ContainerResults'

export default function Agenda() {
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
              <TimeLine />
            </div>
          </>
        )}
      </ContainerResults>
    </main>
  )
}
