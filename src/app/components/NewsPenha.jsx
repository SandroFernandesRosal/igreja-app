'use client'
import Link from 'next/link'
import New from './New'
import News from './News'
import CarouselTwo from './CarouselTwo'
import { useSearch } from '../store/searchStore'

export default function NewsPenha() {
  const { DataNews } = useSearch()
  return (
    <div className=" flex w-[100vw] flex-col items-center justify-center gap-5  rounded-lg bg-transparent  md:mb-5   md:w-[90vw] md:gap-0 md:bg-white/20 md:p-1 md:shadow-lg md:dark:bg-black/20 md:dark:shadow-dark lg:w-[90vw]">
      <h1 className=" hidden text-lg font-bold text-primary md:flex">
        Notícias
      </h1>
      <p className="mb-5 hidden text-2xl md:flex">
        Fique por dentro das últimas notícias
      </p>
      <div className="flex  flex-col items-center justify-center md:flex-row md:items-stretch md:gap-4 ">
        <div className="mb-10 mt-10 flex h-[300px] w-[300px] justify-center overflow-hidden rounded-xl  shadow-xl dark:shadow-dark md:ml-10 md:mt-0 md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px]">
          <CarouselTwo />
        </div>
        <div className="m-5 flex w-[90vw] flex-col items-center rounded-lg   bg-white/20 shadow-lg dark:bg-black/20 dark:shadow-dark md:mt-0 md:w-[40vw] md:bg-transparent md:pt-0 md:shadow-none md:dark:bg-transparent dark:md:shadow-none">
          <News>
            {DataNews.reverse()
              .slice(0, 4)
              .map((item) => (
                <Link key={item.id} href={`/noticias/${item.id}`}>
                  <New url={item.url} title={item.title} />
                </Link>
              ))}

            <Link
              href={`/noticias/`}
              className="mb-5 mt-5   h-[40px] w-[150px] rounded-xl "
            >
              <button className="flex w-full  cursor-pointer items-center justify-center rounded-xl bg-primary p-1 text-center text-white shadow-lg hover:bg-primary/50  dark:shadow-dark  ">
                Mais notícias
              </button>
            </Link>
          </News>
        </div>
      </div>
    </div>
  )
}
