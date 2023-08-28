import LocaisItem from './LocaisItem'

export default function Locais() {
  return (
    <section className="mb-5 flex w-[90vw] flex-col items-center  rounded-lg bg-white/20  shadow-lg dark:bg-black/20 dark:shadow-dark">
      <h1 className="m-0 mt-1 text-lg font-bold text-primary">Endereços</h1>
      <p className="mb-5 text-xl">Todos os nossos endereços</p>
      <div className="flex w-full flex-wrap justify-center  gap-x-5 p-1 md:gap-x-5">
        <LocaisItem
          title="Vila da Penha"
          rua="Rua Tomas Lopes 84, Rio de Janeiro"
          cep="21221210"
        />

        <LocaisItem
          title="Bairro 2"
          rua="Rua aaaaa aaaa 00, Rio de Janeiro"
          cep="00000000"
        />

        <LocaisItem
          title="Bairro 3"
          rua="Rua bbbbb bbbb 00, Rio de Janeiro"
          cep="00000000"
        />
      </div>
    </section>
  )
}
