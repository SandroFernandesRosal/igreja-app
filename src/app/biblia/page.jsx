'use client'
import { useState, useEffect } from 'react'
import api from '../../lib/apiBiblia'

export default function Biblia() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [dataBook, setDataBook] = useState([])
  const [book, setBook] = useState('gn')
  const [chapter, setChapter] = useState(1)
  const [chapterCount, setChapterCount] = useState(0)

  useEffect(() => {
    api
      .get(`/${book}/${chapter}`)
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [book, chapter])

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        'https://www.abibliadigital.com.br/api/books',
      )
      const data = await response.json()
      setDataBook(data)

      const selectedBook = data.find((item) => item.abbrev.pt === book)
      if (selectedBook) {
        setChapterCount(selectedBook.chapters)
      }
    }
    fetchBooks()
  }, [book])

  const chaptersMap = new Map()
  for (let i = 1; i <= chapterCount; i++) {
    chaptersMap.set(i, i)
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 pt-24 md:pt-[165px]">
      <div>
        <div className="flex flex-col content-center items-center justify-center self-center">
          <div className="mx-5 flex gap-3 text-primary dark:text-secundary">
            {loading ? (
              <p>Carregando livros...</p>
            ) : (
              <select
                value={book}
                onChange={(e) => setBook(e.target.value)}
                className="m-1 w-full rounded-lg border-[1px] border-zinc-400 bg-bglightsecundary outline-none  focus:ring-0 dark:border-zinc-700 dark:bg-bgdarksecundary "
              >
                {dataBook.map((item) => (
                  <option
                    value={item.abbrev.pt}
                    key={item.name}
                    className="bg-bglightsecundary dark:bg-bgdarksecundary"
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            )}

            {dataBook && dataBook.length > 0 && (
              <select
                value={chapter}
                onChange={(e) => setChapter(e.target.value)}
                className="m-1 rounded-lg border-[1px] border-zinc-400 bg-bglightsecundary outline-none focus:ring-0 dark:border-zinc-700 dark:bg-bgdarksecundary "
              >
                {[...chaptersMap.entries()].map(([key, value]) => (
                  <option
                    value={key}
                    key={key}
                    className="bg-bglightsecundary dark:bg-bgdarksecundary"
                  >
                    Capítulo {value}
                  </option>
                ))}
              </select>
            )}
          </div>

          <ul className="dark:border-zinc-700md:mx-5 mb-10 mt-5 flex min-h-screen w-[100vw] flex-col gap-2 rounded-[35px] border-[1px] border-zinc-400 bg-bglightsecundary  px-10 pb-10 pt-5 dark:bg-bgdarksecundary md:w-[90vw] md:rounded-xl">
            <div className="flex w-full justify-center gap-5 text-primary dark:text-secundary">
              {loading ? <p>Carregando livro...</p> : <p>{data.book.name}</p>}|
              {loading ? (
                <p>Carregando capítulo...</p>
              ) : (
                <p>Capítulo {data.chapter.number}</p>
              )}
            </div>

            {loading ? (
              <p className="flex w-full justify-center">
                Carregando versículos...
              </p>
            ) : (
              data.verses.map((item) => (
                <li
                  key={item.number}
                  className="border-b-[1px] border-white pb-3 dark:border-black"
                >
                  {item.number} - {item.text}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </main>
  )
}
