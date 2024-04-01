'use client'
import Image from 'next/image'
import New from '@/components/New'
import { useData, useSearch, useLocal } from '@/store/useStore'
import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import RemoveNew from '@/components/crud/RemoveNew'
import EditNew from '@/components/crud/EditNew'
import { useToken } from '@/hooks/useToken'
import { format } from 'date-fns'

export default function NoticiaVilaDaPenha({ params }) {
  const id = params.id
  const { setSearch } = useSearch()
  const { setLocal, local } = useLocal()
  const { data, setData } = useData()
  const [openEdit, setOpenEdit] = useState(false)
  const [updated, setUpdated] = useState(false)

  const token = useToken()

  const selectedItem = data.find((item) => item.id === id)

  useEffect(() => {
    api
      .get(`/news/${local}`)
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => console.log(err))
  }, [local, setData])

  useEffect(() => {
    if (selectedItem && selectedItem.updatedAt) {
      const updatedAtLocal = localStorage.getItem(`updated_${id}`)
      if (!updatedAtLocal || updatedAtLocal !== selectedItem.updatedAt) {
        setUpdated(true)
        localStorage.setItem(`updated_${id}`, selectedItem.updatedAt)
      }
    }
  }, [selectedItem, id])

  function formatDate(dateString) {
    const date = new Date(dateString)
    const formattedDate = format(date, 'dd/MM/yyyy HH:mm') // Formato desejado
    return formattedDate
  }

  return (
    <main className="flex min-h-screen flex-col  items-center gap-5 pt-24 md:pt-[165px]">
      <article className="mb-5  flex w-full flex-col items-center  rounded-[35px] bg-bglightsecundary shadow-light dark:bg-bgdarksecundary dark:shadow-dark md:w-[90vw]">
        <div className="flex w-full items-center justify-around">
          {token && selectedItem && (
            <div className="mt-2 flex gap-3">
              {openEdit === false && (
                <button
                  className="m-[5px]  rounded-lg bg-gradient-to-r from-slate-950 to-blue-900  px-1 text-white  shadow-light hover:from-blue-900 hover:to-slate-900 md:px-3  md:text-lg md:font-bold"
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
            <>{selectedItem.title}</>
          ) : (
            <>Carregando...</>
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

            {selectedItem && selectedItem.createdAt ? (
              <h1 className="flex w-[100vw] max-w-[500px] justify-between px-2 text-sm">
                <span>Postado em: {formatDate(selectedItem.createdAt)}</span>
                {selectedItem && updated && selectedItem.updatedAt && (
                  <span>
                    Atualizado em: {formatDate(selectedItem.updatedAt)}
                  </span>
                )}
              </h1>
            ) : (
              <h1 className="...">Carregando...</h1>
            )}

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
            data.map((item) => (
              <New
                key={item.id}
                url={item.coverUrl}
                title={item.title}
                id={item.id}
                setSearch={setSearch}
                description={item.content}
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
