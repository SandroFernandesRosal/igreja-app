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
      placeholder="Buscar..."
      className="border:none hidden rounded-lg border-none bg-white outline-none dark:bg-black md:flex"
      value={search}
      onChange={handleSearchChange}
    ></input>
  )
}
