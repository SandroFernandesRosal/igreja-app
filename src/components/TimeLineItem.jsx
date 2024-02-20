import Cookies from 'js-cookie'
import EditAgenda from './EditAgenda'
import { useState } from 'react'
import RemoveAgenda from './RemoveAgenda'

export default function TimeLineItem({ title, hora, day, id }) {
  const [openEdit, setOpenEdit] = useState(false)
  const token = Cookies.get('tokennn')
  return (
    <>
      <div className=" mb-5  flex h-[300px] w-[45%] max-w-[150px] flex-col items-center gap-5 rounded-lg bg-bglight shadow-light   transition  delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-hover dark:bg-bgdark dark:shadow-dark dark:hover:shadow-hover  md:h-[300px] md:w-[200px]  md:max-w-[200px]">
        <h1 className="mb-2 flex w-full justify-center text-lg font-bold text-primary">
          {day}
        </h1>
        <ul className="relative  w-[80%] overflow-visible border-l border-gray-700 dark:border-gray-700">
          <li className="mb-5 ml-6">
            <span className="absolute  -left-1 flex h-2 w-2 items-center justify-center rounded-full bg-primary ring-8 ring-primary/20 "></span>
            <h3 className=" flex items-center  font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>

            <p className="mb-4  font-normal text-gray-500 dark:text-gray-400">
              {hora}
            </p>
          </li>
        </ul>

        {token && (
          <div className="mt-[95px] flex w-full justify-around">
            {openEdit === false && (
              <button
                className="font-bold text-green-500 md:text-lg"
                onClick={() => setOpenEdit(true)}
              >
                Editar
              </button>
            )}
            <RemoveAgenda id={id} />
          </div>
        )}
      </div>
      {openEdit && (
        <EditAgenda
          id={id}
          title={title}
          hora={hora}
          dia={day}
          setOpenEdit={setOpenEdit}
        />
      )}
    </>
  )
}
