import Image from 'next/image'
import maps from '../../../public/img/mapvp3.jpg'

export default function LocaisItem({ title, rua, cep }) {
  return (
    <div className="mb-5  flex  h-[300px] w-[45%] max-w-[150px] flex-col  items-center rounded-lg bg-white shadow-xl hover:shadow-lg hover:shadow-primary dark:bg-black dark:shadow-dark dark:hover:shadow-primary md:h-[300px] md:w-[200px] md:max-w-[200px]">
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
