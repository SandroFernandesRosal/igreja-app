import Link from 'next/link'

export default function News({ children }) {
  return (
    <section className="bg-white-/20 mb-5 flex w-[90vw] flex-col items-center rounded-xl bg-white/20 shadow-lg dark:bg-black/20 dark:shadow-dark">
      <h1 className="m-0 text-lg font-bold text-primary ">Notícias</h1>
      <p className="mb-5 text-xl">Fique por dentro das notícias</p>
      <div className="flex   flex-wrap justify-center gap-2 md:gap-5">
        {children}
      </div>

      <Link
        href={`/noticias/`}
        className="mb-5 mt-5   h-[40px] w-[150px] rounded-xl "
      >
        <button className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-primary p-1 text-center font-bold text-white shadow-lg hover:bg-primary/50  dark:shadow-dark  ">
          Mais notícias
        </button>
      </Link>
    </section>
  )
}
