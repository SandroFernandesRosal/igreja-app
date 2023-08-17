'use client'
import Image from 'next/image'
import ContainerResults from '@/app/components/ContainerResults'
import ResultLength from '@/app/components/ResultLength'
import { useSearch } from '@/app/store/searchStore'
import Search from '@/app/components/Search'
import Link from 'next/link'
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
            <Link key={item.id} href={`/noticias/${item.id}`}>
              <New url={item.url} title={item.title} setSearch={setSearch} />
            </Link>
          ))
        ) : (
          <>
            <article className="mb-5 mt-10 flex flex-col items-center p-1">
              <Image
                src={selectedItem.url}
                alt={selectedItem.title}
                width={400}
                height={400}
              />
              <h1 className="text-xl font-bold">{selectedItem.title}</h1>
            </article>
          </>
        )}
      </ContainerResults>
    </main>
  )
}
