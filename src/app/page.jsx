import { imgs } from './components/imgs'
import CarouselTwo from './components/CarouselTwo'
import Search from './components/Search'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 pt-24 md:pt-48">
      <Search />
      <div className="flex w-[80vw] flex-col items-center justify-center gap-5 md:w-[100vw] md:flex-row md:items-stretch md:p-5 ">
        <div className="flex  h-[400px] w-[400px]  justify-center overflow-hidden  md:h-[400px]   md:w-[400px]">
          <CarouselTwo imgs={imgs} />
        </div>
        <section className="flex w-[80vw] flex-col items-center  gap-5 rounded-lg bg-white/20    p-5 dark:bg-black/20 md:w-[50vw] lg:w-[40vw]">
          <h1 className="text-xl font-bold">Últimas Notícias</h1>
          {imgs
            .reverse()
            .slice(0, 4)
            .map((item) => (
              <article
                key={item.id}
                className="flex w-[100%]  cursor-pointer justify-center rounded-lg bg-white hover:bg-primary dark:bg-black dark:hover:bg-primary"
              >
                <p>{item.title}</p>
              </article>
            ))}
          <button className="w-full rounded-lg  bg-white p-1 text-lg hover:bg-primary dark:bg-black dark:hover:bg-primary">
            Mais notícias
          </button>
        </section>
      </div>
    </main>
  )
}
