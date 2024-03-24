'use client'
import { useLocal } from '../store/useStore'

export default function SelectLocal() {
  const local = useLocal.getState().local
  const setLocal = useLocal.getState().setLocal

  const handleLocalSelection = (selected) => {
    setLocal(selected)
  }

  return (
    <div className="flex flex-wrap justify-center pb-3">
      <p
        className={`m-2 flex cursor-pointer rounded-lg border-none bg-bglight p-2 placeholder-black shadow-light outline-none  hover:bg-gradient-to-r hover:from-blue-900 hover:to-slate-900 hover:text-white focus:ring-0 dark:bg-bgdark dark:placeholder-white dark:shadow-dark  ${
          local === 'viladapenha'
            ? 'bg-gradient-to-r from-slate-950 to-blue-900 text-white hover:from-blue-900 hover:to-slate-900 hover:shadow-light dark:hover:shadow-dark'
            : ''
        }`}
        onClick={() => handleLocalSelection('viladapenha')}
      >
        Vila da Penha
      </p>{' '}
      <p
        className={`m-2 flex cursor-pointer rounded-lg border-none bg-bglight p-2 placeholder-black shadow-light outline-none  hover:bg-gradient-to-r hover:from-blue-900 hover:to-slate-900 hover:text-white focus:ring-0 dark:bg-bgdark dark:placeholder-white dark:shadow-dark  ${
          local === 'caxias'
            ? 'bg-gradient-to-r from-slate-950 to-blue-900 text-white hover:from-blue-900 hover:to-slate-900 hover:shadow-light dark:hover:shadow-dark'
            : ''
        }`}
        onClick={() => handleLocalSelection('caxias')}
      >
        Vila Maria Helena
      </p>
      <p
        className={`m-2 flex cursor-pointer  rounded-lg border-none bg-bglight p-2 placeholder-black shadow-light outline-none  hover:bg-gradient-to-r hover:from-blue-900 hover:to-slate-900 hover:text-white focus:ring-0 dark:bg-bgdark dark:placeholder-white dark:shadow-dark  ${
          local === 'tomazinho'
            ? 'bg-gradient-to-r from-slate-950 to-blue-900 text-white hover:from-blue-900 hover:to-slate-900 hover:shadow-light dark:hover:shadow-dark'
            : ''
        }`}
        onClick={() => handleLocalSelection('tomazinho')}
      >
        Tomazinho
      </p>
    </div>
  )
}
