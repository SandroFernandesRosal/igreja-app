'use client'
import LideresItem from './LideresItem'
import { useData } from '../store/useStore'
import { DataVp } from '../service/DataVp'
import { Data2 } from '../service/Data2'
import { Data3 } from '../service/Data3'

export default function Ministerio() {
  const { data, setData } = useData()

  return (
    <section className="mb-10  flex w-[100vw] flex-col items-center rounded-[35px]  bg-bglightsecundary  px-1 shadow-light dark:bg-bgdarksecundary dark:shadow-dark  md:w-[90vw] md:rounded-xl">
      <h1 className="m-0 mt-1 text-lg font-bold text-primary">Ministério</h1>
      <p className="text-xl">Todos os nossos Lideres</p>

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

      <div className="relative -top-[30px] mb-5 flex w-full flex-wrap justify-center gap-x-5 p-1 pt-10 md:gap-x-5">
        {data.ministerio.map((item) => (
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
