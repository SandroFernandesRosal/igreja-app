'use client'
import Link from 'next/link'
import Search from './Search'
import ResultLength from './ResultLength'
import { useNews, useSearch } from '../store/useStore'
import New from './New'
import { DataNews } from '../service/DataNews'
import { DataNews2 } from '../service/DataNews2'
import { DataNews3 } from '../service/DataNews3'
import { useEffect } from 'react'

export default function News({ children }) {
  const { news, setNews } = useNews()
  const { search, setSearch } = useSearch()
  const results = news.filter(
    (item) => item.title.toLowerCase().indexOf(search) !== -1,
  )
  useEffect(() => {
    const newsFromLocalStorage = localStorage.getItem('news')
    if (newsFromLocalStorage) {
      setNews(JSON.parse(newsFromLocalStorage))
    }
  }, [setNews])

  useEffect(() => {
    localStorage.setItem('news', JSON.stringify(news))
  }, [news])
  return (
    <section className=" mb-5  flex w-[100vw] flex-col items-center rounded-[35px] bg-bglightsecundary shadow-light dark:bg-bgdarksecundary dark:shadow-dark md:w-[90vw] md:rounded-xl  ">
      <h1 className="m-0 text-lg font-bold text-primary ">Notícias</h1>
      <p className=" px-2 text-xl">Fique por dentro das notícias</p>
      <div className="mb-5 flex gap-3 text-primary">
        <p className="cursor-pointer" onClick={() => setNews(DataNews)}>
          Vila da Penha
        </p>{' '}
        |
        <p className="cursor-pointer" onClick={() => setNews(DataNews2)}>
          igreja 2
        </p>
        |
        <p className="cursor-pointer" onClick={() => setNews(DataNews3)}>
          igreja 3
        </p>
      </div>
      <Search />

      {search ? <ResultLength search={search} news={news} /> : null}
      <div className="relative -top-[30px] flex w-full flex-wrap justify-center gap-x-5 p-1 px-2 pt-10 md:gap-x-5">
        {search ? (
          results.map((item) => (
            <New
              key={item.id}
              url={item.url}
              title={item.title}
              id={item.id}
              setSearch={setSearch}
              description={item.description.slice(0, 30)}
              page={item.page}
              news={news}
            />
          ))
        ) : (
          <>{children}</>
        )}
      </div>
      <Link
        href={`/noticias/`}
        className="mb-10 h-[30px] w-[150px] rounded-xl shadow-light dark:shadow-dark  "
      >
        <button className="flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-primary  font-bold text-black  hover:bg-primary/50  ">
          Mais notícias
        </button>
      </Link>
    </section>
  )
}
