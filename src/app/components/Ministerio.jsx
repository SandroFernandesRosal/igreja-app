'use client'
import LideresItem from './LideresItem'
import { usemMinisterio } from '../store/useStore'
import { DataMinisterioPenha } from '../service/DataMinisterioPenha'
import { DataMinisterio2 } from '../service/DataMinisterio2'
import { DataMinisterio3 } from '../service/DataMinisterio3'
import { useEffect } from 'react'

export default function Ministerio() {
  const { ministerio, setMinisterio } = usemMinisterio()
  useEffect(() => {
    const newsFromLocalStorage = localStorage.getItem('ministerio')
    if (newsFromLocalStorage) {
      setMinisterio(JSON.parse(newsFromLocalStorage))
    }
  }, [setMinisterio])

  useEffect(() => {
    localStorage.setItem('ministerio', JSON.stringify(ministerio))
  }, [ministerio])
  return (
    <section className="mb-10  flex w-[100vw] flex-col items-center rounded-[35px]  bg-bglightsecundary  px-1 shadow-light dark:bg-bgdarksecundary dark:shadow-dark  md:w-[90vw] md:rounded-xl">
      <h1 className="m-0 mt-1 text-lg font-bold text-primary">Ministério</h1>
      <p className="text-xl">Todos os nossos Lideres</p>

      <div className="mb-5 flex gap-3 text-primary">
        <p
          className="cursor-pointer"
          onClick={() => setMinisterio(DataMinisterioPenha)}
        >
          Vila da Penha
        </p>{' '}
        |
        <p
          className="cursor-pointer"
          onClick={() => setMinisterio(DataMinisterio2)}
        >
          igreja 2
        </p>
        |
        <p
          className="cursor-pointer"
          onClick={() => setMinisterio(DataMinisterio3)}
        >
          igreja 3
        </p>
      </div>

      <div className="relative -top-[30px] mb-5 flex w-full flex-wrap justify-center gap-x-5 p-1 pt-10 md:gap-x-5">
        {ministerio.map((item) => (
          <LideresItem
            key={item.id}
            nome={item.nome}
            titulo={item.titulo}
            local={item.local}
            img={item.img}
          />
        ))}
      </div>
    </section>
  )
}
