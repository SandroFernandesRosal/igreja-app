'use client'
import TimeLineItem from './TimeLineItem'

import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { useLocal, useDataAgenda } from '../store/useStore'
import SelectLocal from './SelectLocal'
import AddAgenda from './crud/AddAgenda'

import { useToken } from '@/hooks/useToken'

import SkeletonAgenda from './skeleton/SkeletonAgenda'
import AgendaLine from './AgendaLine'

export default function TimeLine() {
  const { local } = useLocal()
  const { dataAgenda, setDataAgenda } = useDataAgenda()
  const [openNew, setOpenNew] = useState(false)
  const [loading, setLoading] = useState(true)
  const token = useToken()

  useEffect(() => {
    const newsFromLocalStorage = localStorage.getItem('dataAgenda')
    if (newsFromLocalStorage) {
      setDataAgenda(JSON.parse(newsFromLocalStorage))
    }
  }, [setDataAgenda])

  useEffect(() => {
    localStorage.setItem('dataAgenda', JSON.stringify(dataAgenda))
  }, [dataAgenda])

  useEffect(() => {
    api
      .get(`/agenda/${local}`)
      .then((response) => {
        setDataAgenda(response.data.agendaTotal)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [local, setDataAgenda])

  return (
    <div className=" mb-5 flex w-[100vw] flex-col items-center rounded-[35px] border-[1px]   border-zinc-400 bg-bglightsecundary dark:border-zinc-700 dark:bg-bgdarksecundary md:w-[90vw] md:rounded-xl ">
      <div className="flex flex-col items-center  md:min-w-[35%]">
        <h1 className="m-0 text-lg font-bold text-primary dark:text-secundary ">
          Agenda
        </h1>
        <p className="text-xl ">Todos os nossos eventos</p>

        <SelectLocal />
      </div>

      {token && (
        <>
          {openNew === false && (
            <div
              className="mb-4 flex cursor-pointer rounded-lg  border-[1px] border-zinc-400 bg-bglight  p-2 placeholder-black outline-none hover:bg-gradient-to-r hover:from-blue-900 hover:to-slate-900 hover:text-white focus:ring-0 dark:border-zinc-700 dark:bg-bgdark dark:placeholder-white"
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

      <h1 className="mb-4 flex gap-2 self-start text-xl font-bold ">
        <span className="ml-5 flex  border-b-2 border-secundary">Agenda</span>{' '}
        <p>em destaque</p>
      </h1>

      <div
        className={`relative -top-[30px] flex w-full flex-wrap justify-center  gap-x-5 overflow-hidden   ${
          dataAgenda &&
          dataAgenda.length > 0 &&
          'border-b-[1px] border-solid border-gray-700/30 '
        }   px-5 pb-5 pt-10   md:overflow-visible`}
      >
        {!loading ? (
          dataAgenda &&
          dataAgenda.filter((item) => item.destaque === true).length < 1 ? (
            <p>Nenhum evento destacado.</p>
          ) : (
            dataAgenda &&
            dataAgenda
              .filter((item) => item.destaque === true)
              .slice(0, 4)
              .map((item) => {
                return (
                  <TimeLineItem
                    key={item.id}
                    day={item.day}
                    title={item.name}
                    hora={item.hour}
                    trueitem={item.isPublic}
                    id={item.id}
                    destacar={item.destaque}
                  />
                )
              })
          )
        ) : (
          <SkeletonAgenda />
        )}
      </div>

      <AgendaLine
        loading={loading}
        data={dataAgenda}
        setData={setDataAgenda}
        token={token}
      />
    </div>
  )
}
