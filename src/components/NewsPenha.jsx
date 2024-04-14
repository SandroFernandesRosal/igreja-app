import News from './News'
import NewSlider from './NewSlider'

import Search from './Search'
import SelectLocal from './SelectLocal'

export default function NewsPenha() {
  return (
    <div className="flex flex-col  items-center justify-center gap-2 rounded-xl bg-transparent md:items-center  lg:mb-4 lg:w-[90vw]      lg:bg-bglightsecundary lg:px-2 lg:shadow-light  lg:dark:bg-bgdarksecundary lg:dark:shadow-dark">
      <div className=" hidden flex-col items-center md:min-w-[35%] lg:flex">
        <h1 className="m-0 text-lg font-bold text-primary dark:text-secundary sm:hidden lg:flex ">
          Notícias
        </h1>
        <p className=" px-2 text-center text-xl sm:hidden lg:flex ">
          Fique por dentro das notícias
        </p>

        <SelectLocal />
        <Search />
      </div>
      <div className="flex w-[100%] flex-col  lg:flex-row  lg:flex-wrap lg:items-start ">
        <NewSlider />
        <News />
      </div>
    </div>
  )
}
