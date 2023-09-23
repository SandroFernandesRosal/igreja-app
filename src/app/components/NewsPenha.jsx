'use client'

import New from './New'
import News from './News'
import Carousel from './Carousel'

import { useNews, useSearch } from '../store/useStore'

export default function NewsPenha({ children }) {
  const { news, setNews } = useNews()
  const { search, setSearch } = useSearch()
  const results = news.filter(
    (item) => item.title.toLowerCase().indexOf(search) !== -1,
  )

  return (
    <div className="flex w-[100vw]  flex-col items-center    justify-center bg-transparent">
      <Carousel news={news} />
      <News
        news={news}
        setNews={setNews}
        search={search}
        setSearch={setSearch}
        results={results}
      >
        {news &&
          news
            .reverse()
            .slice(0, 6)
            .map((item) => (
              <New
                key={item.id}
                url={item.url}
                title={item.title}
                id={item.id}
                description={item.description.slice(0, 30)}
                setNews={setNews}
                page={item.page}
                news={setNews}
              />
            ))}
      </News>
      {children}
    </div>
  )
}
