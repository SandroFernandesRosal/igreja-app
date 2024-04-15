'use client'
import { useState } from 'react'
import News from './News'
import NewSlider from './NewSlider'
import Search from './Search'
import SelectLocal from './SelectLocal'
import { useToken } from '@/hooks/useToken'
import AddNew from './crud/AddNew'

export default function NewsPenha() {
  const [openNew, setOpenNew] = useState(false)
  const token = useToken()
  return (
    <div className="flex flex-col  items-center justify-center gap-2 rounded-xl bg-transparent md:items-center  lg:mb-4 lg:w-[90vw]      lg:bg-bglightsecundary lg:px-2 lg:shadow-light  lg:dark:bg-bgdarksecundary lg:dark:shadow-dark">
      <div className=" hidden flex-col items-center md:min-w-[35%] lg:flex">
        <h1 className="m-0 text-lg font-bold text-primary dark:text-secundary sm:hidden lg:flex ">
          Notícias
        </h1>
        <p className=" px-2 text-center text-xl sm:hidden lg:flex ">
          Fique por dentro das notícias
        </p>

        <SelectLocal />
        <Search />
      </div>

      {token && (
        <>
          {openNew === false && (
            <div
              className="mb-4  hidden cursor-pointer rounded-lg border-none bg-bglight p-2 placeholder-black shadow-light outline-none hover:bg-gradient-to-r hover:from-blue-900 hover:to-slate-900 hover:text-white focus:ring-0 dark:bg-bgdark dark:placeholder-white dark:shadow-dark lg:flex"
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

      <div className="flex w-[100%] flex-col  lg:flex-row  lg:flex-wrap lg:items-start ">
        <NewSlider />
        <News />
      </div>
    </div>
  )
}
