'use client'

import { BsBank } from 'react-icons/bs'
import { MdOutlinePix } from 'react-icons/md'
import EditDoacao from './EditDoacao'
import RemoveDoacao from './RemoveDoacao'
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
      <div className="mb-5 flex h-[300px] w-[45%] max-w-[150px] flex-col items-center gap-2 rounded-xl bg-bglight p-1 shadow-light transition delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-hover dark:bg-bgdark dark:shadow-dark dark:hover:shadow-hover md:mb-5 md:h-[300px] md:w-[200px] md:max-w-[200px]">
        <h1 className="text-primary md:text-xl md:font-bold">{local}</h1>

        <div className="flex w-full flex-col justify-center md:gap-4 md:p-2 ">
          <div className="">
            <div className="flex w-full justify-center">
              <BsBank className="text-primary md:text-xl" />
            </div>
            <p>{banco}</p>
            <p>C: {conta}</p>
            <p>Ag:{agencia}</p>
            <p>{nomebanco}</p>
          </div>

          <div className="">
            <div className="flex w-full justify-center">
              {' '}
              <MdOutlinePix className="text-primary md:text-xl" />
            </div>
            <p>{pix}</p>
            <p>{nomepix}</p>
          </div>
        </div>

        {token && (
          <div className="flex w-full justify-around">
            {openEdit === false && (
              <button
                className="font-bold text-green-500 md:text-lg"
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
