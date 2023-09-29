'use client'
import News from '../components/News'
import New from '../components/New'

import { useSearch, useData } from '../store/useStore'

export default function Noticias() {
  const { setSearch } = useSearch()
  const { data } = useData()

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 pt-24 md:pt-[165px]">
      <News>
        {data.news.reverse().map((item) => (
          <New
            key={item.id}
            url={item.url}
            title={item.title}
            id={item.id}
            setSearch={setSearch}
            description={item.description.slice(0, 30)}
            page={item.page}
          />
        ))}
      </News>
    </main>
  )
}
