'use client'
import Link from 'next/link'
import Search from './Search'
import ResultLength from './ResultLength'
import { useData, useSearch } from '../store/useStore'
import New from './New'
import { DataVp } from '../service/DataVp'
import { Data2 } from '../service/Data2'
import { Data3 } from '../service/Data3'
import { useEffect } from 'react'

export default function News({ children }) {
  const { data, setData } = useData()
  const { search, setSearch } = useSearch()
  const results = data.news.filter(
    (item) => item.title.toLowerCase().indexOf(search) !== -1,
  )
  useEffect(() => {
    const newsFromLocalStorage = localStorage.getItem('data')
    if (newsFromLocalStorage) {
      setData(JSON.parse(newsFromLocalStorage))
    }
  }, [setData])

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])
  return (
    <section className=" mb-5  flex w-[100vw] flex-col items-center rounded-[35px] bg-bglightsecundary shadow-light dark:bg-bgdarksecundary dark:shadow-dark md:w-[90vw] md:rounded-xl  ">
      <h1 className="m-0 text-lg font-bold text-primary ">Notícias</h1>
      <p className=" px-2 text-xl">Fique por dentro das notícias</p>
      <div className="mb-5 flex gap-3 text-primary">
        <p className="cursor-pointer" onClick={() => setData(DataVp)}>
          Vila da Penha
        </p>{' '}
        |
        <p className="cursor-pointer" onClick={() => setData(Data2)}>
          igreja 2
        </p>
        |
        <p className="cursor-pointer" onClick={() => setData(Data3)}>
          igreja 3
        </p>
      </div>
      <Search />

      {search ? <ResultLength search={search} data={data.news} /> : null}
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
              data={data.news}
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
