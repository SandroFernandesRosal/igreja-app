'use client'
import Image from 'next/image'
import { Suspense, useState } from 'react'
import { useToken } from '@/hooks/useToken'
import AddSobreLider from './crud/AddSobreLider'
import RemoveSobreLider from './crud/RemoveSobreLider'
import EditSobreLider from './crud/EditSobreLider'

export default function LiderQuemSomos({ dataSobreLider }) {
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
              Adicionar lider
            </div>
          )}

          {open && (
            <div className="md:min-w-[35%]">
              {' '}
              <AddSobreLider open={open} setOpen={setOpen} />
            </div>
          )}
        </>
      )}

      <div className="my-4 mb-12 flex flex-wrap justify-center gap-4">
        {dataSobreLider &&
          dataSobreLider.map((item) => (
            <div key={item.id} className="flex flex-col items-center font-bold">
              <Image
                src={item.coverUrl}
                height={150}
                width={150}
                alt={item.name}
                className="h-[120px] w-[120px] rounded-full border-2 border-primary bg-black md:h-[150px] md:w-[150px]"
              />
              <p>{item.title}</p>
              <p>{item.name}</p>

              {token && (
                <div className="mb-2 flex w-full flex-1 items-end justify-around gap-2 text-white">
                  {openEdit === null && (
                    <button
                      className="rounded-lg bg-green-500 px-1 font-bold hover:bg-green-700 md:px-3 md:text-lg"
                      onClick={() => setOpenEdit(item.id)}
                    >
                      Editar
                    </button>
                  )}
                  {openEdit === item.id && (
                    <EditSobreLider
                      nome={item.name}
                      titulo={item.title}
                      img={item.coverUrl}
                      id={item.id}
                      setOpenEdit={setOpenEdit}
                    />
                  )}
                  <RemoveSobreLider id={item.id} />
                </div>
              )}
            </div>
          ))}
      </div>
    </Suspense>
  )
}
