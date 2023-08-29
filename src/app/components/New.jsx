'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function New({ url, title, id, setSearch }) {
  return (
    <article className="dark:hover-shadow-md mb-5  flex h-[250px] w-[45%] max-w-[150px] flex-col items-center rounded-lg bg-white shadow-xl hover:shadow-lg  hover:shadow-primary  dark:bg-black dark:shadow-dark  dark:hover:shadow-primary md:h-[300px] md:w-[200px] md:max-w-[200px]">
      <Image
        src={url}
        alt={title}
        width={200}
        height={200}
        className="flex-1  border-b-[1px] border-gray-200 dark:border-gray-600"
      />
      <div className=" flex flex-1 flex-col items-center justify-between p-1">
        <p className="font-bold text-primary">{title}</p>

        <Link
          href={`/noticias/${id}`}
          className=" h-[40px] w-[80%] rounded-xl "
          onClick={() => setSearch('')}
        >
          <button className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-primary p-1 text-center font-bold text-white shadow-lg hover:bg-primary/50  dark:shadow-dark  ">
            {' '}
            Saiba mais
          </button>
        </Link>
      </div>
    </article>
  )
}
