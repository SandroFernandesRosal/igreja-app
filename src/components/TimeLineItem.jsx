import Cookies from 'js-cookie'
import EditAgenda from './crud/EditAgenda'
import { useState } from 'react'
import RemoveAgenda from './crud/RemoveAgenda'

export default function TimeLineItem({ title, hora, day, id, destacar }) {
  const [openEdit, setOpenEdit] = useState(false)
  const token = Cookies.get('tokennn')
  return (
    <>
      <article
        className={`mb-5  flex h-[300px] w-[150px] max-w-[150px]  flex-col items-center  ${
          token ? 'justify-between' : 'justify-start gap-5 pt-1'
        } rounded-lg border-[1px] border-zinc-400    bg-bglight  pb-1 transition  delay-150 duration-300 ease-in-out  hover:-translate-y-1 hover:scale-110 dark:border-zinc-700 dark:bg-bgdark   md:h-[300px] md:w-[200px]  md:max-w-[200px]`}
      >
        <h1 className="mb-2 flex w-full justify-center text-center  font-bold text-primary dark:text-secundary">
          {day}
        </h1>
        <ul className="relative  w-[80%] overflow-visible border-l border-zinc-400 dark:border-zinc-700">
          <li className="mb-5 ml-6">
            <span className="absolute  -left-1 flex h-2 w-2 items-center justify-center rounded-full bg-primary ring-8 ring-primary/20 dark:bg-secundary "></span>
            <h3 className=" flex items-center  font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>

            <p className="font-normal text-gray-500 dark:text-gray-400">
              {hora}
            </p>
          </li>
        </ul>

        {token && (
          <div className="mt-[95px] flex w-full justify-around text-white">
            {openEdit === false && (
              <button
                className="m-[5px] rounded-lg border-[1px] border-zinc-400 bg-gradient-to-r  from-slate-950 to-blue-900   px-2 text-white hover:from-blue-900 hover:to-slate-900 dark:border-zinc-700 md:px-3 md:text-lg  md:font-bold"
                onClick={() => setOpenEdit(true)}
              >
                Editar
              </button>
            )}
            <RemoveAgenda id={id} />
          </div>
        )}
      </article>
      {openEdit && (
        <EditAgenda
          id={id}
          title={title}
          hora={hora}
          dia={day}
          setOpenEdit={setOpenEdit}
          destacar={destacar}
        />
      )}
    </>
  )
}
