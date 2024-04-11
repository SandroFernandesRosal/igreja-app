import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { useLocal } from '../store/useStore'
import { MdArrowBack, MdArrowForward, MdOutlineSettings } from 'react-icons/md'
import EditAgenda from './crud/EditAgenda'
import RemoveAgenda from './crud/RemoveAgenda'
import { AiOutlineClose } from 'react-icons/ai'

export default function AgendaLine({ data, setData, token }) {
  const { local } = useLocal()
  const [offset, setOffset] = useState(0)
  const [isDisabledNext, setIsDisabledNext] = useState(false)
  const [isDisabledPrev, setIsDisabledPrev] = useState(true)
  const [openSettings, setOpenSettings] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [editOpen, setEditOpen] = useState(false)
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
      .get(`/agenda/${local}?offset=${offset}`)
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
    <>
      <section className="mb-4 flex w-full flex-col items-center justify-center gap-2">
        <div className="flex w-full flex-col gap-2 px-4">
          {newsToDisplay.map((item) => (
            <div key={item.id} className="flex items-center gap-2">
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
              <p className="font bold max-w-[200px] basis-2/6 rounded-lg bg-gradient-to-r from-slate-950 to-blue-900 px-2 text-center text-white md:text-xl">
                {item.day}
              </p>
              <h1 className="font-bold">{item.name}</h1>
              {openSettings && selectedItem && selectedItem.id === item.id && (
                <div className="absolute flex w-full items-center justify-center   rounded-lg backdrop-blur-md">
                  <button
                    className="m-[5px] rounded-lg bg-gradient-to-r from-slate-950 to-blue-900  px-2 text-white  shadow-light hover:from-blue-900 hover:to-slate-900 dark:shadow-dark md:px-3 md:text-lg  md:font-bold"
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
        </div>

        <div className="flex">
          <button
            onClick={loadPreviousPage}
            disabled={isDisabledPrev}
            className={`m-2 mb-4 flex h-full w-[50px] cursor-pointer items-center justify-center rounded-xl p-2 font-bold text-white shadow-light hover:from-blue-900 hover:to-slate-900 dark:shadow-dark ${
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
            className={`m-2 mb-4 flex h-full w-[50px] cursor-pointer items-center justify-center rounded-xl p-2 font-bold shadow-light hover:from-blue-900 hover:to-slate-900 dark:shadow-dark ${
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
      </section>

      {editOpen && selectedItem && (
        <EditAgenda
          id={selectedItem.id}
          title={selectedItem.name}
          hora={selectedItem.hour}
          dia={selectedItem.day}
          setOpenEdit={setEditOpen} // Fecha o EditAgenda ao terminar a edição
        />
      )}
    </>
  )
}
