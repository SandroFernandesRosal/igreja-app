import { imgs } from './imgs'
import Image from 'next/image'

export default function News() {
  return (
    <section className="mt-10 flex w-[80vw] flex-col items-center rounded-lg bg-white/20    p-0 pb-5 pt-1 dark:bg-black/20 md:mt-0 md:w-[50vw] md:bg-transparent md:pt-0 md:dark:bg-transparent lg:w-[40vw]">
      <h1 className="m-0 text-lg font-bold text-primary md:hidden">Notícias</h1>
      <p className="mb-5 text-xl md:hidden">Fique por dentro das notícias</p>
      <div className="flex  flex-wrap justify-center gap-5">
        {imgs.slice(0, 4).map((item) => (
          <article
            key={item.id}
            className="flex h-[200px] w-[200px] cursor-pointer justify-center  rounded-xl shadow-xl "
          >
            <Image
              src={item.url}
              alt={item.title}
              width={200}
              height={200}
              className="flex-1"
            />
            <p className="absolute flex min-h-[50px] w-[200px] items-center justify-center self-end rounded-lg bg-black/40 text-white backdrop-blur-sm">
              {item.title}
            </p>
          </article>
        ))}
      </div>
      <button className="mt-5 w-[200px] rounded-lg bg-white p-1 text-lg shadow-xl hover:bg-primary dark:bg-black dark:hover:bg-primary">
        Mais notícias
      </button>
    </section>
  )
}
