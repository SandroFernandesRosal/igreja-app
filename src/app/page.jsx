import { imgs } from './components/imgs'
import CarouselTwo from './components/CarouselTwo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 pt-24 md:pt-48">

      <div className="flex flex-col md:flex-row gap-5 md:p-5 w-[80vw]">
        <div className="flex flex-1 w-[100%] justify-center md:w-[400px] md:h-[400px]  h-[400px]  overflow-hidden">
      <CarouselTwo imgs={imgs} />
      </div>
      <section className="flex flex-col items-center gap-5 flex-1 w-[100%]  flex-wrap bg-white/20 dark:bg-black/20 p-5 rounded-lg">
         <h1 className="text-xl font-bold">Últimas Notícias</h1>
         {imgs.reverse().slice(0, 4).map(item => (
          <article className="w-[100%] flex  justify-center bg-white dark:bg-black rounded-lg cursor-pointer hover:bg-primary dark:hover:bg-primary">
            
            <p>{item.title}</p>
          </article>
         ))}
       <button className="text-lg w-full  rounded-lg p-1 bg-white dark:bg-black hover:bg-primary dark:hover:bg-primary">Mais notícias</button>
      </section>

      </div>
    
    </main>
  )
}
