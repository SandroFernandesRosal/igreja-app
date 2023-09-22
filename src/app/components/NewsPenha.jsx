'use client'

import New from './New'
import News from './News'
import Carousel from './Carousel'

import { useHook } from '../store/searchStore'

export default function NewsPenha({ children }) {
  const { data, setData } = useHook()

  return (
    <div className="flex w-[100vw]  flex-col items-center    justify-center bg-transparent">
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
