'use client'
import SelectLocal from '@/components/SelectLocal'
import News from '../../components/News'
import Search from '@/components/Search'

export default function Noticias() {
  return (
    <main className="mb-8 mt-24 flex flex-col items-center justify-center  gap-4 rounded-[35px] bg-transparent md:mx-4 md:mt-[145px]   md:items-start  md:p-2 md:px-2  lg:mx-[5%]  lg:mt-[160px] lg:bg-bglightsecundary lg:shadow-light  lg:dark:bg-bgdarksecundary lg:dark:shadow-dark">
      <div className="hidden w-full  flex-col items-center sm:hidden md:min-w-[35%] lg:flex">
        <h1 className="m-0 text-lg font-bold text-primary dark:text-secundary sm:hidden lg:flex ">
          Notícias
        </h1>
        <p className=" px-2 text-center text-xl sm:hidden lg:flex ">
          Fique por dentro das notícias
        </p>

        <SelectLocal />
        <Search />
      </div>
      <News />
    </main>
  )
}
