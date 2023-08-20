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
    setSearch(e.target.value.toLowerCase())
  }

  return (
    <>
      <div className="fixed left-0 top-[88px]  z-20 flex gap-1 md:hidden">
        <div className="mb-5 mr-2 flex h-[40px]  w-[35px] items-center justify-center rounded-e-lg bg-primary shadow-lg dark:shadow-dark">
          {!inputSearch ? (
            <BsSearch onClick={handleInput} className="text-2xl font-bold" />
          ) : (
            <AiOutlineClose
              onClick={() => {
                handleInput()
                setSearch('')
              }}
              className="text-2xl font-bold"
            />
          )}
        </div>

        {inputSearch && (
          <input
            type="text"
            placeholder="Buscar..."
            className="mb-5 mr-5 flex h-[40px] w-[200px] items-center justify-evenly rounded-lg border-none bg-white/40 placeholder-black shadow-lg focus:ring-0 dark:bg-black/40 dark:placeholder-white dark:shadow-dark  "
            value={search}
            onChange={handleSearchChange}
          />
        )}
      </div>
    </>
  )
}
