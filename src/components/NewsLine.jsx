import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { useLocal, useData } from '../store/useStore'
import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'
import Link from 'next/link'

export default function NewsLine() {
  const { data, setData } = useData()

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

  function formatDate(isoDateString) {
    const date = new Date(isoDateString)
    const formattedDate = format(date, 'dd MMM', { locale: pt })
    return formattedDate
  }

  useEffect(() => {
    api
      .get(`/news/${local}?offset=${offset}`)
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
          <Link
            href={`/noticias/${item.page}/${item.id}`}
            key={item.id}
            className="flex gap-2"
          >
            <p className="font bold w-[78px]  rounded-lg bg-gradient-to-r from-slate-950 to-blue-900 text-center text-white md:px-2 md:text-xl">
              {formatDate(item.createdAt)}
            </p>
            <h1 className="font-bold">{item.title}</h1>
          </Link>
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
