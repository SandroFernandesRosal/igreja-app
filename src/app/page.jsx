import { imgs } from './components/imgs'
import CarouselTwo from './components/CarouselTwo'
import Search from './components/Search'
import News from './components/News'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 pt-24 md:pt-48">
      <Search />
      <div className="flex w-[80vw] flex-col items-center justify-center gap-5 md:w-[100vw] md:flex-row md:items-stretch md:p-5 ">
        <div className="flex  h-[400px] w-[400px]  justify-center overflow-hidden  md:h-[400px]   md:w-[400px]">
          <CarouselTwo imgs={imgs} />
        </div>
        <News />
      </div>
    </main>
  )
}
