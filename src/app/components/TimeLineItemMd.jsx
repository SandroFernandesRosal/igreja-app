export default function TimeLineItemMd({
  title,
  titletwo,
  hora,
  horatwo,
  day,
}) {
  return (
    <div className="mt-5 hidden min-h-[300px] w-[200px]  flex-col items-center rounded-xl bg-white p-3 shadow-xl hover:shadow-primary dark:bg-black dark:shadow-dark dark:hover:shadow-primary md:flex">
      <h1 className="mb-2 text-2xl text-primary">{day}</h1>
      <ul className="relative  w-[85%] overflow-visible border-l border-gray-700 dark:border-gray-700 md:w-[85%]">
        <li className="mb-10 ml-6">
          <span className="absolute  -left-1 flex h-2 w-2 items-center justify-center rounded-full bg-primary ring-8 ring-primary/20 "></span>
          <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>

          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {hora}
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute -left-1 flex h-2 w-2 items-center justify-center rounded-full bg-primary ring-8 ring-primary/20"></span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {titletwo}
          </h3>

          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            {horatwo}
          </p>
        </li>
      </ul>
    </div>
  )
}
