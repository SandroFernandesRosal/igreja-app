import { imgs } from './imgs'
import Image from 'next/image'

export default function News() {
  return (
    <section className="flex w-[80vw] flex-col items-center  gap-5 rounded-lg bg-white/20    p-5 dark:bg-black/20 md:w-[50vw] lg:w-[40vw]">
      <div className="flex flex-wrap justify-center gap-5">
        {imgs.slice(0, 4).map((item) => (
          <article
            key={item.id}
            className="flex h-[200px] w-[200px] cursor-pointer  justify-center rounded-xl  hover:bg-primary dark:bg-black dark:hover:bg-primary"
          >
            <Image
              src={item.url}
              alt={item.title}
              width={100}
              height={100}
              className="flex-1"
            />
            <p className="absolute flex min-h-[50px] w-[200px] items-center justify-center self-end rounded-lg bg-black/40 text-white backdrop-blur-sm">
              {item.title}
            </p>
          </article>
        ))}
      </div>
      <button className="w-[200px] rounded-lg  bg-white p-1 text-lg hover:bg-primary dark:bg-black dark:hover:bg-primary">
        Mais notícias
      </button>
    </section>
  )
}
