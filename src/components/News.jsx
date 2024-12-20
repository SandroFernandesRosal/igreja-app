'use client'

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
import NewsLine from './NewsLine'

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
        setData(response.data.newsTotal)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [local, setData, setLoading])

  return (
    <section
      className={`mx-1 my-5 flex w-[100vw] flex-col items-center justify-center rounded-[35px] border-[1px] border-solid border-zinc-400  bg-bglightsecundary dark:border-zinc-700 dark:bg-bgdarksecundary md:w-[90vw]   md:self-center md:rounded-xl lg:flex-1  lg:self-start  lg:rounded-none lg:border-[0px] lg:border-l-[1px] lg:bg-transparent lg:shadow-none dark:lg:bg-transparent  ${
        data.length < 1 && 'lg:min-h-[500px] lg:justify-start'
      }`}
    >
      {search ? (
        <h1 className="mb-4  hidden gap-2 self-start text-xl font-bold lg:flex ">
          <span className="ml-5 flex  border-b-2 border-secundary">
            Resultado
          </span>{' '}
          <p>da busca:</p>
        </h1>
      ) : (
        <h1 className="mb-4  hidden gap-2 self-start text-xl font-bold lg:flex ">
          <span className="ml-5 flex  border-b-2 border-secundary">
            Notícias
          </span>{' '}
          <p>em destaque</p>
        </h1>
      )}

      <div className="flex flex-col items-center md:min-w-[35%]  lg:hidden">
        <h1 className="m-0 text-lg font-bold text-primary dark:text-secundary lg:hidden ">
          Notícias
        </h1>
        <p className=" px-2 text-center text-xl lg:hidden">
          Fique por dentro das notícias
        </p>

        <SelectLocal />
        <Search />
      </div>
      {token && (
        <>
          {openNew === false && (
            <div
              className="mb-4 flex cursor-pointer rounded-lg border-[1px] border-zinc-400 bg-bglight p-2 placeholder-black outline-none  hover:bg-gradient-to-r hover:from-blue-900 hover:to-slate-900 hover:text-white focus:ring-0 dark:border-zinc-700 dark:bg-bgdark dark:placeholder-white  lg:hidden"
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

      {search ? (
        <h1 className="mb-4 flex  gap-2 self-start text-xl font-bold lg:hidden ">
          <span className="ml-5 flex  border-b-2 border-secundary">
            Resultado
          </span>{' '}
          <p>da busca:</p>
        </h1>
      ) : (
        <h1
          className={`mb-4 flex gap-2 self-start text-xl font-bold  lg:hidden ${
            search ? 'hidden' : 'flex'
          }`}
        >
          <span className="ml-5 flex  border-b-2 border-secundary">
            Notícias
          </span>{' '}
          <p>em destaque</p>
        </h1>
      )}

      {search ? <ResultLength search={search} dataSearch={dataSearch} /> : null}
      <div
        className={`relative -top-[30px] flex w-full flex-wrap justify-center  gap-x-5 border-b-[1px]  border-solid border-zinc-400 p-1 px-2 pb-5 pt-10 dark:border-zinc-700
        md:gap-x-5
        `}
      >
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
          data && data.filter((item) => item.destaque === true).length < 1 ? (
            <p>Nenhum destaque cadastrado.</p>
          ) : (
            <>
              {data &&
                data
                  .filter((item) => item.destaque === true)
                  .slice(0, 4)
                  .map((item) => (
                    <New
                      key={item.id}
                      url={item.coverUrl}
                      title={item.title}
                      id={item.id}
                      setSearch={setSearch}
                      description={item.content.slice(0, 40)}
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

      <NewsLine loading={loading} />
    </section>
  )
}
