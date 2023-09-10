'use client'
import Link from 'next/link'
import Search from './Search'
import ResultLength from './ResultLength'
import { useSearch } from '../store/searchStore'
import New from './New'

export default function News({ children }) {
  const { DataNews } = useSearch()
  const { search } = useSearch()
  const { setSearch } = useSearch()

  const results = DataNews.filter(
    (item) => item.title.toLowerCase().indexOf(search) !== -1,
  )
  return (
    <section className="bg-white-/20 mb-5  flex w-[90vw] flex-col items-center rounded-xl bg-white/20 shadow-lg dark:bg-black/20 dark:shadow-dark ">
      <h1 className="m-0 text-lg font-bold text-primary ">Notícias</h1>
      <p className="mb-5 text-xl">Fique por dentro das notícias</p>
      <Search />

      {search ? <ResultLength search={search} DataNews={DataNews} /> : null}
      <div className="flex w-full  flex-wrap justify-center gap-x-5 p-1 md:gap-x-5">
        {search ? (
          results.map((item) => (
            <New
              key={item.id}
              url={item.url}
              title={item.title}
              id={item.id}
              setSearch={setSearch}
              description={item.description.slice(0, 30)}
            />
          ))
        ) : (
          <>
            <div className="flex w-full  flex-wrap justify-center gap-x-5 p-1 md:gap-x-5">
              {children}
            </div>

            <Link
              href={`/noticias/`}
              className="mb-5   h-[30px] w-[150px] rounded-xl shadow-lg dark:shadow-dark  "
            >
              <button className="flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-primary  font-bold text-white  hover:bg-primary/50  ">
                Mais notícias
              </button>
            </Link>
          </>
        )}
      </div>
    </section>
  )
}
