'use client'
import CarouselTwo from './components/CarouselTwo'
import Search from './components/Search'
import News from './components/News'
import { useSearch } from './store/searchStore'
import Locais from './components/Locais'
import Image from 'next/image'

export default function Home() {
  const { search } = useSearch()
  const { imgs } = useSearch()
  const { setSearch } = useSearch()

  const results = imgs.filter(
    (item) => item.title.toLowerCase().indexOf(search) !== -1,
  )
  return (
    <main
      className={`flex min-h-screen  ${search ? 'flex-row' : 'flex-col'}   ${
        search && 'justify-center'
      } gap-10 pt-24 md:pt-48 ${search ? 'items-start' : 'items-center'} ${
        search && 'flex-wrap'
      } ${search ? 'pt-0' : 'pt-2'}
      }`}
    >
      <Search />

      {search ? (
        results.map((item) => (
          <article
            key={item.id}
            onClick={() => setSearch('')}
            className="flex h-[200px] w-[200px] cursor-pointer justify-center  rounded-xl shadow-xl "
          >
            <Image
              src={item.url}
              alt={item.title}
              width={200}
              height={200}
              className="flex-1"
            />
            <p className="absolute flex min-h-[50px] w-[200px] items-center justify-center self-end rounded-lg bg-black/40 text-white backdrop-blur-sm">
              {item.title}
            </p>
          </article>
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
              <News />
            </div>
          </div>
          <Locais />
        </>
      )}
    </main>
  )
}
