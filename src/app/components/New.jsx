'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function New({ url, title, id }) {
  return (
    <article className="mx-2 mb-4 flex h-[300px] w-[150px]  flex-col justify-center rounded-xl bg-white text-center shadow-lg dark:bg-black dark:shadow-dark md:h-[300px] md:w-[200px] ">
      <Image
        src={url}
        alt={title}
        width={200}
        height={200}
        className="flex-1 border-b-[1px] border-gray-200 dark:border-gray-600"
      />
      <div className=" flex flex-1 flex-col items-center justify-between p-1">
        <p className="font-bold text-primary">{title}</p>

        <Link
          href={`/noticias/${id}`}
          className=" h-[40px] w-[80%] rounded-xl "
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
