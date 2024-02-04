'use client'
import TimeLineItem from './TimeLineItem'

import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { useLocal } from '../store/useStore'
import SelectLocal from './SelectLocal'
import AddAgenda from './AddAgenda'
import Cookies from 'js-cookie'
import { ImNewspaper } from 'react-icons/im'
import SkeletonAgenda from './SkeletonAgenda'

export default function TimeLine({ children }) {
  const { local } = useLocal()
  const [data, setData] = useState([])
  const [openNew, setOpenNew] = useState(false)
  const [loading, setLoading] = useState(true)
  const token = Cookies.get('tokennn')

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
    <div className=" mb-5 flex w-[100vw] flex-col items-center rounded-[35px] bg-bglightsecundary  pb-5 shadow-light dark:bg-bgdarksecundary dark:shadow-dark md:w-[90vw] md:rounded-xl ">
      <div
        className={`w-full  justify-center ${
          openNew === true ? 'md:flex' : 'md:flex-col'
        }`}
      >
        <div className="flex flex-col items-center  md:min-w-[35%]">
          <h1 className="m-0 text-lg font-bold text-primary ">Agenda</h1>
          <p className="text-xl ">Todos os nossos eventos</p>

          <SelectLocal />
        </div>

        {token && (
          <>
            {openNew === false ? (
              <div
                className="mb-4 flex  cursor-pointer items-center justify-center gap-2 text-lg font-bold"
                onClick={() => setOpenNew(true)}
              >
                <ImNewspaper className="text-2xl text-primary" />
                Adicionar evento
              </div>
            ) : null}

            {openNew && (
              <div className="md:min-w-[35%]">
                {' '}
                <AddAgenda openNew={openNew} setOpenNew={setOpenNew} />
              </div>
            )}
          </>
        )}
      </div>

      <div className="relative -top-[30px] flex flex-wrap justify-center  gap-x-5 overflow-hidden rounded-xl px-5  pb-10 pt-10   md:overflow-visible ">
        {!loading ? (
          data
            .reverse()
            .slice(0, 6)
            .map((item) => {
              return (
                <TimeLineItem
                  key={item.id}
                  day={item.day}
                  title={item.name}
                  hora={item.hour}
                  trueitem={item.isPublic}
                />
              )
            })
        ) : (
          <SkeletonAgenda />
        )}
      </div>

      {children}
    </div>
  )
}
