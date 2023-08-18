'use client'
import Link from 'next/link'
import New from './New'
import News from './News'
import CarouselTwo from './CarouselTwo'
import { useSearch } from '../store/searchStore'

export default function NewsPenha() {
  const { DataNews } = useSearch()
  return (
    <div className="mb-5 flex w-[100vw] flex-col items-center justify-center  gap-5 rounded-lg bg-transparent md:mb-5   md:w-[90vw] md:gap-0 md:bg-white/20 md:p-1 md:dark:bg-black/20 lg:w-[80vw]">
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
                <Link key={item.id} href={`/noticias/${item.id}`}>
                  <New url={item.url} title={item.title} />
                </Link>
              ))}

            <Link href={`/noticias/`}>
              <button className="flex  w-[150px] cursor-pointer items-center justify-center rounded-xl bg-black/20 p-1 text-center shadow-lg hover:bg-primary  dark:bg-white/20 dark:hover:bg-primary  md:w-[200px]  ">
                Mais notícias
              </button>
            </Link>
          </News>
        </div>
      </div>
    </div>
  )
}
