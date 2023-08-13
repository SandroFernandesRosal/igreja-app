'use client'
import CarouselTwo from './components/CarouselTwo'
import Search from './components/Search'
import News from './components/News'
import { useSearch } from './store/searchStore'
import Locais from './components/Locais'

import Link from 'next/link'

import New from './components/New'
import TimeLine from './components/TimeLine'

export default function Home() {
  const { search } = useSearch()
  const { DataNews } = useSearch()
  const { setSearch } = useSearch()

  const results = DataNews.filter(
    (item) => item.title.toLowerCase().indexOf(search) !== -1,
  )

  return (
    <main
      className={`flex min-h-screen flex-col  items-center gap-5 pt-24 md:pt-[165px] 
         `}
    >
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
            <div className="flex w-[100vw] flex-col items-center justify-center gap-5  rounded-lg bg-transparent md:w-[90vw] md:gap-0   md:bg-white/20 md:p-5 md:dark:bg-black/20 lg:w-[80vw]">
              <h1 className=" hidden text-lg font-bold text-primary md:flex">
                Notícias
              </h1>
              <p className="mb-5 hidden text-2xl md:flex">
                Fique por dentro das últimas notícias
              </p>
              <div className="flex flex-col items-center justify-center md:flex-row md:items-stretch md:gap-4 ">
                <div className="flex  h-[400px] w-[400px]  justify-center overflow-hidden  md:h-[350px]   md:w-[350px] lg:h-[400px] lg:w-[400px]">
                  <CarouselTwo />
                </div>
                <div className="mt-10 flex w-[80vw] flex-col items-center rounded-lg bg-white/20  p-0 pb-10 pt-1 dark:bg-black/20 md:mt-0 md:w-[40vw] md:bg-transparent md:pt-0 md:dark:bg-transparent">
                  <News>
                    {DataNews.reverse()
                      .slice(0, 4)
                      .map((item) => (
                        <Link key={item.id} href={'/noticias'}>
                          <New url={item.url} title={item.title} />
                        </Link>
                      ))}
                  </News>
                </div>
              </div>
            </div>
            <Locais />
            <TimeLine />
          </>
        )}
      </div>
    </main>
  )
}
