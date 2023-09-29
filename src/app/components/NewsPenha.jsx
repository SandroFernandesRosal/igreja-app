'use client'

import New from './New'
import News from './News'
import Carousel from './Carousel'

import { useData, useSearch } from '../store/useStore'

export default function NewsPenha({ children }) {
  const { data, setData } = useData()
  const { search, setSearch } = useSearch()
  const results = data.news.filter(
    (item) => item.title.toLowerCase().indexOf(search) !== -1,
  )

  return (
    <div className="flex w-[100vw]  flex-col items-center    justify-center bg-transparent">
      <Carousel data={data.news} />
      <News
        data={data.news}
        setData={setData}
        search={search}
        setSearch={setSearch}
        results={results}
      >
        {data.news &&
          data.news
            .reverse()
            .slice(0, 6)
            .map((item) => (
              <New
                key={item.id}
                url={item.url}
                title={item.title}
                id={item.id}
                description={item.description.slice(0, 30)}
                setNews={setData}
                page={item.page}
                data={data}
              />
            ))}
      </News>
      {children}
    </div>
  )
}
