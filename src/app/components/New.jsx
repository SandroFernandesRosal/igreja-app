import Image from 'next/image'

export default function New({ setSearch, url, title }) {
  return (
    <article
      onClick={() => setSearch('')}
      className="flex h-[200px] w-[200px] cursor-pointer justify-center  rounded-xl shadow-xl "
    >
      <Image
        src={url}
        alt={title}
        width={200}
        height={200}
        className="flex-1"
      />
      <p className="absolute flex min-h-[50px] w-[200px] items-center justify-center self-end rounded-lg bg-black/40 text-white backdrop-blur-sm">
        {title}
      </p>
    </article>
  )
}
