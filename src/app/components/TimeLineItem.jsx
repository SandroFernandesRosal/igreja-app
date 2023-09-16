export default function TimeLineItem({
  title,
  titletwo,
  hora,
  horatwo,
  day,
  trueitem,
}) {
  return (
    <div className="mt-5 h-[300px] w-[45%] max-w-[150px] flex-col items-center overflow-hidden rounded-xl bg-white p-2 px-4 shadow-light hover:shadow-lg hover:shadow-primary dark:bg-black dark:shadow-dark dark:hover:shadow-primary md:h-[300px] md:w-[200px] md:max-w-[200px]">
      <h1 className="mb-2 flex w-full justify-center text-lg font-bold text-primary">
        {day}
      </h1>
      <ul className="relative  overflow-visible border-l border-gray-700 dark:border-gray-700 md:w-[85%]">
        <li className="mb-5 ml-6">
          <span className="absolute  -left-1 flex h-2 w-2 items-center justify-center rounded-full bg-primary ring-8 ring-primary/20 "></span>
          <h3 className=" flex items-center  font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>

          <p className="mb-4  font-normal text-gray-500 dark:text-gray-400">
            {hora}
          </p>
        </li>
        {trueitem === true && (
          <li className=" ml-6">
            <span className="absolute -left-1 flex h-2 w-2 items-center justify-center rounded-full bg-primary ring-8 ring-primary/20"></span>
            <h3 className="mb-1  font-semibold text-gray-900 dark:text-white">
              {titletwo}
            </h3>

            <p className=" font-normal text-gray-500 dark:text-gray-400">
              {horatwo}
            </p>
          </li>
        )}
      </ul>
    </div>
  )
}
