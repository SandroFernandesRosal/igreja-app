'use client'
import News from '../components/News'
import New from '../components/New'
import { useEffect, useState } from 'react'

import { useSearch, useLocal } from '../store/useStore'
import { api } from '@/lib/api'
import SkeletonNew from '../components/SkeletonNew'

export default function Noticias() {
  const [data, setData] = useState([])
  const { setSearch } = useSearch()
  const { local, setLocal } = useLocal()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get(`/news/${local}`)
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  })

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 pt-24 md:pt-[165px]">
      <News>
        {!loading ? (
          data
            .reverse()
            .map((item) => (
              <New
                key={item.id}
                url={item.coverUrl}
                title={item.title}
                id={item.id}
                setSearch={setSearch}
                description={item.content.slice(0, 30)}
                page={item.page}
                data={data}
                setLocal={setLocal}
              />
            ))
        ) : (
          <SkeletonNew />
        )}
      </News>
    </main>
  )
}
