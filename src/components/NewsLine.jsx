'use client'
import { useState } from 'react'

import { useData } from '../store/useStore'
import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import { MdArrowBack, MdArrowForward, MdOutlineSettings } from 'react-icons/md'
import Link from 'next/link'
import { useToken } from '@/hooks/useToken'

import { AiOutlineClose } from 'react-icons/ai'
import RemoveNew from './crud/RemoveNew'
import EditNew from './crud/EditNew'
import SkeletonMaisNoticias from './skeleton/SkeletonMaisNoticias'

export default function NewsLine({ loading }) {
  const { data } = useData()

  const [offset, setOffset] = useState(0)
  const [isDisabledNext, setIsDisabledNext] = useState(false)
  const [isDisabledPrev, setIsDisabledPrev] = useState(true)
  const [openSettings, setOpenSettings] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [editOpen, setEditOpen] = useState(false)
  const newsPerPage = 6
  const token = useToken()

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

  const totalNews = data.length
  const totalPages = Math.ceil(totalNews / newsPerPage)
  const currentPage = Math.ceil((offset + newsPerPage) / newsPerPage)
  const displayCurrentPage = Math.min(currentPage, totalPages)

  const newsToDisplay = data.slice(
    (displayCurrentPage - 1) * newsPerPage,
    displayCurrentPage * newsPerPage,
  )

  return (
    <>
      <section className="mb-4 flex w-full flex-col items-center justify-center gap-2 ">
        <h1 className="mb-4 flex gap-2 self-start text-xl font-bold ">
          <span className="ml-5 flex  border-b-2 border-secundary">Mais</span>{' '}
          <p>notícias</p>
        </h1>
        <div className="flex  w-full flex-col  px-4">
          {!loading ? (
            newsToDisplay.length < 1 ? (
              <p className="text-center">Nenhuma notícia cadastrada</p>
            ) : (
              <>
                {' '}
                {newsToDisplay.map((item) => (
                  <div key={item.id} className="flex gap-2">
                    {token && (
                      <>
                        {openSettings &&
                        selectedItem &&
                        selectedItem.id === item.id ? (
                          <AiOutlineClose
                            onClick={() => {
                              setSelectedItem(item)
                              setOpenSettings(false)
                            }}
                            className="z-10 cursor-pointer text-3xl"
                          />
                        ) : (
                          <MdOutlineSettings
                            className={`${
                              editOpen && 'z-0'
                            } z-10 cursor-pointer text-3xl`}
                            onClick={() => {
                              setSelectedItem(item)
                              setOpenSettings(true)
                            }}
                          />
                        )}
                      </>
                    )}
                    <Link
                      href={`/noticias/${item.page}/${item.id}`}
                      key={item.id}
                      className="flex items-center"
                    >
                      <p className="font bold m-2 w-[78px] rounded-lg  border-[1px]  border-zinc-400 bg-gradient-to-r from-slate-950 to-blue-900  text-center text-white dark:border-zinc-700 md:px-2 md:text-xl">
                        {formatDate(item.createdAt)}
                      </p>
                      <h1 className=" font-bold">{item.title}</h1>
                    </Link>
                    {openSettings &&
                      selectedItem &&
                      selectedItem.id === item.id && (
                        <div className="absolute flex w-[100%] items-center rounded-lg   pl-8 backdrop-blur-3xl md:w-[85%] lg:w-[40%]">
                          <button
                            className="m-[5px] rounded-lg border-[1px] border-zinc-400 bg-gradient-to-r  from-slate-950 to-blue-900  px-2 text-white hover:from-blue-900 hover:to-slate-900 dark:border-zinc-700  md:px-3 md:text-lg  md:font-bold"
                            onClick={() => {
                              setOpenSettings(false)
                              setEditOpen(true)
                            }}
                          >
                            Editar
                          </button>
                          <RemoveNew id={item.id} />
                        </div>
                      )}
                  </div>
                ))}{' '}
              </>
            )
          ) : (
            <SkeletonMaisNoticias />
          )}
        </div>

        {!loading && newsToDisplay.length > 0 && (
          <>
            {' '}
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
            </div>{' '}
            <p className=" font-bold">
              Página {displayCurrentPage} de {totalPages}
            </p>{' '}
          </>
        )}
      </section>

      {editOpen && selectedItem && (
        <EditNew
          id={selectedItem.id}
          titulo={selectedItem.title}
          conteudo={selectedItem.content}
          img={selectedItem.coverUrl}
          destacar={selectedItem.destaque}
          setOpenEdit={setEditOpen}
        />
      )}
    </>
  )
}
