'use client'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { imgs } from './imgs'
import { AiOutlineClose } from 'react-icons/ai'

export default function Search() {
  const [inputSearch, setInputSearch] = useState(false)
  const [search, setSearch] = useState('')

  const handleInput = () => {
    inputSearch === false ? setInputSearch(true) : setInputSearch(false)
  }

  const results = imgs.filter(
    (item) => item.title.toLowerCase().indexOf(search) !== -1,
  )

  return (
    <>
      <div className="top-30 fixed left-0  z-20 flex gap-1 md:top-[150px]">
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
            placeholder="Pesquise algo"
            className="flex h-[40px] w-[200px]    items-center justify-evenly rounded-lg border-none bg-white dark:bg-black  "
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          ></input>
        )}
      </div>
      <div
        className={` ${
          search ? 'visible' : 'invisible'
        } absolute bottom-0  z-30 flex h-[80vh] w-[80vw] max-w-[500px] flex-col items-center md:left-5 md:h-[69vh]   md:w-[40vw]`}
      >
        {search &&
          results.map((item) => (
            <div
              key={item.id}
              className="fixed m-2 flex w-[77vw] items-center justify-center rounded-lg bg-primary/40 backdrop-blur-lg md:rounded-lg"
              onClick={() => setSearch('')}
            >
              <p className=" m-3 p-5">{item.title}</p>
            </div>
          ))}
      </div>
    </>
  )
}
