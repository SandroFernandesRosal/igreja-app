'use client'
import TimeLineItem from './TimeLineItem'
import { dataAgenda } from '../service/dataAgenda'
import { DataAgenda2 } from '../service/DataAgenda2'
import { useAgenda } from '../store/useStore'
import { DataAgenda3 } from '../service/DataAfenda3'

export default function TimeLine({ children }) {
  const { agenda, setAgenda } = useAgenda()
  return (
    <div className=" mb-5 flex w-[100vw] flex-col items-center rounded-[35px] bg-bglightsecundary  pb-5 shadow-light dark:bg-bgdarksecundary dark:shadow-dark md:w-[90vw] md:rounded-xl ">
      <div className=" flex-col items-center text-center">
        <h1 className="m-0 text-lg font-bold text-primary ">Agenda</h1>
        <p className="text-xl ">Agenda semanal</p>
      </div>

      <div className="mb-5 flex gap-3 text-primary">
        <p className="cursor-pointer" onClick={() => setAgenda(dataAgenda)}>
          Vila da Penha
        </p>{' '}
        |
        <p className="cursor-pointer" onClick={() => setAgenda(DataAgenda2)}>
          igreja 2
        </p>
        |
        <p className="cursor-pointer" onClick={() => setAgenda(DataAgenda3)}>
          igreja 3
        </p>
      </div>

      <div className="relative -top-[30px] flex flex-wrap justify-center  gap-x-5 overflow-hidden rounded-xl px-5  pb-10 pt-10   md:overflow-visible ">
        {agenda
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
