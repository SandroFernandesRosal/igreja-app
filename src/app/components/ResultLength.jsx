export default function ResultLength({ search, news }) {
  const results = news.filter(
    (item) => item.title.toLowerCase().indexOf(search) !== -1,
  )
  return (
    <>
      {results.length === 0 ? (
        <div className=" flex-col items-center text-center">
          <h1 className="m-0 px-2 text-lg font-bold text-primary ">
            {' '}
            Nenhuma notícia encontrada{' '}
          </h1>
          <p className="px-2 text-xl ">
            Faça uma nova pesquisa ou clique em Mais notícias
          </p>
        </div>
      ) : (
        <div className=" mb-4 flex-col items-center text-center">
          <p className="text-xl font-bold text-primary ">
            {results.length} notícia{results.length === 1 ? '' : 's'} encontrada
            {results.length === 1 ? '' : 's'}{' '}
          </p>
        </div>
      )}
    </>
  )
}
