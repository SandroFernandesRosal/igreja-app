'use client'
import Image from 'next/image'
import { Suspense, useState } from 'react'
import AddSobreContent from './crud/AddSobreContent'
import { useToken } from '@/hooks/useToken'
import EditSobreContent from './crud/EditSobreContent'
import RemoveSobreContent from './crud/RemoveSobreContent'

export default function ContentQuemSomos({ dataSobre }) {
  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(null)
  const token = useToken()
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      {token && (
        <>
          {open === false && (
            <div
              className="mb-4 flex cursor-pointer rounded-lg border-none bg-bglight p-2 placeholder-black shadow-light outline-none hover:bg-gradient-to-r hover:from-blue-900 hover:to-slate-900 hover:text-white focus:ring-0 dark:bg-bgdark dark:placeholder-white dark:shadow-dark"
              onClick={() => setOpen(true)}
            >
              Adicionar história
            </div>
          )}

          {open && (
            <div className="md:min-w-[35%]">
              {' '}
              <AddSobreContent open={open} setOpen={setOpen} />
            </div>
          )}
        </>
      )}
      {dataSobre.map((item) => (
        <div
          key={item.id}
          className="my-4 flex w-[100vw] flex-col items-center gap-2"
        >
          <h1 className="text-lg font-bold text-primary dark:text-secundary">
            {item.title}
          </h1>
          <p className="w-[90%] max-w-[800px]">{item.content}</p>
          <Image
            src={item.coverUrl}
            height={800}
            width={800}
            alt=""
            className="w-[90%] max-w-[800px] rounded-2xl"
          />
          {token && (
            <div className="mb-2 flex w-full justify-center gap-2 text-white">
              {openEdit === null && (
                <button
                  className="m-2  rounded-lg bg-gradient-to-r from-slate-950 to-blue-900  px-3 font-bold  text-white shadow-light hover:from-blue-900 hover:to-slate-900 dark:shadow-dark md:px-3 md:text-lg"
                  onClick={() => setOpenEdit(item.id)}
                >
                  Editar
                </button>
              )}

              {openEdit === item.id && (
                <EditSobreContent
                  conteudo={item.content}
                  titulo={item.title}
                  img={item.coverUrl}
                  id={item.id}
                  setOpenEdit={setOpenEdit}
                />
              )}
              <RemoveSobreContent id={item.id} />
            </div>
          )}
        </div>
      ))}
    </Suspense>
  )
}
