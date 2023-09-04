'use client'
import Image from 'next/image'
import ContainerResults from '@/app/components/ContainerResults'
import ResultLength from '@/app/components/ResultLength'
import { useSearch } from '@/app/store/searchStore'
import Search from '@/app/components/Search'

import New from '@/app/components/New'

export default function Noticia({ params }) {
  const id = params.id

  const { search } = useSearch()
  const { DataNews } = useSearch()
  const { setSearch } = useSearch()

  const selectedItem = DataNews.find((item) => item.id === id)

  const results = DataNews.filter(
    (item) => item.title.toLowerCase().indexOf(search) !== -1,
  )
  return (
    <main className="flex min-h-screen flex-col  items-center gap-5 pt-24 md:pt-[165px]">
      <Search />
      {search ? <ResultLength /> : null}

      <ContainerResults>
        {search ? (
          results.map((item) => (
            <New
              key={item.id}
              url={item.url}
              title={item.title}
              id={item.id}
              setSearch={setSearch}
              description={item.description.slice(0, 30)}
            />
          ))
        ) : (
          <>
            <article className="mb-5 mt-10 flex flex-col items-center">
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
          </>
        )}
      </ContainerResults>
    </main>
  )
}
