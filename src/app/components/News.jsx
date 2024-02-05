'use client'
import Link from 'next/link'
import Search from './Search'
import ResultLength from './ResultLength'
import { useSearch, useLocal, useDataSearch } from '../store/useStore'
import Cookies from 'js-cookie'
import { ImNewspaper } from 'react-icons/im'
import SelectLocal from './SelectLocal'
import { api } from '@/lib/api'

import { useEffect, useState } from 'react'
import NewSearch from './NewSearch'
import AddNew from './AddNew'
import SkeletonNew from './SkeletonNew'

export default function News({ children, setLocal, loading }) {
  const { dataSearch, setDataSearch } = useDataSearch()
  const { search, setSearch } = useSearch()
  const { local } = useLocal()
  const token = Cookies.get('tokennn')
  const [openNew, setOpenNew] = useState(false)

  useEffect(() => {
    api
      .get(`/news/${local}/search?search=${search}`)
      .then((response) => {
        setDataSearch(response.data)
      })
      .catch((err) => console.log(err))
  }, [local, setDataSearch, search])
  return (
    <section className=" mb-5  flex w-[100vw] flex-col items-center rounded-[35px] bg-bglightsecundary shadow-light dark:bg-bgdarksecundary dark:shadow-dark md:w-[90vw] md:rounded-xl  ">
      <div
        className={`w-full  justify-center ${
          openNew === true ? 'md:flex' : 'md:flex-col'
        }`}
      >
        <div className="flex flex-col items-center  md:min-w-[35%]">
          <h1 className="m-0 text-lg font-bold text-primary ">Notícias</h1>
          <p className=" px-2 text-xl">Fique por dentro das notícias</p>
          <SelectLocal />
          <Search />
        </div>
        {token && (
          <>
            {openNew === false ? (
              <div
                className="mb-4 flex  cursor-pointer items-center justify-center gap-2 text-lg font-bold"
                onClick={() => setOpenNew(true)}
              >
                <ImNewspaper className="text-2xl text-primary" />
                Adicionar Notícia
              </div>
            ) : null}

            {openNew && (
              <div className="md:min-w-[35%]">
                {' '}
                <AddNew openNew={openNew} setOpenNew={setOpenNew} />
              </div>
            )}
          </>
        )}
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
          <>{children}</>
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
