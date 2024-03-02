import { useRouter } from 'next/navigation'
import { useLocal } from '../store/useStore'

export default function SelectLocal() {
  const router = useRouter()
  const { local, setLocal } = useLocal()

  const handleLocalSelection = (selected) => {
    setLocal(selected)
  }

  return (
    <div className="flex pb-3">
      <p
        className={`m-2 flex cursor-pointer rounded-lg border-none bg-bglight p-2 placeholder-black shadow-light outline-none hover:shadow-hover focus:ring-0 dark:bg-bgdark dark:placeholder-white dark:shadow-dark dark:hover:shadow-hover ${
          router.pathname === '/viladapenha' ? 'highlighted' : ''
        } ${local === 'viladapenha' ? 'text-primary' : ''}`}
        onClick={() => handleLocalSelection('viladapenha')}
      >
        Vila da Penha
      </p>{' '}
      <p
        className={`m-2 flex cursor-pointer rounded-lg border-none bg-bglight p-2 placeholder-black shadow-light outline-none hover:shadow-hover focus:ring-0 dark:bg-bgdark dark:placeholder-white dark:shadow-dark dark:hover:shadow-hover ${
          router.pathname === '/caxias' ? 'highlighted' : ''
        } ${local === 'caxias' ? 'text-primary' : ''}`}
        onClick={() => handleLocalSelection('caxias')}
      >
        Vila Maria Helena
      </p>
      <p
        className={`m-2 flex cursor-pointer rounded-lg border-none bg-bglight p-2 placeholder-black shadow-light outline-none hover:shadow-hover focus:ring-0 dark:bg-bgdark dark:placeholder-white dark:shadow-dark dark:hover:shadow-hover ${
          router.pathname === '/tomazinho' ? 'highlighted' : ''
        } ${local === 'tomazinho' ? 'text-primary' : ''}`}
        onClick={() => handleLocalSelection('tomazinho')}
      >
        Tomazinho
      </p>
    </div>
  )
}
