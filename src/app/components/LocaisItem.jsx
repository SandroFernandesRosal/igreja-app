import Image from 'next/image'
import maps from '../../../public/img/maps.png'

export default function LocaisItem({ title, rua, cep }) {
  return (
    <div className="mb-3 flex  min-h-[350px] w-[45%] max-w-[150px]  flex-col items-center rounded-lg bg-white shadow-lg dark:bg-black dark:shadow-dark md:w-[200px] md:max-w-[200px]">
      <div className="flex  flex-1  flex-col gap-2 p-2">
        <h1 className="flex w-full justify-center  font-bold text-primary md:text-xl">
          {title}
        </h1>
        <p>{rua}</p>
        <p>CEP: {cep}</p>
      </div>
      <Image
        src={maps}
        alt="..."
        width={350}
        height={100}
        className="w-full flex-1"
      />
    </div>
  )
}
