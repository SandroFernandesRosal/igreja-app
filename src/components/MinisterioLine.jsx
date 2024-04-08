import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { useLocal } from '../store/useStore'

import { MdArrowBack, MdArrowForward } from 'react-icons/md'
import LideresItem from './LideresItem'

export default function MinisterioLine({ data, setData }) {
  const { local } = useLocal()
  const [offset, setOffset] = useState(0)
  const [isDisabledNext, setIsDisabledNext] = useState(false)
  const [isDisabledPrev, setIsDisabledPrev] = useState(true)
  const newsPerPage = 6

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

  useEffect(() => {
    api
      .get(`/ministerio/${local}?offset=${offset}`)
      .then((response) => {
        if (response.dataLine.length > 0) {
          setData((prevData) => [...prevData, ...response.data])
        } else {
          setIsDisabledNext(true)
        }
      })
      .catch((err) => console.log(err))
  }, [local, setData, offset, data])

  const totalNews = data.length
  const totalPages = Math.ceil(totalNews / newsPerPage)
  const currentPage = Math.ceil((offset + newsPerPage) / newsPerPage)
  const displayCurrentPage = Math.min(currentPage, totalPages)

  const newsToDisplay = data.slice(
    (displayCurrentPage - 1) * newsPerPage,
    displayCurrentPage * newsPerPage,
  )

  return (
    <section className="mb-4 flex w-full flex-col items-center justify-center gap-2 ">
      <div className="flex  w-full flex-col gap-2 px-4">
        {newsToDisplay.map((item) => (
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
          className={`m-2 mb-4 flex h-full w-[50px] cursor-pointer items-center justify-center rounded-xl  p-2 font-bold text-white shadow-light hover:from-blue-900 hover:to-slate-900 dark:shadow-dark ${
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
          className={`m-2 mb-4 flex h-full w-[50px] cursor-pointer items-center justify-center rounded-xl  p-2 font-bold  shadow-light  hover:from-blue-900 hover:to-slate-900 dark:shadow-dark ${
            isDisabledNext
              ? 'bg-gradient-to-r from-slate-950/20 to-blue-900/20'
              : 'bg-gradient-to-r from-slate-950 to-blue-900 '
          } `}
        >
          <MdArrowForward className="text-3xl font-bold text-white" />
        </button>
      </div>

      {/* Exibição do número de páginas */}
      <p className=" font-bold">
        Página {displayCurrentPage} de {totalPages}
      </p>
    </section>
  )
}
