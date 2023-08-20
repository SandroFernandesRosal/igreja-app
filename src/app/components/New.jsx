'use client'
import Image from 'next/image'

export default function New({ url, title }) {
  return (
    <article className="flex h-[150px] w-[150px] cursor-pointer justify-center rounded-xl text-center shadow-lg dark:shadow-dark md:h-[200px] md:w-[200px]  ">
      <Image
        src={url}
        alt={title}
        width={200}
        height={200}
        className="flex-1"
      />
      <p className="absolute flex min-h-[50px] w-[150px] items-center justify-center self-end rounded-lg bg-black/40 text-white shadow-lg backdrop-blur-sm md:w-[200px] ">
        {title}
      </p>
    </article>
  )
}
