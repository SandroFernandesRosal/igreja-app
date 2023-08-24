'use client'

import New from './New'
import News from './News'
import CarouselTwo from './CarouselTwo'
import { useSearch } from '../store/searchStore'

export default function NewsPenha() {
  const { DataNews } = useSearch()
  return (
    <div className="flex w-[100vw]  flex-col items-center    justify-center bg-transparent">
      <CarouselTwo />

      <News>
        {DataNews.reverse()
          .slice(0, 4)
          .map((item) => (
            <New key={item.id} url={item.url} title={item.title} id={item.id} />
          ))}
      </News>
    </div>
  )
}
