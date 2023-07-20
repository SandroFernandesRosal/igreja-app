import Link from 'next/link'
import ChangeTheme from './ChangeTheme'
import { BiNews, BiHomeHeart } from 'react-icons/bi'
import { TfiEmail } from 'react-icons/tfi'
import { AiOutlineSchedule } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'

export default function NavBar({ handleMenu }) {
  return (
    <nav
      className={` font-Roboto
      fixed z-20  flex min-h-screen w-[100vw]  flex-col items-center justify-center gap-10 bg-gray-300 font-bold  dark:bg-gray-950  md:hidden `}
    >
      <ChangeTheme />
      <div className="flex  w-[80%] flex-col gap-5">
        <div>
          <div className="flex items-center gap-5 border-b-[1px] border-solid  border-blue-300 text-2xl hover:text-blue-300">
            <BiHomeHeart /> <p>Igreja</p>
          </div>
          <div className="flex flex-col">
            <Link
              href="/quemsomos"
              className=" text-lg hover:text-blue-300  "
              onClick={handleMenu}
            >
              Quem Somos
            </Link>
            <Link
              href="/ondeestamos"
              className="text-lg hover:text-blue-300"
              onClick={handleMenu}
            >
              Onde Estamos
            </Link>
            <Link
              href="/liderancas"
              className="text-lg hover:text-blue-300"
              onClick={handleMenu}
            >
              Lideranças
            </Link>
          </div>
        </div>
        <Link
          href="/programacao"
          className="flex items-center gap-5 border-b-[1px] border-solid  border-blue-300 text-2xl hover:text-blue-300 "
          onClick={handleMenu}
        >
          <AiOutlineSchedule /> <p>Programação</p>
        </Link>

        <Link
          href="/biblia"
          className="flex items-center gap-5 border-b-[1px] border-solid border-blue-300  text-2xl hover:text-blue-300 "
          onClick={handleMenu}
        >
          <BsBook /> <p>Bíblia</p>
        </Link>

        <Link
          href="/noticias"
          className="flex items-center gap-5 border-b-[1px] border-solid border-blue-300  text-2xl hover:text-blue-300 "
          onClick={handleMenu}
        >
          <BiNews /> <p>Notícias</p>
        </Link>

        <Link
          href="/contato"
          className="flex items-center gap-5 border-b-[1px] border-solid border-blue-300  text-2xl hover:text-blue-300"
          onClick={handleMenu}
        >
          <TfiEmail /> <p>Contato</p>
        </Link>
      </div>
    </nav>
  )
}
