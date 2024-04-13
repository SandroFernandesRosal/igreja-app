'use client'

import { useLocal } from '../store/useStore'
import { useEffect, useState } from 'react'
import { useToken } from '@/hooks/useToken'
import SelectLocal from './SelectLocal'
import { api } from '@/lib/api'
import AddLider from './crud/AddMinisterio'
import SkeletonLider from './skeleton/SkeletonLider'
import MinisterioLine from './MinisterioLine'

export default function Ministerio() {
  const [data, setData] = useState([])
  const [openMinisterio, setOpenMinisterio] = useState(false)
  const [loading, setLoading] = useState(true)
  const { local } = useLocal()
  const token = useToken()

  useEffect(() => {
    api
      .get(`/ministerio/${local}`)
      .then((response) => {
        setData(response.data.ministerioTotal)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [local])

  return (
    <section className="mb-5  flex w-[100vw] flex-col items-center rounded-[35px]  bg-bglightsecundary  px-1 shadow-light dark:bg-bgdarksecundary dark:shadow-dark  md:w-[90vw] md:rounded-xl">
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
              className="mb-4 flex cursor-pointer rounded-lg border-none bg-bglight p-2 placeholder-black shadow-light outline-none hover:bg-gradient-to-r hover:from-blue-900 hover:to-slate-900 hover:text-white focus:ring-0 dark:bg-bgdark dark:placeholder-white dark:shadow-dark"
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
          data.length < 1 ? (
            <p>Nenhum líder cadastrado.</p>
          ) : (
            data && <MinisterioLine data={data} setData={setData} />
          )
        ) : (
          <SkeletonLider />
        )}
      </div>
    </section>
  )
}
