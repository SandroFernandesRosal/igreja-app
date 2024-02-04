import { useLocal } from '../store/useStore'
export default function SelectLocal() {
  const { setLocal } = useLocal()
  return (
    <div className="mb-5 flex gap-3 text-primary">
      <p className="cursor-pointer" onClick={() => setLocal('vp')}>
        Vila da Penha
      </p>{' '}
      |
      <p className="cursor-pointer" onClick={() => setLocal('caxias')}>
        Caxias
      </p>
      |
      <p className="cursor-pointer" onClick={() => setLocal('tomazinho')}>
        Tomazinho
      </p>
    </div>
  )
}
