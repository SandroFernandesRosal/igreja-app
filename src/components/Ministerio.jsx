'use client'
import LideresItem from './LideresItem'
import { useLocal } from '../store/useStore'

import { useEffect, useState } from 'react'
import { useToken } from '@/hooks/useToken'
import SelectLocal from './SelectLocal'
import { api } from '@/lib/api'

import AddLider from './AddMinisterio'

import SkeletonLider from './SkeletonLider'

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
        setData(response.data)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [local])

  return (
    <section className="mb-10  flex w-[100vw] flex-col items-center rounded-[35px]  bg-bglightsecundary  px-1 shadow-light dark:bg-bgdarksecundary dark:shadow-dark  md:w-[90vw] md:rounded-xl">
      <div className="flex flex-col items-center  md:min-w-[35%]">
        <h1 className="m-0 text-lg font-bold text-primary ">Ministério</h1>
        <p className="text-xl ">Todos os nossos lideres</p>

        <SelectLocal />
      </div>

      {token && (
        <>
          {openMinisterio === false && (
            <div
              className="mb-4 flex  cursor-pointer items-center justify-center gap-2 text-lg font-bold"
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

      <div className="relative -top-[30px] mb-5 flex w-full flex-wrap justify-center gap-x-5 p-1 pt-10 md:gap-x-5">
        {!loading ? (
          data.length < 1 ? (
            <p>Nenhum líder cadastrado.</p>
          ) : (
            data &&
            data.map((item) => (
              <LideresItem
                key={item.id}
                nome={item.name}
                titulo={item.title}
                local={item.local}
                img={item.coverUrl}
                id={item.id}
              />
            ))
          )
        ) : (
          <SkeletonLider />
        )}
      </div>
    </section>
  )
}
