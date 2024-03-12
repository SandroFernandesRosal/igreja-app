import Link from 'next/link'
import Search from './Search'
import ResultLength from './ResultLength'

import SelectLocal from './SelectLocal'
import { api } from '@/lib/api'
import New from './New'
import NewSearch from './NewSearch'

import SkeletonNew from './skeleton/SkeletonNew'
import { useSearch, useLoading, useLocal } from '@/store/useStore'

export default async function NewsAsync() {
  const search = useSearch.getState().search
  const setSearch = useSearch.getState().setSearch
  const local = useLocal.getState().local
  const setLocal = useLocal.getState().setLocal
  const loading = useLoading.getState().loading
  const setLoading = useLoading.getState().setLoading

  const responseData = await api.get(`/news/${local}`)
  const data = responseData.data
  if (data) {
    setLoading(false)
  }

  const responseDataSeaarch = await api.get(
    `/news/${local}/search?search=${search}`,
  )
  const dataSearch = responseDataSeaarch.data

  return (
    <section className=" my-5 flex  w-[100vw] flex-col items-center rounded-[35px] bg-bglightsecundary shadow-light dark:bg-bgdarksecundary dark:shadow-dark  md:w-[90vw] md:rounded-xl  ">
      <div className="flex flex-col items-center  md:min-w-[35%]">
        <h1 className="m-0 text-lg font-bold text-primary ">Notícias</h1>
        <p className=" px-2 text-xl">Fique por dentro das notícias</p>
        <SelectLocal />
        <Search />
      </div>

      {search ? <ResultLength search={search} dataSearch={dataSearch} /> : null}
      <div className="relative -top-[30px] flex w-full flex-wrap justify-center gap-x-5 p-1 px-2 pt-10 md:gap-x-5">
        {search ? (
          dataSearch &&
          dataSearch.length > 0 &&
          dataSearch.map((item) => (
            <NewSearch
              key={item.id}
              url={item.coverUrl}
              title={item.title}
              id={item.id}
              setSearch={setSearch}
              description={item.content.slice(0, 30)}
              page={item.page}
              setLocal={setLocal}
            />
          ))
        ) : !loading ? (
          data && data.length < 1 ? (
            <p>Nenhuma notícia cadastrada.</p>
          ) : (
            <>
              {data &&
                data.map((item) => (
                  <New
                    key={item.id}
                    url={item.coverUrl}
                    title={item.title}
                    id={item.id}
                    setSearch={setSearch}
                    description={item.content}
                    page={item.page}
                    data={data}
                    setLocal={setLocal}
                  />
                ))}
            </>
          )
        ) : (
          <SkeletonNew />
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
