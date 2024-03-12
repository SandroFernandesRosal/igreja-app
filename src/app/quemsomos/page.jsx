import { api } from '@/lib/api'
import { Suspense } from 'react'
import Image from 'next/image'

export default async function QuemSomos() {
  const response = await api.get('/sobre')
  const dataSobre = response.data

  return (
    <main className="flex min-h-screen flex-col  items-center pt-24 md:pt-[165px]">
      <article className="mb-5 flex w-full flex-col items-center rounded-[35px]  bg-bglightsecundary pb-5 shadow-light dark:bg-bgdarksecundary dark:shadow-dark md:w-[90vw]">
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-bold text-primary">Nossa história</h1>
          <p className="mb-5 text-xl">A vondede de Deus</p>
        </div>

        <div className="my-4 flex flex-wrap justify-center gap-4">
          <div className="flex flex-col items-center font-bold ">
            <div className="h-[120px] w-[120px] rounded-full bg-black md:h-[150px] md:w-[150px]"></div>{' '}
            <p>Nome 1</p>
            <p>Pastor fundador</p>
          </div>{' '}
          <div className="flex flex-col items-center font-bold ">
            <div className="h-[120px] w-[120px] rounded-full bg-black md:h-[150px] md:w-[150px]"></div>{' '}
            <p>Nome 2</p>
            <p>Pastor presidente</p>
          </div>{' '}
        </div>
        <Suspense fallback={<div>Carregando...</div>}>
          {dataSobre.map((item) => (
            <div
              key={item.id}
              className="my-4 flex w-[100vw] flex-col items-center gap-2"
            >
              <h1 className="text-lg font-bold text-primary">{item.title}</h1>
              <p className="w-[90%] max-w-[800px]">{item.content}</p>
              <Image
                src={item.coverUrl}
                height={800}
                width={800}
                alt=""
                className="w-[90%] max-w-[800px] rounded-2xl"
              />
            </div>
          ))}
        </Suspense>
      </article>
    </main>
  )
}
