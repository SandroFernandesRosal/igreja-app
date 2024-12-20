import { useState } from 'react'

import { MdArrowBack, MdArrowForward } from 'react-icons/md'
import LideresItem from './LideresItem'

export default function MinisterioLine({ data }) {
  const [offset, setOffset] = useState(0)
  const [isDisabledNext, setIsDisabledNext] = useState(false)
  const [isDisabledPrev, setIsDisabledPrev] = useState(true)

  const newsPerPage = 4

  const loadNextPage = () => {
    if (data.length < offset + newsPerPage) {
      setIsDisabledNext(true)
      return
    }
    setOffset(offset + newsPerPage)
    setIsDisabledPrev(false)
  }

  const loadPreviousPage = () => {
    if (offset <= 0) {
      setIsDisabledPrev(true)
      return
    }
    setOffset(offset - newsPerPage)
    setIsDisabledNext(false)
  }

  const totalNews = data ? data.length : 0

  const totalPages = Math.ceil(totalNews / newsPerPage)
  const currentPage = Math.ceil((offset + newsPerPage) / newsPerPage)
  const displayCurrentPage = Math.min(currentPage, totalPages)

  const newsToDisplay = data.slice(
    (displayCurrentPage - 1) * newsPerPage,
    displayCurrentPage * newsPerPage,
  )

  return (
    <>
      <div className="flex w-full flex-wrap items-center justify-center gap-2 gap-x-5  px-4 pb-1 pt-6  md:gap-x-5">
        {newsToDisplay &&
          newsToDisplay
            .slice(0, 4)
            .map((item) => (
              <LideresItem
                key={item.id}
                nome={item.name}
                titulo={item.title}
                local={item.local}
                img={item.coverUrl}
                id={item.id}
              />
            ))}
      </div>

      <div className="flex">
        <button
          onClick={loadPreviousPage}
          disabled={isDisabledPrev}
          className={`m-2 mb-4 flex h-full w-[50px] cursor-pointer items-center justify-center rounded-xl  border-[1px] border-zinc-400 p-2  font-bold text-white hover:from-blue-900 hover:to-slate-900 dark:border-zinc-700 ${
            isDisabledPrev
              ? 'bg-gradient-to-r from-slate-950/20 to-blue-900/20'
              : 'bg-gradient-to-r from-slate-950 to-blue-900 '
          } `}
        >
          <MdArrowBack className="text-3xl font-bold text-white" />
        </button>
        <button
          onClick={loadNextPage}
          disabled={isDisabledNext}
          className={`m-2 mb-4 flex h-full w-[50px] cursor-pointer items-center justify-center rounded-xl  border-[1px] border-zinc-400    p-2 font-bold hover:from-blue-900 hover:to-slate-900 dark:border-zinc-700 ${
            isDisabledNext
              ? 'bg-gradient-to-r from-slate-950/20 to-blue-900/20'
              : 'bg-gradient-to-r from-slate-950 to-blue-900 '
          } `}
        >
          <MdArrowForward className="text-3xl font-bold text-white" />
        </button>
      </div>

      <p className=" font-bold">
        Página {displayCurrentPage} de {totalPages}
      </p>
    </>
  )
}
