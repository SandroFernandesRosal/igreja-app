import { imgs } from './components/imgs'
import CarouselTwo from './components/CarouselTwo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 md:pt-48">
      <CarouselTwo imgs={imgs} />
    </main>
  )
}
