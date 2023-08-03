'use client'
import Search from '../components/Search'
import { useSearch } from '../store/searchStore'
import Locais from '../components/Locais'

export default function Enderecos() {
  const { search } = useSearch()
  const { imgs } = useSearch()
  const { setSearch } = useSearch()

  const results = imgs.filter((item) => item.title.indexOf(search) !== -1)

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 pt-24 md:pt-48">
      <Search />
      {search ? (
        results.map((item) => (
          <div
            key={item.id}
            className="flex h-[100px] w-[80vw] items-center justify-center rounded-lg bg-primary/40 backdrop-blur-lg md:rounded-lg"
            onClick={() => setSearch('')}
          >
            {item.title}
          </div>
        ))
      ) : (
        <Locais />
      )}
    </main>
  )
}
