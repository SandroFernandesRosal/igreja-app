import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useSearch } from '../store/searchStore'
import { AiOutlineClose } from 'react-icons/ai'

export default function Search() {
  const [inputSearch, setInputSearch] = useState(false)

  const handleInput = () => {
    inputSearch === false ? setInputSearch(true) : setInputSearch(false)
  }

  const { search } = useSearch()
  const { setSearch } = useSearch()

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <div className="top-30 fixed left-0  z-20 flex gap-1 md:top-[150px] md:hidden">
        <div className="flex h-[40px] w-[36px] items-center  justify-center rounded-e-lg bg-primary">
          {!inputSearch ? (
            <BsSearch onClick={handleInput} className="text-2xl font-bold" />
          ) : (
            <AiOutlineClose
              onClick={handleInput}
              className="text-2xl font-bold"
            />
          )}
        </div>

        {inputSearch && (
          <input
            type="text"
            placeholder="Buscar..."
            className="flex h-[40px] w-[200px] items-center justify-evenly rounded-lg border-none bg-white/40 placeholder-black shadow-lg focus:ring-0 dark:bg-black/40 dark:placeholder-white  "
            value={search}
            onChange={handleSearchChange}
          ></input>
        )}
      </div>
    </>
  )
}
