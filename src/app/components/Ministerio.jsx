import LideresItem from './LideresItem'
import { DataMinisterioPenha } from '../service/DataMinisterioPenha'

export default function Ministerio() {
  return (
    <section className="mb-10  flex w-[100vw] flex-col items-center rounded-[35px]  bg-bglightsecundary  px-1 shadow-light dark:bg-bgdarksecundary dark:shadow-dark  md:w-[90vw] md:rounded-xl">
      <h1 className="m-0 mt-1 text-lg font-bold text-primary">Ministério</h1>
      <p className="mb-5 text-xl">Todos os nossos Lideres</p>

      <div className="relative -top-[30px] mb-5 flex w-full flex-wrap justify-center gap-x-5 p-1 pt-10 md:gap-x-5">
        {DataMinisterioPenha.map((item) => (
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
