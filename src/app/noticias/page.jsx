import News from '../components/News'
import New from '../components/New'
import { imgs } from '../components/imgs'
export default function Noticias() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 pb-5 pt-24 md:px-[10px] md:pt-48">
      <div className="hidden flex-col items-center text-center md:flex">
        <h1 className="m-0 text-lg font-bold text-primary ">Notícias</h1>

        <p className="text-xl ">Fique por dentro das notícias</p>
      </div>
      <News>
        {imgs.reverse().map((item) => (
          <New key={item.id} url={item.url} title={item.title} />
        ))}
      </News>
    </main>
  )
}
