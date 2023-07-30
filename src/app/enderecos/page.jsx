'use client'
import Search from '../components/Search'
import { useSearch } from '../store/searchStore'

export default function Enderecos() {
  const search = useSearch((state) => state.search)
  const { imgs } = useSearch()
  const setSearch = useSearch((state) => state.setSearch)

  const results = imgs.filter(
    (item) => item.title.toLowerCase().indexOf(search) !== -1,
  )

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
        <p>alguma coisa antes de buscar</p>
      )}
    </main>
  )
}
