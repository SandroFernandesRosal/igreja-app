'use client'

import { useLocal } from '../store/useStore'

export default function SelectLocal() {
  const { local, setLocal } = useLocal()

  const handleLocalSelection = (selected) => {
    setLocal(selected)
  }

  return (
    <div className="flex flex-wrap justify-center pb-3">
      <p
        className={`m-2 flex cursor-pointer rounded-lg border-[1px]  border-zinc-400 bg-bglight p-2 placeholder-black outline-none hover:bg-gradient-to-r  hover:from-blue-900 hover:to-slate-900 hover:text-white focus:ring-0 dark:border-zinc-700 dark:bg-bgdark dark:placeholder-white   ${
          local === 'viladapenha'
            ? 'bg-gradient-to-r from-slate-950 to-blue-900 text-white hover:from-blue-900 hover:to-slate-900'
            : ''
        }`}
        onClick={() => handleLocalSelection('viladapenha')}
      >
        Vila da Penha
      </p>{' '}
      <p
        className={`m-2 flex cursor-pointer rounded-lg  border-[1px] border-zinc-400 bg-bglight p-2  placeholder-black outline-none hover:bg-gradient-to-r hover:from-blue-900 hover:to-slate-900 hover:text-white focus:ring-0 dark:border-zinc-700 dark:bg-bgdark dark:placeholder-white ${
          local === 'caxias'
            ? 'bg-gradient-to-r from-slate-950 to-blue-900 text-white hover:from-blue-900 hover:to-slate-900'
            : ''
        }`}
        onClick={() => handleLocalSelection('caxias')}
      >
        Vila Maria Helena
      </p>
      <p
        className={`m-2 flex cursor-pointer rounded-lg border-[1px] border-zinc-400  bg-bglight  p-2 placeholder-black outline-none  hover:bg-gradient-to-r  hover:from-blue-900 hover:to-slate-900 hover:text-white focus:ring-0 dark:border-zinc-700 dark:bg-bgdark dark:placeholder-white   ${
          local === 'tomazinho'
            ? 'bg-gradient-to-r from-slate-950 to-blue-900 text-white hover:from-blue-900 hover:to-slate-900'
            : ''
        }`}
        onClick={() => handleLocalSelection('tomazinho')}
      >
        Tomazinho
      </p>
    </div>
  )
}
