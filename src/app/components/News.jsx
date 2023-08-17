export default function News({ children }) {
  return (
    <section className=" flex flex-col items-center">
      <h1 className="m-0 text-lg font-bold text-primary md:hidden">Notícias</h1>
      <p className="mb-5 text-xl md:hidden">Fique por dentro das notícias</p>
      <div className="flex  flex-wrap justify-center gap-2 md:gap-5">
        {children}
      </div>
    </section>
  )
}
