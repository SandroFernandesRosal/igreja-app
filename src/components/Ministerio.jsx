'use client'

import { useLocal, useDataMinisterio } from '../store/useStore'
import { useEffect, useState } from 'react'
import { useToken } from '@/hooks/useToken'
import SelectLocal from './SelectLocal'
import { api } from '@/lib/api'
import AddLider from './crud/AddMinisterio'
import SkeletonLider from './skeleton/SkeletonLider'
import MinisterioLine from './MinisterioLine'

export default function Ministerio() {
  const { dataMinisterio, setDataMinisterio } = useDataMinisterio()
  const [openMinisterio, setOpenMinisterio] = useState(false)
  const [loading, setLoading] = useState(true)
  const { local } = useLocal()
  const token = useToken()

  useEffect(() => {
    api
      .get(`/ministerio/${local}`)
      .then((response) => {
        setDataMinisterio(response.data.ministerioTotal)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [local, setDataMinisterio])

  return (
    <section className="mb-5  flex w-[100vw] flex-col items-center rounded-[35px]  border-[1px]  border-zinc-400 bg-bglightsecundary px-1 dark:border-zinc-700 dark:bg-bgdarksecundary   md:w-[90vw] md:rounded-xl">
      <div className="flex flex-col items-center  md:min-w-[35%]">
        <h1 className="m-0 text-lg font-bold text-primary dark:text-secundary ">
          Ministério
        </h1>
        <p className="text-xl ">Todos os nossos lideres</p>

        <SelectLocal />
      </div>

      {token && (
        <>
          {openMinisterio === false && (
            <div
              className="mb-4 flex cursor-pointer rounded-lg  border-[1px] border-zinc-400 bg-bglight  p-2 placeholder-black outline-none hover:bg-gradient-to-r hover:from-blue-900 hover:to-slate-900 hover:text-white focus:ring-0 dark:border-zinc-700 dark:bg-bgdark dark:placeholder-white"
              onClick={() => setOpenMinisterio(true)}
            >
              Adicionar lider
            </div>
          )}

          {openMinisterio && (
            <div className="md:min-w-[35%]">
              {' '}
              <AddLider
                openMinisterio={openMinisterio}
                setOpenMinisterio={setOpenMinisterio}
              />
            </div>
          )}
        </>
      )}

      <div className="relative -top-[30px]  flex w-full flex-col flex-wrap items-center justify-center gap-x-5 p-1 pt-4 md:gap-x-5">
        {!loading ? (
          dataMinisterio.length < 1 ? (
            <p className="mt-4">Nenhum líder cadastrado.</p>
          ) : (
            dataMinisterio && (
              <MinisterioLine
                data={dataMinisterio}
                setData={setDataMinisterio}
              />
            )
          )
        ) : (
          <SkeletonLider />
        )}
      </div>
    </section>
  )
}
