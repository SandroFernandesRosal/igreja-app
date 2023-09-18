import Image from 'next/image'
import maps from '../../../public/img/mapvp3.jpg'

export default function LocaisItem({ title, rua, cep }) {
  return (
    <div className="mb-5 flex  h-[300px] w-[45%]  max-w-[150px] flex-col items-center rounded-lg  bg-bglight shadow-light transition delay-150  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-hover dark:bg-bgdark dark:shadow-dark dark:hover:shadow-hover md:h-[300px] md:w-[200px] md:max-w-[200px]">
      <div className="flex  flex-1  flex-col gap-1 p-1">
        <h1 className="flex w-full justify-center text-lg  font-bold text-primary">
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
        className="w-full  flex-1"
      />
    </div>
  )
}
