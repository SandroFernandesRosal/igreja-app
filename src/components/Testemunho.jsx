'use client'
import Image from 'next/image'
import { useTokenIgreja } from '@/hooks/useTokenIgreja'
import AddTestemunho from '@/components/crud/AddTestemunho'
import { useState, Suspense } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { format } from 'date-fns'
import EditTestemunho from './crud/EditTestemunho'
import RemoveTestemunho from './crud/RemoveTestemunho'
import Link from 'next/link'
import { useToken } from '@/hooks/useToken'

export default function Testemunho({ data, userIgreja }) {
  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(null)
  const tokenIgreja = useTokenIgreja()
  const token = useToken()

  function formatDate(dateString) {
    const date = new Date(dateString)
    const formattedDate = format(date, 'dd/MM/yyyy HH:mm')
    return formattedDate
  }

  return (
    <section className="mb-4 flex min-h-screen w-[100vw] flex-col items-center rounded-[35px] border-[1px]  border-zinc-400  bg-bglight  px-1  pb-4 dark:border-zinc-700 dark:bg-bgdark md:w-[90vw] md:rounded-xl">
      <div className="flex flex-col items-center  md:min-w-[35%]">
        <h1 className="m-0 text-lg font-bold text-primary dark:text-secundary ">
          Testemunhos
        </h1>
        <p className="mb-4 text-xl ">O agir de Deus em nossas vidas</p>
      </div>

      {data && data.length < 1 && (
        <div className="text-center">
          {' '}
          <p className="mb-3">NENHUM TESTEMUNHO CADASTRADO AINDA.</p>{' '}
        </div>
      )}

      {!tokenIgreja ||
        (token && (
          <>
            {' '}
            <div className="flex w-full flex-wrap items-end justify-center gap-1">
              Faça
              <Link
                href={'/login/igreja'}
                className="cursor-pointer items-center  rounded-lg bg-gradient-to-r from-slate-950 to-blue-900 px-2  font-bold text-white  hover:from-blue-900 hover:to-slate-900"
              >
                login
              </Link>{' '}
              ou{' '}
              <Link
                href={'/register'}
                className="cursor-pointer  rounded-lg bg-gradient-to-r from-slate-950 to-blue-900 px-2  font-bold text-white  hover:from-blue-900 hover:to-slate-900"
              >
                Registre-se
              </Link>
              e envie seu testemunho.
            </div>{' '}
          </>
        ))}

      {tokenIgreja && (
        <>
          {open === false && (
            <div
              className="mb-4 flex cursor-pointer rounded-lg border-[1px] border-zinc-400 bg-bglight bg-gradient-to-r from-slate-950 to-blue-900 p-2 text-white placeholder-black outline-none hover:bg-gradient-to-r hover:from-blue-900 hover:to-slate-900 focus:ring-0  dark:border-zinc-700 dark:bg-bgdark  dark:placeholder-white "
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
      <Suspense fallback={<p>Carregando...</p>}>
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className="flex w-[100vw] flex-col items-start gap-3  px-6 py-4   md:flex-row md:justify-center"
            >
              <Image
                width={300}
                height={300}
                src={item.avatarUrl}
                alt={item.name}
                className="mx-1 h-[100px] w-[100px] rounded-full bg-gradient-to-r from-slate-950 to-blue-900 p-[4px] text-white shadow-light  hover:from-blue-900 hover:to-slate-900 dark:shadow-dark"
              />

              <div className="flex w-full flex-col gap-2   rounded-2xl bg-gradient-to-r from-slate-950 to-blue-900 pb-2 text-white shadow-light   dark:shadow-dark md:w-[70%]  lg:min-w-[700px]">
                <div className="flex items-center justify-between px-3">
                  {' '}
                  <p className=" text-lg font-bold">{item.name}</p>
                  <span className="text-sm">
                    Postado em: {formatDate(item.createdAt)}
                  </span>{' '}
                </div>

                <p className="pl-3">{item.content}</p>
                {item.coverUrl && (
                  <div className="mb-4 flex w-full items-center justify-center">
                    <Image
                      width={500}
                      height={500}
                      src={item.coverUrl}
                      alt={item.name}
                      className="w-full rounded-xl  md:max-w-[500px]"
                    />
                  </div>
                )}

                {token || (userIgreja && userIgreja.sub === item.userId) ? (
                  <div className="flex justify-center gap-4">
                    {openEdit === null && (
                      <button
                        className="m-[2px] rounded-lg bg-gradient-to-r from-slate-950 to-blue-900 px-2 text-lg font-bold text-white shadow-light hover:from-blue-900 hover:to-slate-900 md:px-3 md:text-lg"
                        onClick={() => setOpenEdit(item.id)}
                      >
                        Editar
                      </button>
                    )}

                    {openEdit === item.id && (
                      <div>
                        <EditTestemunho
                          avatarUrl={item.avatarUrl}
                          name={item.name}
                          id={item.id}
                          img={item.coverUrl}
                          conteudo={item.content}
                          userIgreja={userIgreja}
                          setOpenEdit={setOpenEdit}
                        />
                      </div>
                    )}
                    <RemoveTestemunho id={item.id} />
                  </div>
                ) : null}
              </div>
            </div>
          ))}
      </Suspense>
    </section>
  )
}
