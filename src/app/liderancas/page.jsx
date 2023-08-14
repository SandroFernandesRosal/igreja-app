'use client'

import Search from '../components/Search'
import { useSearch } from '../store/searchStore'
import Link from 'next/link'
import New from '../components/New'

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
      {search ? (
        results.length === 0 ? (
          <div className="mt-10 flex-col items-center text-center">
            <h1 className="m-0 text-lg font-bold text-primary ">
              {' '}
              Nenhuma notícia encontrada{' '}
            </h1>
            <p className="text-xl ">Faça uma nova pesquisa</p>
          </div>
        ) : (
          <div className=" mt-10 flex-col items-center text-center">
            <h1 className="m-0 text-lg font-bold text-primary ">Notícias</h1>

            <p className="text-xl ">
              {results.length} notícia{results.length === 1 ? '' : 's'}{' '}
              encontrada{results.length === 1 ? '' : 's'}{' '}
            </p>
          </div>
        )
      ) : null}
      <div
        className={`flex  gap-2 md:gap-5  ${search ? 'flex-row' : 'flex-col'} ${
          search && 'flex-wrap'
        }  
      } ${search && 'justify-center'} ${
        search ? 'items-start' : 'items-center'
      } px-1 pb-5`}
      >
        {search ? (
          results.map((item) => (
            <Link key={item.id} href={`/noticias/${item.id}`}>
              <New url={item.url} title={item.title} setSearch={setSearch} />
            </Link>
          ))
        ) : (
          <>
            <h1>Página de lideranças(em breve)</h1>
          </>
        )}
      </div>
    </main>
  )
}
