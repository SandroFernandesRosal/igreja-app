'use client'
import News from '../components/News'
import New from '../components/New'

import { useSearch } from '../store/searchStore'

export default function Noticias() {
  const { DataNews } = useSearch()
  const { setSearch } = useSearch()

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 pt-24 md:pt-[165px]">
      <News>
        {DataNews.reverse().map((item) => (
          <New
            key={item.id}
            url={item.url}
            title={item.title}
            id={item.id}
            setSearch={setSearch}
            description={item.description.slice(0, 30)}
          />
        ))}
      </News>
    </main>
  )
}
