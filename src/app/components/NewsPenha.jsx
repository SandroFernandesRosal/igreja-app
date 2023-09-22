'use client'

import New from './New'
import News from './News'
import Carousel from './Carousel'
import { DataNews2 } from '../service/DataNews2'
import { DataNews } from '../service/DataNews'
import { useState } from 'react'

export default function NewsPenha({ children }) {
  const [data, setData] = useState(DataNews)
  return (
    <div className="flex w-[100vw]  flex-col items-center    justify-center bg-transparent">
      <div className="flex gap-3  text-primary">
        <p className="cursor-pointer" onClick={() => setData(DataNews)}>
          Vila da Penha
        </p>{' '}
        |
        <p className="cursor-pointer" onClick={() => setData(DataNews2)}>
          igreja 2
        </p>
      </div>
      <Carousel data={data} />
      <News data={data} setData={setData}>
        {data &&
          data
            .reverse()
            .slice(0, 6)
            .map((item) => (
              <New
                key={item.id}
                url={item.url}
                title={item.title}
                id={item.id}
                description={item.description.slice(0, 30)}
                setData={setData}
                page={item.page}
                data={data}
              />
            ))}
      </News>
      {children}
    </div>
  )
}
