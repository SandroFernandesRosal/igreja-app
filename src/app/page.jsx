'use client'
import CarouselTwo from './components/CarouselTwo'
import Search from './components/Search'
import News from './components/News'
import { useSearch } from './store/searchStore'
import Locais from './components/Locais'

export default function Home() {
  const { search } = useSearch()
  const { imgs } = useSearch()
  const { setSearch } = useSearch()

  const results = imgs.filter((item) => item.title.indexOf(search) !== -1)
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 pt-24 md:pt-48">
      <Search />
      {search ? (
        results.map((item) => (
          <div
            key={item.id}
            className="flex h-[100px] w-[80vw] items-center justify-center rounded-lg bg-primary/40 backdrop-blur-lg md:rounded-lg"
            onClick={() => setSearch('')}
          >
            {item.title}
          </div>
        ))
      ) : (
        <>
          <div className="flex w-[80vw] flex-col items-center justify-center gap-5 md:w-[100vw] md:flex-row md:items-stretch md:p-5 ">
            <div className="flex  h-[400px] w-[400px]  justify-center overflow-hidden  md:h-[400px]   md:w-[400px]">
              <CarouselTwo imgs={imgs} />
            </div>
            <News />
          </div>
          <Locais />
        </>
      )}
    </main>
  )
}
