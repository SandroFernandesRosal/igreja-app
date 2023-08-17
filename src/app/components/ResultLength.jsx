'use client'
import { useSearch } from '../store/searchStore'

export default function ResultLength() {
  const { DataNews } = useSearch()
  const { search } = useSearch()

  const results = DataNews.filter(
    (item) => item.title.toLowerCase().indexOf(search) !== -1,
  )
  return (
    <>
      {results.length === 0 ? (
        <div className="mt-10 flex-col items-center text-center">
          <h1 className="m-0 text-lg font-bold text-primary ">
            {' '}
            Nenhuma notícia encontrada{' '}
          </h1>
          <p className="text-xl ">Faça uma nova pesquisa</p>
        </div>
      ) : (
        <div className=" mt-10 flex-col items-center text-center">
          <h1 className="m-0 text-lg font-bold text-primary ">Notícias</h1>

          <p className="text-xl ">
            {results.length} notícia{results.length === 1 ? '' : 's'} encontrada
            {results.length === 1 ? '' : 's'}{' '}
          </p>
        </div>
      )}
    </>
  )
}
