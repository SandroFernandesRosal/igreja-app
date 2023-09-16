'use client'
import Image from 'next/image'
import { DataNews } from '@/app/service/DataNews'
import New from '@/app/components/New'
import { useSearch } from '@/app/store/searchStore'

export default function Noticia({ params }) {
  const id = params.id
  const { setSearch } = useSearch()

  const selectedItem = DataNews.find((item) => item.id === id)

  return (
    <main className="flex min-h-screen flex-col  items-center gap-5 pt-24 md:pt-[165px]">
      <article className="mb-5  flex w-full flex-col items-center  rounded-[35px] bg-bglightsecundary shadow-light dark:bg-bgdarksecundary dark:shadow-dark md:w-[90vw]">
        <h1 className="w-[90vw] max-w-[500px]  text-center text-2xl font-bold">
          {selectedItem.title}
        </h1>

        <Image
          src={selectedItem.url}
          alt={selectedItem.title}
          width={500}
          height={500}
          className="w-[100vw] max-w-[500px] pt-2"
        />

        <p className=" w-[90vw] max-w-[500px] py-5 text-justify text-lg">
          {selectedItem.description}
        </p>
      </article>
      <article className="mb-10 flex flex-col items-center rounded-[35px] bg-bglightsecundary shadow-light dark:bg-bgdarksecundary dark:shadow-dark md:w-[90vw]">
        <h1 className="text-2xl font-bold">Leia também as últimas notícias</h1>
        <div className=" flex  w-full flex-wrap justify-center gap-x-5  p-1 pt-5   md:gap-x-5">
          {DataNews.reverse()
            .slice(0, 6)
            .map((item) => (
              <New
                key={item.id}
                url={item.url}
                title={item.title}
                id={item.id}
                setSearch={setSearch}
                description={item.description.slice(0, 30)}
              />
            ))}
        </div>
      </article>
    </main>
  )
}
