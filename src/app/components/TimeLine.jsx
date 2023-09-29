'use client'
import TimeLineItem from './TimeLineItem'
import { DataVp } from '../service/DataVp'
import { Data2 } from '../service/Data2'
import { Data3 } from '../service/Data3'
import { useData } from '../store/useStore'
import { useEffect } from 'react'

export default function TimeLine({ children }) {
  const { data, setData } = useData()

  useEffect(() => {
    const newsFromLocalStorage = localStorage.getItem('data')
    if (newsFromLocalStorage) {
      setData(JSON.parse(newsFromLocalStorage))
    }
  }, [setData])

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])

  return (
    <div className=" mb-5 flex w-[100vw] flex-col items-center rounded-[35px] bg-bglightsecundary  pb-5 shadow-light dark:bg-bgdarksecundary dark:shadow-dark md:w-[90vw] md:rounded-xl ">
      <div className=" flex-col items-center text-center">
        <h1 className="m-0 text-lg font-bold text-primary ">Agenda</h1>
        <p className="text-xl ">Agenda semanal</p>
      </div>

      <div className="mb-5 flex gap-3 text-primary">
        <p className="cursor-pointer" onClick={() => setData(DataVp)}>
          Vila da Penha
        </p>{' '}
        |
        <p className="cursor-pointer" onClick={() => setData(Data2)}>
          igreja 2
        </p>
        |
        <p className="cursor-pointer" onClick={() => setData(Data3)}>
          igreja 3
        </p>
      </div>

      <div className="relative -top-[30px] flex flex-wrap justify-center  gap-x-5 overflow-hidden rounded-xl px-5  pb-10 pt-10   md:overflow-visible ">
        {data.agenda
          .reverse()
          .slice(0, 6)
          .map((item, index) => {
            return (
              <TimeLineItem
                key={index}
                day={item.day}
                title={item.title}
                hora={item.hora}
                titletwo={item.titletwo}
                horatwo={item.horatwo}
                trueitem={item.trueitem}
              />
            )
          })}
      </div>

      {children}
    </div>
  )
}
