'use client'
import TimeLineItem from './TimeLineItem'

import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { useLocal } from '../store/useStore'
import SelectLocal from './SelectLocal'
import AddAgenda from './AddAgenda'

import { useToken } from '@/hooks/useToken'

import SkeletonAgenda from './SkeletonAgenda'

export default function TimeLine({ children }) {
  const { local } = useLocal()
  const [data, setData] = useState([])
  const [openNew, setOpenNew] = useState(false)
  const [loading, setLoading] = useState(true)
  const token = useToken()

  useEffect(() => {
    const newsFromLocalStorage = localStorage.getItem('data')
    if (newsFromLocalStorage) {
      setData(JSON.parse(newsFromLocalStorage))
    }
  }, [setData])

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])

  useEffect(() => {
    api
      .get(`/agenda/${local}`)
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [local])

  return (
    <div className=" mb-5 flex w-[100vw] flex-col items-center rounded-[35px] bg-bglightsecundary  shadow-light dark:bg-bgdarksecundary dark:shadow-dark md:w-[90vw] md:rounded-xl ">
      <div className="flex flex-col items-center  md:min-w-[35%]">
        <h1 className="m-0 text-lg font-bold text-primary ">Agenda</h1>
        <p className="text-xl ">Todos os nossos eventos</p>

        <SelectLocal />
      </div>

      {token && (
        <>
          {openNew === false && (
            <div
              className="mb-4 flex  cursor-pointer items-center justify-center gap-2 text-lg font-bold"
              onClick={() => setOpenNew(true)}
            >
              Adicionar evento
            </div>
          )}

          {openNew && (
            <div className="md:min-w-[35%]">
              {' '}
              <AddAgenda openNew={openNew} setOpenNew={setOpenNew} />
            </div>
          )}
        </>
      )}

      <div className="relative -top-[30px] flex flex-wrap justify-center  gap-x-5 overflow-hidden rounded-xl px-5  pb-10 pt-10   md:overflow-visible ">
        {!loading ? (
          data.length < 1 ? (
            <p>Nenhum evento cadastrado.</p>
          ) : (
            data &&
            data.slice(0, 6).map((item) => {
              return (
                <TimeLineItem
                  key={item.id}
                  day={item.day}
                  title={item.name}
                  hora={item.hour}
                  trueitem={item.isPublic}
                  id={item.id}
                />
              )
            })
          )
        ) : (
          <SkeletonAgenda />
        )}
      </div>

      {children}
    </div>
  )
}
