import Image from 'next/image'
import { DataNews } from '@/app/service/DataNews'

export default function Noticia({ params }) {
  const id = params.id

  const selectedItem = DataNews.find((item) => item.id === id)

  return (
    <main className="flex min-h-screen flex-col  items-center gap-5 pt-24 md:pt-[165px]">
      <article className="mb-5  flex flex-col items-center">
        <h1 className="w-[90vw] max-w-[500px] border-b-[1px] border-solid border-primary text-center text-2xl font-bold">
          {selectedItem.title}
        </h1>
        <p className=" w-[90vw] max-w-[500px] py-5 text-justify text-lg">
          {selectedItem.description}
        </p>

        <Image
          src={selectedItem.url}
          alt={selectedItem.title}
          width={500}
          height={500}
          className="w-[90vw] max-w-[500px]"
        />
      </article>
    </main>
  )
}
