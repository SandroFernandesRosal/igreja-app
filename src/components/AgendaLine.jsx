import { useState } from 'react'

import { MdArrowBack, MdArrowForward, MdOutlineSettings } from 'react-icons/md'
import EditAgenda from './crud/EditAgenda'
import RemoveAgenda from './crud/RemoveAgenda'
import { AiOutlineClose } from 'react-icons/ai'
import SkeletonMaisNoticias from './skeleton/SkeletonMaisNoticias'

export default function AgendaLine({ data, token, loading }) {
  const [offset, setOffset] = useState(0)
  const [isDisabledNext, setIsDisabledNext] = useState(false)
  const [isDisabledPrev, setIsDisabledPrev] = useState(true)
  const [openSettings, setOpenSettings] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [editOpen, setEditOpen] = useState(false)
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
      <section className="mb-4 flex w-full flex-col items-center justify-center gap-2">
        <h1 className="mb-4 flex gap-2 self-start text-xl font-bold ">
          <span className="ml-5 flex  border-b-2 border-secundary">Mais</span>{' '}
          <p>eventos</p>
        </h1>
        <div className="flex w-full flex-col px-4">
          {!loading ? (
            newsToDisplay && newsToDisplay.length < 1 ? (
              <p className="text-center">Nenhum evento cadastrado.</p>
            ) : (
              <>
                {newsToDisplay.map((item) => (
                  <div key={item.id} className="flex items-center">
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
                            className="z-20 cursor-pointer text-3xl"
                          />
                        ) : (
                          <MdOutlineSettings
                            className="z-20 cursor-pointer text-3xl"
                            onClick={() => {
                              setSelectedItem(item)
                              setOpenSettings(true)
                            }}
                          />
                        )}
                      </>
                    )}
                    <p className="font bold m-2 max-w-[200px] basis-2/6 rounded-lg border-[1px] border-zinc-400 bg-gradient-to-r from-slate-950 to-blue-900 px-2 text-center text-white dark:border-zinc-700  md:text-xl">
                      {item.day}
                    </p>
                    <h1 className="font-bold">{item.name}</h1>
                    {openSettings &&
                      selectedItem &&
                      selectedItem.id === item.id && (
                        <div className="absolute flex w-full items-center    rounded-lg pl-8 backdrop-blur-3xl  md:w-[80vw]">
                          <button
                            className="m-[5px] rounded-lg border-[1px] border-zinc-400 bg-gradient-to-r  from-slate-950 to-blue-900  px-2 text-white hover:from-blue-900 hover:to-slate-900 dark:border-zinc-700  md:px-3 md:text-lg  md:font-bold"
                            onClick={() => {
                              setOpenSettings(false)
                              setEditOpen(true)
                            }}
                          >
                            Editar
                          </button>
                          <RemoveAgenda id={item.id} />
                        </div>
                      )}
                  </div>
                ))}
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
                className={`m-2 mb-4 flex h-full w-[50px] cursor-pointer items-center justify-center rounded-xl border-[1px] border-zinc-400 p-2 font-bold text-white hover:from-blue-900 hover:to-slate-900 dark:border-zinc-700  ${
                  isDisabledPrev
                    ? 'bg-gradient-to-r from-slate-950/20 to-blue-900/20'
                    : 'bg-gradient-to-r from-slate-950 to-blue-900'
                }`}
              >
                <MdArrowBack className="text-3xl font-bold text-white" />
              </button>
              <button
                onClick={loadNextPage}
                disabled={isDisabledNext}
                className={`m-2 mb-4 flex h-full w-[50px] cursor-pointer items-center justify-center rounded-xl border-[1px] border-zinc-400  p-2 font-bold hover:from-blue-900 hover:to-slate-900 dark:border-zinc-700 ${
                  isDisabledNext
                    ? 'bg-gradient-to-r from-slate-950/20 to-blue-900/20'
                    : 'bg-gradient-to-r from-slate-950 to-blue-900'
                }`}
              >
                <MdArrowForward className="text-3xl font-bold text-white" />
              </button>
            </div>
            <p className="font-bold">
              Página {displayCurrentPage} de {totalPages}
            </p>
          </>
        )}
      </section>

      {editOpen && selectedItem && (
        <EditAgenda
          id={selectedItem.id}
          title={selectedItem.name}
          hora={selectedItem.hour}
          dia={selectedItem.day}
          destacar={selectedItem.destaque}
          setOpenEdit={setEditOpen}
        />
      )}
    </>
  )
}
