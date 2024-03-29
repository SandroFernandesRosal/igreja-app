'use client'
import Link from 'next/link'
import Search from './Search'
import ResultLength from './ResultLength'
import {
  useSearch,
  useLocal,
  useDataSearch,
  useData,
  useLoading,
} from '../store/useStore'

import { useToken } from '@/hooks/useToken'

import SelectLocal from './SelectLocal'
import { api } from '@/lib/api'
import New from './New'

import { useEffect, useState } from 'react'
import NewSearch from './NewSearch'
import AddNew from './crud/AddNew'
import SkeletonNew from './skeleton/SkeletonNew'

export default function News() {
  const { dataSearch, setDataSearch } = useDataSearch()
  const { data, setData } = useData()
  const { search, setSearch } = useSearch()
  const { local, setLocal } = useLocal()
  const { loading, setLoading } = useLoading()
  const token = useToken()
  const [openNew, setOpenNew] = useState(false)

  useEffect(() => {
    api
      .get(`/news/${local}/search?search=${search}`)
      .then((response) => {
        setDataSearch(response.data)
      })
      .catch((err) => console.log(err))
  }, [local, setDataSearch, search])

  useEffect(() => {
    api
      .get(`/news/${local}`)
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [local, setData, setLoading])

  return (
    <section className=" my-5 flex  w-[100vw] flex-col items-center rounded-[35px] bg-bglightsecundary shadow-light dark:bg-bgdarksecundary dark:shadow-dark  md:w-[90vw] md:rounded-xl  ">
      <div className="flex flex-col items-center  md:min-w-[35%]">
        <h1 className="m-0 text-lg font-bold text-primary ">Notícias</h1>
        <p className=" px-2 text-center text-xl">
          Fique por dentro das notícias
        </p>
        <SelectLocal />
        <Search />
      </div>
      {token && (
        <>
          {openNew === false && (
            <div
              className="mb-4 flex cursor-pointer rounded-lg border-none bg-bglight p-2 placeholder-black shadow-light outline-none hover:bg-gradient-to-r hover:from-blue-900 hover:to-slate-900 hover:text-white focus:ring-0 dark:bg-bgdark dark:placeholder-white dark:shadow-dark"
              onClick={() => setOpenNew(true)}
            >
              Adicionar Notícia
            </div>
          )}

          {openNew && (
            <div className="md:min-w-[35%]">
              {' '}
              <AddNew openNew={openNew} setOpenNew={setOpenNew} />
            </div>
          )}
        </>
      )}

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
        <button className="flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-slate-950 to-blue-900  font-bold text-white  hover:from-blue-900 hover:to-slate-900  ">
          Mais notícias
        </button>
      </Link>
    </section>
  )
}
