'use client'

import New from './New'
import News from './News'
import Carousel from './Carousel'
import { useEffect } from 'react'
import { api } from '@/lib/api'
import { useSearch, useLocal, useData, useLoading } from '../store/useStore'

export default function NewsPenha({ children }) {
  const { data, setData } = useData()
  const { local, setLocal } = useLocal()
  const { search, setSearch } = useSearch()
  const { loading, setLoading } = useLoading()

  useEffect(() => {
    api
      .get(`/news/${local}`)
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [local, setData, setLoading])

  return (
    <div className="flex w-[100vw]  flex-col items-center    justify-center bg-transparent">
      <Carousel data={data} loading={loading} />

      <News
        data={data}
        setData={setData}
        search={search}
        setSearch={setSearch}
        local={local}
        setLocal={setLocal}
        loading={loading}
      >
        {data &&
          data.map((item) => (
            <New
              key={item.id}
              url={item.coverUrl}
              title={item.title}
              id={item.id}
              description={item.content.slice(0, 30)}
              setData={setData}
              data={data}
              local={local}
              page={item.page}
              setLocal={setLocal}
            />
          ))}
      </News>

      {children}
    </div>
  )
}
