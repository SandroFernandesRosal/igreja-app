import LideresItem from './LideresItem'
import { DataLideresPenha } from './DataLideresPenha'

export default function Lideres() {
  return (
    <section className="mb-5 mt-10 flex w-[90vw] flex-col items-center  rounded-lg bg-white/20 px-1 shadow-lg  dark:bg-black/20 dark:shadow-dark md:mt-5 ">
      <h1 className="m-0 mt-1 text-lg font-bold text-primary">Lideranças</h1>
      <p className="mb-5 text-xl">Todos os nossos Lideres</p>

      <div className="mb-5 flex w-full flex-wrap justify-center  gap-x-5 p-1 md:gap-x-5">
        {DataLideresPenha.map((item) => (
          <LideresItem
            key={item.id}
            nome={item.nome}
            titulo={item.titulo}
            local={item.local}
          />
        ))}
      </div>
    </section>
  )
}
