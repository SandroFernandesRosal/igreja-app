import { useSearch } from '../store/searchStore'

export default function SearchMd() {
  const { search } = useSearch()
  const { setSearch } = useSearch()

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase())
  }

  return (
    <input
      type="text"
      placeholder="Buscar..."
      className="border:none hidden rounded-lg border-none bg-white/40 placeholder-black shadow-lg outline-none hover:shadow-md hover:shadow-primary focus:ring-0 dark:bg-black/40 dark:placeholder-white dark:shadow-dark dark:hover:shadow-md dark:hover:shadow-primary md:flex"
      value={search}
      onChange={handleSearchChange}
    />
  )
}
