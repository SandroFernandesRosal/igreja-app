import Link from 'next/link'
import { BiNews, BiHomeHeart } from 'react-icons/bi'
import { TfiEmail } from 'react-icons/tfi'
import { AiOutlineSchedule } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { FaHandHoldingHeart, FaMapMarkerAlt } from 'react-icons/fa'

export default function NavBarMd({ handleMenu }) {
  return (
    <nav
      className={` font-Roboto
       hidden w-full  items-center justify-center gap-5  bg-white/30 p-3    pb-[5px]   backdrop-blur-md dark:bg-black/30 md:flex`}
    >
      <Link
        href="/quemsomos"
        className=" flex flex-col items-center justify-center text-lg hover:text-primary"
        onClick={handleMenu}
      >
        <BiHomeHeart className="text-primary" /> <p>Quem Somos</p>
      </Link>
      <Link
        href="/enderecos"
        className="flex flex-col items-center justify-center text-lg hover:text-primary"
        onClick={handleMenu}
      >
        <FaMapMarkerAlt className="text-primary" /> <p>Endereços</p>
      </Link>
      <Link
        href="/ministerio"
        className="flex flex-col items-center justify-center text-lg hover:text-primary"
        onClick={handleMenu}
      >
        <BiHomeHeart className="text-primary" /> <p>Ministério</p>
      </Link>

      <Link
        href="/doacao"
        className="flex  flex-col  items-center justify-center text-lg hover:text-primary"
        onClick={handleMenu}
      >
        <FaHandHoldingHeart className="text-primary" /> <p>Doação</p>
      </Link>

      <Link
        href="/agenda"
        className="flex  flex-col  items-center justify-center text-lg hover:text-primary"
        onClick={handleMenu}
      >
        <AiOutlineSchedule className="text-primary" /> <p>Agenda</p>
      </Link>

      <Link
        href="/biblia"
        className="flex flex-col  items-center justify-center text-lg hover:text-primary"
        onClick={handleMenu}
      >
        <BsBook className="text-primary" /> <p>Bíblia</p>
      </Link>

      <Link
        href="/noticias"
        className="flex flex-col  items-center justify-center text-lg hover:text-primary"
        onClick={handleMenu}
      >
        <BiNews className="text-primary" /> <p>Notícias</p>
      </Link>

      <Link
        href="/contato"
        className="flex  flex-col  items-center justify-center text-lg hover:text-primary"
        onClick={handleMenu}
      >
        <TfiEmail className="text-primary" /> <p>Contato</p>
      </Link>
    </nav>
  )
}
