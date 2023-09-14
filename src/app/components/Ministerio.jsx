import LideresItem from './LideresItem'
import { DataMinisterioPenha } from '../service/DataMinisterioPenha'

export default function Ministerio() {
  return (
    <section className="mb-10  flex w-[100vw] flex-col items-center rounded-[35px]  bg-white/20  px-1 shadow-lg dark:bg-black/20 dark:shadow-dark  md:w-[90vw] md:rounded-xl">
      <h1 className="m-0 mt-1 text-lg font-bold text-primary">Ministério</h1>
      <p className="mb-5 text-xl">Todos os nossos Lideres</p>

      <div className="mb-5 flex w-full flex-wrap justify-center  gap-x-5 p-1 md:gap-x-5">
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
