import Image from 'next/image'
import maps from '../../../public/img/maps.png'

export default function Locais() {
  return (
    <section className="mb-10 flex w-[80vw] flex-col items-center rounded-lg bg-white/20 p-5 dark:bg-black/20">
      <h1 className="m-0 text-lg font-bold text-primary">Endereços</h1>
      <p className="mb-5 text-2xl">Saiba todos os nossos endereços</p>
      <div>
        <div className="flex  w-[350px] flex-col items-center rounded-lg bg-white shadow-lg dark:bg-black">
          <div className="flex w-[80%] flex-1  flex-col justify-center gap-2 p-3">
            <h1 className="text-2xl font-bold">Penha Circular</h1>
            <p>Rua Tomas Lopes 84, Penha Circular, Rio de Janeiro</p>
            <p>CEP: 21221210</p>
          </div>
          <Image
            src={maps}
            alt="..."
            width={400}
            height={100}
            className="w-full flex-1"
          />
        </div>
      </div>
    </section>
  )
}
