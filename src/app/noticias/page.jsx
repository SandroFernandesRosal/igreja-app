'use client'
import News from '../components/News'
import New from '../components/New'
import Search from '../components/Search'
import { useSearch } from '../store/searchStore'
import Link from 'next/link'
import ContainerResults from '../components/ContainerResults'
import ResultLength from '../components/ResultLength'

export default function Noticias() {
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
            <div className="hidden flex-col items-center text-center md:flex">
              <h1 className="m-0 text-lg font-bold text-primary ">Notícias</h1>

              <p className="text-xl ">Fique por dentro das notícias</p>
            </div>
            <News>
              {DataNews.reverse().map((item) => (
                <Link key={item.id} href={`/noticias/${item.id}`}>
                  <New key={item.id} url={item.url} title={item.title} />
                </Link>
              ))}
            </News>
          </>
        )}
      </ContainerResults>
    </main>
  )
}
