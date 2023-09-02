import Image from 'next/image'

export default function LideresItem({ nome, titulo, local, img }) {
  return (
    <div className="mb-5 flex h-[250px] w-[45%] max-w-[150px] flex-col items-center justify-evenly rounded-xl bg-white shadow-xl hover:shadow-lg hover:shadow-primary dark:bg-black dark:shadow-dark dark:hover:shadow-primary md:h-[300px] md:w-[200px] md:max-w-[200px]">
      <Image
        width={100}
        height={100}
        src={img}
        alt={nome}
        className="flex  items-center justify-center rounded-full border-2  border-primary"
      />

      <div className="text-center text-primary">
        <p>{nome}</p>
        <p>{titulo}</p>
        <p>{local}</p>
      </div>
    </div>
  )
}
