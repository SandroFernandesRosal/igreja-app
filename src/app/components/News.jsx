import { imgs } from './imgs'
import New from './New'

export default function News({ setSeach }) {
  return (
    <section className="mt-10 flex w-[80vw] flex-col items-center rounded-lg bg-white/20    p-0 pb-5 pt-1 dark:bg-black/20 md:mt-0 md:w-[50vw] md:bg-transparent md:pt-0 md:dark:bg-transparent lg:w-[40vw]">
      <h1 className="m-0 text-lg font-bold text-primary md:hidden">Notícias</h1>
      <p className="mb-5 text-xl md:hidden">Fique por dentro das notícias</p>
      <div className="flex  flex-wrap justify-center gap-5">
        {imgs.slice(0, 4).map((item) => (
          <New
            key={item.id}
            url={item.url}
            title={item.title}
            setSearch={setSeach}
          />
        ))}
      </div>
      <button className="mt-5 w-[200px] rounded-lg bg-white p-1 text-lg shadow-xl hover:bg-primary dark:bg-black dark:hover:bg-primary">
        Mais notícias
      </button>
    </section>
  )
}
