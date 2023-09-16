import { useSearch } from '../store/searchStore'
import { FaSearch } from 'react-icons/fa'

export default function SearchMd() {
  const { search } = useSearch()
  const { setSearch } = useSearch()

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase())
  }

  return (
    <>
      <input
        type="text"
        placeholder="Buscar notícia..."
        className="border:none  flex  rounded-lg border-none bg-white/40 placeholder-black shadow-light outline-none hover:shadow-hover focus:ring-0 dark:bg-black/40 dark:placeholder-white dark:shadow-dark dark:hover:shadow-hover"
        value={search}
        onChange={handleSearchChange}
      />
      <FaSearch className="pointer-events-none relative -top-[27px] left-[85px] mb-1 text-primary" />
    </>
  )
}
