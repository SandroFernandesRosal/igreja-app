'use client'

import News from '../components/News'
import New from '../components/New'

import Search from '../components/Search'
import { useSearch } from '../store/searchStore'
import Link from 'next/link'

export default function Noticias() {
  const { search } = useSearch()
  const { imgs } = useSearch()
  const { setSearch } = useSearch()

  const results = imgs.filter(
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
            <Link key={item.id} href={'/noticias'}>
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
              {imgs.reverse().map((item) => (
                <New key={item.id} url={item.url} title={item.title} />
              ))}
            </News>
          </>
        )}
      </div>
    </main>
  )
}
