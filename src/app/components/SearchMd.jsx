'use client'

import { useSearch } from '../store/searchStore'

export default function SearchMd() {
  const search = useSearch((state) => state.search)
  const setSearch = useSearch((state) => state.setSearch)

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <input
      type="text"
      placeholder="Buscar.."
      className="border:none hidden rounded-lg border-none bg-white/40 placeholder-black shadow-lg outline-none focus:ring-0 dark:bg-black/40 dark:placeholder-white md:flex"
      value={search}
      onChange={handleSearchChange}
    ></input>
  )
}
