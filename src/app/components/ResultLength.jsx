export default function ResultLength({ search, DataNews }) {
  const results = DataNews.filter(
    (item) => item.title.toLowerCase().indexOf(search) !== -1,
  )
  return (
    <>
      {results.length === 0 ? (
        <div className=" mb-5 flex-col items-center text-center">
          <h1 className="m-0 text-lg font-bold text-primary ">
            {' '}
            Nenhuma notícia encontrada{' '}
          </h1>
          <p className="text-xl ">Faça uma nova pesquisa</p>
        </div>
      ) : (
        <div className="mb-5 flex-col items-center text-center">
          <p className="text-xl font-bold text-primary ">
            {results.length} notícia{results.length === 1 ? '' : 's'} encontrada
            {results.length === 1 ? '' : 's'}{' '}
          </p>
        </div>
      )}
    </>
  )
}
