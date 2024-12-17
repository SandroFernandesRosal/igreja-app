'use client'
import Image from 'next/image'
import maps from '../../public/img/map.png'
import EditEndereco from './crud/EditEndereco'
import RemoveEndereco from './crud/RemoveEndereco'
import Cookies from 'js-cookie'
import { useState } from 'react'

export default function LocaisItem({ local, rua, cep, id }) {
  const [openEdit, setOpenEdit] = useState(false)
  const token = Cookies.get('tokennn')
  return (
    <>
      <div className="mb-5 flex  h-[300px] w-[45%]  max-w-[150px] flex-col items-center rounded-lg  border-[1px]  border-zinc-400 bg-bglight  transition delay-150 duration-300 ease-in-out  hover:-translate-y-1  hover:scale-110 dark:border-zinc-700 dark:bg-bgdark md:h-[300px] md:w-[200px] md:max-w-[200px]">
        <div className="flex w-full  flex-1 flex-col  justify-start gap-1 p-2">
          <h1 className="flex w-full justify-center font-bold  text-primary dark:text-secundary md:text-lg">
            {local}
          </h1>
          <p>{rua}</p>
          <p>CEP: {cep}</p>
        </div>

        <Image
          src={maps}
          alt="mapa"
          width={350}
          height={100}
          className={`${token ? 'flex-1' : 'flex-2'}  w-full`}
        />
        {token && (
          <div className="mb-2 flex w-full justify-around text-white">
            {openEdit === false && (
              <button
                className="m-[5px]  rounded-lg border-[1px] border-zinc-400 bg-gradient-to-r  from-slate-950 to-blue-900  px-1 text-white hover:from-blue-900 hover:to-slate-900 dark:border-zinc-700 md:px-3 md:text-lg md:selection:font-bold"
                onClick={() => setOpenEdit(true)}
              >
                Editar
              </button>
            )}
            <RemoveEndereco id={id} />
          </div>
        )}
      </div>

      {openEdit && (
        <EditEndereco
          localInitial={local}
          ruaInitial={rua}
          cepInitial={cep}
          id={id}
          setOpenEdit={setOpenEdit}
        />
      )}
    </>
  )
}
