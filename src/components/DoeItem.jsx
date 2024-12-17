'use client'

import { BsBank } from 'react-icons/bs'
import { MdOutlinePix } from 'react-icons/md'
import EditDoacao from './crud/EditDoacao'
import RemoveDoacao from './crud/RemoveDoacao'
import Cookies from 'js-cookie'
import { useState } from 'react'

export default function DoeItem({
  local,
  banco,
  conta,
  agencia,
  nomebanco,
  pix,
  nomepix,
  id,
}) {
  const [openEdit, setOpenEdit] = useState(false)
  const token = Cookies.get('tokennn')
  return (
    <>
      <div className="mb-5 flex h-[300px] w-[45%] max-w-[150px] flex-col items-center gap-2 rounded-xl border-[1px]   border-zinc-400 bg-bglight transition  delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 dark:border-zinc-700 dark:bg-bgdark   md:mb-5 md:h-[300px] md:w-[200px] md:max-w-[200px]">
        <h1 className="text-center font-bold text-primary dark:text-secundary md:text-xl">
          {local}
        </h1>

        <div className="flex w-full flex-col justify-center px-1 md:gap-4 md:p-2">
          <div className="">
            <div className="flex w-full justify-center">
              <BsBank className="text-primary dark:text-secundary md:text-xl" />
            </div>
            <p>{banco}</p>
            <p>C: {conta}</p>
            <p>Ag:{agencia}</p>
            <p>{nomebanco}</p>
          </div>

          <div className="">
            <div className="flex w-full justify-center">
              {' '}
              <MdOutlinePix className="text-primary dark:text-secundary md:text-xl" />
            </div>
            <p>{pix}</p>
            <p>{nomepix}</p>
          </div>
        </div>

        {token && (
          <div className=" mb-1 flex w-full flex-1 items-end justify-around text-white">
            {openEdit === false && (
              <button
                className="m-[5px]  rounded-lg bg-gradient-to-r from-slate-950 to-blue-900  px-1 text-white  shadow-light hover:from-blue-900 hover:to-slate-900 dark:shadow-dark md:px-3 md:text-lg md:font-bold"
                onClick={() => setOpenEdit(true)}
              >
                Editar
              </button>
            )}
            <RemoveDoacao id={id} />
          </div>
        )}
      </div>

      {openEdit && (
        <EditDoacao
          localInitial={local}
          bancoInitial={banco}
          contaInitial={conta}
          agenciaInitial={agencia}
          nomebancoInitial={nomebanco}
          pixInitial={pix}
          nomepixInitial={nomepix}
          id={id}
          setOpenEdit={setOpenEdit}
        />
      )}
    </>
  )
}
