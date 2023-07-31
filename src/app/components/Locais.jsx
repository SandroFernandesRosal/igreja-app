export default function Locais() {
  return (
    <section className="mb-10 flex w-[80vw] flex-col items-center rounded-lg bg-white/20 p-5 dark:bg-black/20">
      <h1>Endereços</h1>
      <div>
        <div className="flex h-[150px] w-[350px] flex-col items-center rounded-lg bg-white shadow-lg dark:bg-black">
          <div className="flex w-[80%] flex-col  justify-center">
            <h1 className="text-lg font-bold">Penha Circular</h1>
            <p>Rua Tomas Lopes 84, Penha Circular, Rio de Janeiro</p>
            <p>CEP: 21221210</p>
          </div>
        </div>
      </div>
    </section>
  )
}
