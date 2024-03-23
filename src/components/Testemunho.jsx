'use client'
import Image from 'next/image'
import { useTokenIgreja } from '@/hooks/useTokenIgreja'
import AddTestemunho from '@/components/crud/AddTestemunho'
import { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

export default function Testemunho({ data, userIgreja }) {
  const [open, setOpen] = useState(false)
  const tokenIgreja = useTokenIgreja()
  return (
    <section className="mb-5  flex w-[100vw] flex-col items-center rounded-[35px]  bg-bglightsecundary  px-1 shadow-light dark:bg-bgdarksecundary  dark:shadow-dark md:w-[90vw] md:rounded-xl">
      <div className="flex flex-col items-center  md:min-w-[35%]">
        <h1 className="m-0 text-lg font-bold text-primary ">Testemunhos</h1>
        <p className="text-xl ">O agir de Deus em nossas vidas</p>
      </div>

      {tokenIgreja && (
        <>
          {open === false && (
            <div
              className="mb-4 flex cursor-pointer rounded-lg border-none bg-bglight p-2 placeholder-black shadow-light outline-none hover:bg-gradient-to-r hover:from-blue-900 hover:to-slate-900 hover:text-white focus:ring-0 dark:bg-bgdark dark:placeholder-white dark:shadow-dark"
              onClick={() => setOpen(true)}
            >
              Adicionar testemunho
              {open === true && (
                <AiFillCloseCircle
                  onClick={() => setOpen(false)}
                  className="cursor-pointer text-2xl font-bold text-black dark:text-white"
                />
              )}
            </div>
          )}

          {open && (
            <div className="md:min-w-[35%]">
              {' '}
              <AddTestemunho
                userIgreja={userIgreja}
                open={open}
                setOpen={setOpen}
              />
            </div>
          )}
        </>
      )}

      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="m-4 flex flex-col items-start gap-3  py-4 md:flex-row"
          >
            <Image
              width={300}
              height={300}
              src={item.avatarUrl}
              alt={item.name}
              className="mx-1 h-[100px] w-[100px] rounded-full bg-green-500 shadow-light dark:shadow-dark"
            />

            <div className="mx-1 flex  flex-1 flex-col gap-2 rounded-2xl bg-gradient-to-r from-slate-950 to-blue-900 text-white  shadow-light dark:shadow-dark  lg:min-w-[700px]">
              <p className="pl-3 text-lg font-bold">{item.name}</p>
              <p className="pl-3">{item.content}</p>
              <div className="mb-4 flex w-full items-center justify-center">
                <Image
                  width={500}
                  height={500}
                  src={item.coverUrl}
                  alt={item.name}
                  className="w-full  bg-green-500 md:max-w-[500px]"
                />
              </div>
            </div>
          </div>
        ))}
    </section>
  )
}
