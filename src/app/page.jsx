'use client'
import CarouselTwo from './components/CarouselTwo'
import Search from './components/Search'
import News from './components/News'
import { useSearch } from './store/searchStore'
import Locais from './components/Locais'

import Link from 'next/link'

import New from './components/New'

export default function Home() {
  const { search } = useSearch()
  const { imgs } = useSearch()
  const { setSearch } = useSearch()

  const results = imgs.filter(
    (item) => item.title.toLowerCase().indexOf(search) !== -1,
  )

  return (
    <main
      className={`flex min-h-screen flex-col  items-center gap-5 pt-24 md:pt-48  
         `}
    >
      <Search />
      <div
        className={`flex  gap-2 md:gap-5  ${search ? 'flex-row' : 'flex-col'} ${
          search && 'flex-wrap'
        }  
      } ${search && 'justify-center'} ${
        search ? 'items-start' : 'items-center'
      } px-1 pb-5 `}
      >
        {search ? (
          results.map((item) => (
            <Link key={item.id} href={'/noticias'}>
              <New url={item.url} title={item.title} setSearch={setSearch} />
            </Link>
          ))
        ) : (
          <>
            <div className="flex w-[100vw] flex-col items-center justify-center gap-5  rounded-lg bg-transparent md:gap-0 md:bg-white/20   md:p-5 md:dark:bg-black/20 lg:w-[80vw] ">
              <h1 className=" hidden text-lg font-bold text-primary md:flex">
                Notícias
              </h1>
              <p className="mb-5 hidden text-2xl md:flex">
                Fique por dentro das últimas notícias
              </p>
              <div className="flex flex-col items-center  justify-center md:flex-row md:items-stretch md:gap-4 ">
                <div className="flex  h-[400px] w-[400px]  justify-center overflow-hidden  md:h-[350px]   md:w-[350px] lg:h-[400px] lg:w-[400px]">
                  <CarouselTwo imgs={imgs} />
                </div>
                <div className="mt-10 flex w-[80vw] flex-col items-center rounded-lg bg-white/20    p-0 pb-10 pt-1 dark:bg-black/20 md:mt-0 md:w-[50vw] md:bg-transparent md:pt-0 md:dark:bg-transparent lg:w-[40vw]">
                  <News setSearch={setSearch}>
                    {imgs
                      .reverse()
                      .slice(0, 4)
                      .map((item) => (
                        <New key={item.id} url={item.url} title={item.title} />
                      ))}
                  </News>
                </div>
              </div>
            </div>
            <Locais />
          </>
        )}
      </div>
    </main>
  )
}
