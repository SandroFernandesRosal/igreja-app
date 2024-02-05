import Image from 'next/image'
import Link from 'next/link'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function New({ url, title, id, description, page }) {
  return (
    <article className=" mb-5  flex h-[300px] w-[45%] max-w-[150px] flex-col items-center rounded-lg bg-bglight shadow-light   transition  delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-hover dark:bg-bgdark dark:shadow-dark dark:hover:shadow-hover  md:h-[300px] md:w-[200px]  md:max-w-[200px]">
      <Link
        href={`/noticias/${page}/${id}`}
        className="flex-1 border-b-[1px] border-gray-200 dark:border-gray-600"
      >
        <Image
          width={300}
          height={300}
          src={url}
          alt={title}
          className="h-full object-fill"
        />
      </Link>
      <div className=" flex flex-1 flex-col items-center justify-between p-1">
        <Link href={`/noticias/${page}/${id}`}>
          <p className="font-bold text-primary">{title}</p>
        </Link>
        <p>{description}...</p>

        <Link
          href={`/noticias/${page}/${id}`}
          className="flex items-center  justify-center gap-2 font-bold text-primary hover:text-primary/40"
        >
          <p>Leia mais</p> <FaLongArrowAltRight className="text-xl" />
        </Link>
      </div>
    </article>
  )
}
