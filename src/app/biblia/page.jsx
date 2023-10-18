'use client'
import { useState, useEffect } from 'react'
import api from '../service/api'

export default function Biblia() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [dataBook, setDataBook] = useState([])
  const [book, setBook] = useState('gn')
  const [chapter, setChapter] = useState(1)

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
    }
    fetchBooks()
  }, [book])

  const chaptersMap = new Map()
  if (dataBook && dataBook.length > 0) {
    for (let i = 1; i <= dataBook[0].chapters; i++) {
      chaptersMap.set(i, i)
    }
  }

  return (
    <main className="flex min-h-screen flex-col  items-center gap-5 pt-24 md:pt-[165px]">
      <div>
        <div className="flex  flex-col content-center items-center justify-center self-center">
          <div className="flex gap-3 text-primary">
            {loading ? (
              <p>Carregando livros...</p>
            ) : (
              <select
                value={book}
                onChange={(e) => setBook(e.target.value)}
                className="m-1 rounded-lg border-none bg-bglightsecundary shadow-light outline-none focus:ring-0 dark:bg-bgdarksecundary dark:shadow-dark"
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
                className="m-1 rounded-lg border-none  bg-bglightsecundary shadow-light outline-none focus:ring-0 dark:bg-bgdarksecundary dark:shadow-dark"
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

          <ul className="mb-10  mt-5 flex w-[100vw] flex-col gap-2 rounded-[35px] bg-bglightsecundary px-10 pt-5 shadow-light dark:bg-bgdarksecundary dark:shadow-dark md:mx-5 md:w-[90vw] md:rounded-xl">
            <div className="flex w-full justify-center gap-5 text-primary">
              {loading ? <p>Carregando livro...</p> : <p>{data.book.name}</p>}|
              {loading ? (
                <p>Carregando capítulo...</p>
              ) : (
                <p>Capítulo {data.chapter.number}</p>
              )}
            </div>

            {loading ? (
              <p>Carregando versículos...</p>
            ) : (
              data.verses.map((item) => (
                <li
                  key={item.number}
                  className="border-b-[1px] pb-3  dark:border-gray-900"
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
