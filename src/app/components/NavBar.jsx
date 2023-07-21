import Link from 'next/link'
import ChangeTheme from './ChangeTheme'
import { BiNews, BiHomeHeart } from 'react-icons/bi'
import { TfiEmail } from 'react-icons/tfi'
import { AiOutlineSchedule } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { FaHandHoldingHeart, FaMapMarkerAlt } from 'react-icons/fa'

export default function NavBar({ handleMenu }) {
  return (
    <nav
      className={` font-Roboto
      fixed z-20 flex min-h-screen w-[100vw] flex-col  items-center justify-center gap-10 bg-gray-300 pt-10 font-bold  dark:bg-gray-950  md:hidden `}
    >
      <ChangeTheme />
      <div className="flex  w-[80%] flex-col gap-5">
        <Link
          href="/quemsomos"
          className=" flex items-center gap-5 border-b-[1px] border-solid  border-blue-300 text-2xl hover:text-blue-300"
          onClick={handleMenu}
        >
          <BiHomeHeart className="text-blue-300" /> <p>Quem Somos</p>
        </Link>
        <Link
          href="/endereços"
          className="flex items-center gap-5 border-b-[1px] border-solid  border-blue-300 text-2xl hover:text-blue-300"
          onClick={handleMenu}
        >
          <FaMapMarkerAlt className="text-blue-300" /> <p>Endereços</p>
        </Link>
        <Link
          href="/liderancas"
          className="flex items-center gap-5 border-b-[1px] border-solid  border-blue-300 text-2xl hover:text-blue-300"
          onClick={handleMenu}
        >
          <BiHomeHeart className="text-blue-300" /> <p>Lideranças</p>
        </Link>

        <Link
          href="/doacao"
          className="flex items-center gap-5 border-b-[1px] border-solid  border-blue-300 text-2xl hover:text-blue-300 "
          onClick={handleMenu}
        >
          <FaHandHoldingHeart className="text-blue-300" /> <p>Doação</p>
        </Link>
        <Link
          href="/programacao"
          className="flex items-center gap-5 border-b-[1px] border-solid  border-blue-300 text-2xl hover:text-blue-300 "
          onClick={handleMenu}
        >
          <AiOutlineSchedule className="text-blue-300" /> <p>Programação</p>
        </Link>

        <Link
          href="/biblia"
          className="flex items-center gap-5 border-b-[1px] border-solid border-blue-300  text-2xl hover:text-blue-300 "
          onClick={handleMenu}
        >
          <BsBook className="text-blue-300" /> <p>Bíblia</p>
        </Link>

        <Link
          href="/noticias"
          className="flex items-center gap-5 border-b-[1px] border-solid border-blue-300  text-2xl hover:text-blue-300 "
          onClick={handleMenu}
        >
          <BiNews className="text-blue-300" /> <p>Notícias</p>
        </Link>

        <Link
          href="/contato"
          className="flex items-center gap-5 border-b-[1px] border-solid border-blue-300  text-2xl hover:text-blue-300"
          onClick={handleMenu}
        >
          <TfiEmail className="text-blue-300" /> <p>Contato</p>
        </Link>
      </div>
    </nav>
  )
}
