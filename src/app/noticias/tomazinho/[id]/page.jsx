'use client'
import Image from 'next/image'
import New from '@/components/New'
import { useLocal, useSearch, useData } from '@/store/useStore'
import { useEffect, useState } from 'react'

import RemoveNew from '@/components/RemoveNew'
import EditNew from '@/components/EditNew'
import Cookies from 'js-cookie'
import { format } from 'date-fns'

export default function NoticiaTomazinho({ params }) {
  const id = params.id
  const { setSearch } = useSearch()
  const { setLocal } = useLocal()
  const { data, setData } = useData()
  const [openEdit, setOpenEdit] = useState(false)

  const token = Cookies.get('tokennn')

  const selectedItem = data.find((item) => item.id === id)

  useEffect(() => {
    const newsFromLocalStorage = localStorage.getItem('data')
    if (newsFromLocalStorage) {
      setData(JSON.parse(newsFromLocalStorage))
    }
  }, [setData])

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])

  function formatDate(dateString) {
    const date = new Date(dateString)
    const formattedDate = format(date, 'dd/MM/yyyy HH:mm') // Formato desejado
    return formattedDate
  }

  return (
    <main className="flex min-h-screen flex-col  items-center gap-5 pt-24 md:pt-[165px]">
      <article className="mb-5  flex w-full flex-col items-center  rounded-[35px] bg-bglightsecundary shadow-light dark:bg-bgdarksecundary dark:shadow-dark md:w-[90vw]">
        <div className="flex w-full items-center justify-around">
          {selectedItem && selectedItem.createdAt ? (
            <h1 className="text-sm">
              Postado em: {formatDate(selectedItem.createdAt)}
            </h1>
          ) : (
            <h1 className="...">Carregando...</h1>
          )}
          {token && (
            <div className="flex gap-2">
              {openEdit === false && (
                <button
                  className="text-lg font-bold text-green-500"
                  onClick={() => setOpenEdit(true)}
                >
                  Editar
                </button>
              )}

              {openEdit && (
                <EditNew
                  img={selectedItem.coverUrl}
                  titulo={selectedItem.title}
                  conteudo={selectedItem.content}
                  id={id}
                  setOpenEdit={setOpenEdit}
                />
              )}
              <RemoveNew id={id} />
            </div>
          )}
        </div>
        <h1 className="w-[90vw] max-w-[500px]  text-center text-2xl font-bold">
          {selectedItem && selectedItem.title ? (
            <h1 className="...">{selectedItem.title}</h1>
          ) : (
            <h1 className="...">Carregando...</h1>
          )}
        </h1>
        {selectedItem ? (
          <>
            <Image
              src={selectedItem.coverUrl}
              alt={selectedItem.title}
              width={500}
              height={500}
              className="w-[100vw] max-w-[500px] pt-2"
            />

            <p className=" w-[90vw] max-w-[500px] py-5 text-justify text-lg">
              {selectedItem.content}
            </p>
          </>
        ) : (
          <p>Carregando...</p>
        )}
      </article>
      <article className="mb-10 flex flex-col items-center rounded-[35px] bg-bglightsecundary shadow-light dark:bg-bgdarksecundary dark:shadow-dark md:w-[90vw]">
        <h1 className=" w-[90vw] max-w-[500px]  text-center text-2xl font-bold">
          Leia também as últimas notícias
        </h1>
        <div className=" flex  w-full flex-wrap justify-center gap-x-5  p-1 pt-5   md:gap-x-5">
          {data &&
            data
              .slice(0, 6)
              .map((item) => (
                <New
                  key={item.id}
                  url={item.coverUrl}
                  title={item.title}
                  id={item.id}
                  setSearch={setSearch}
                  description={item.content.slice(0, 30)}
                  page={item.page}
                  data={data}
                  setLocal={setLocal}
                />
              ))}
        </div>
      </article>
    </main>
  )
}
