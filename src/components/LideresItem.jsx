import Image from 'next/image'
import Cookies from 'js-cookie'
import { useState } from 'react'
import RemoveMinisterio from './crud/RemoveMinisterio'
import EditMinisterio from './crud/EditMinisterio'

export default function LideresItem({ nome, titulo, local, img, id }) {
  const [openEdit, setOpenEdit] = useState(false)
  const token = Cookies.get('tokennn')
  return (
    <>
      <div
        className={`mb-5 flex ${
          token && 'pt-4'
        } h-[300px] w-[45%]  max-w-[150px] flex-col items-center justify-evenly rounded-xl bg-bglight shadow-light transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-hover  dark:bg-bgdark dark:shadow-dark dark:hover:shadow-hover md:h-[300px] md:w-[200px] md:max-w-[200px]`}
      >
        <Image
          width={120}
          height={120}
          src={img}
          alt={nome}
          className="flex  h-[120px] w-[120px] items-center justify-center rounded-full border-2  border-primary"
        />

        <div
          className={`${
            token && 'mt-2'
          } text-center font-bold text-primary md:text-lg`}
        >
          <p>{nome}</p>
          <p>{titulo}</p>
          <p>{local}</p>
        </div>

        {token && (
          <div className="mb-2 flex w-full flex-1 items-end justify-around text-white">
            {openEdit === false && (
              <button
                className="rounded-lg bg-green-500 px-1 font-bold hover:bg-green-700 md:px-3 md:text-lg"
                onClick={() => setOpenEdit(true)}
              >
                Editar
              </button>
            )}
            <RemoveMinisterio id={id} />
          </div>
        )}
      </div>

      {openEdit && (
        <EditMinisterio
          nome={nome}
          titulo={titulo}
          img={img}
          lugar={local}
          id={id}
          setOpenEdit={setOpenEdit}
        />
      )}
    </>
  )
}
