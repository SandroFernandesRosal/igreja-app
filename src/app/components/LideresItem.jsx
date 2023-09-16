import Image from 'next/image'

export default function LideresItem({ nome, titulo, local, img }) {
  return (
    <div className="mb-5 flex h-[300px] w-[45%] max-w-[150px] flex-col items-center justify-evenly rounded-xl bg-white shadow-light hover:shadow-lg hover:shadow-primary dark:bg-black dark:shadow-dark dark:hover:shadow-primary md:h-[300px] md:w-[200px] md:max-w-[200px]">
      <Image
        width={120}
        height={120}
        src={img}
        alt={nome}
        className="flex  items-center justify-center rounded-full border-2  border-primary"
      />

      <div className="text-center font-bold text-primary md:text-lg">
        <p>{nome}</p>
        <p>{titulo}</p>
        <p>{local}</p>
      </div>
    </div>
  )
}
