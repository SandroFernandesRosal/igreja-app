import Link from 'next/link'

import { BiNews, BiHomeHeart } from 'react-icons/bi'
import { TfiEmail } from 'react-icons/tfi'
import { AiOutlineSchedule } from 'react-icons/ai'
import { BsBook, BsFillPersonLinesFill } from 'react-icons/bs'
import { FaHandHoldingHeart, FaMapMarkerAlt } from 'react-icons/fa'

export default function NavBarMd({ activePage, handleClick }) {
  return (
    <nav
      className={`font-Roboto hidden w-full items-center justify-center gap-5 bg-bglight/30 p-3 pb-[5px] backdrop-blur-md dark:bg-bgdark/30 md:flex`}
    >
      <Link href="/">
        <div
          className={`flex flex-col items-center justify-center text-lg hover:text-primary ${
            activePage === '/' ? 'text-primary' : ''
          }`}
          onClick={() => handleClick('/')}
        >
          <BiHomeHeart className="text-primary" /> <p>Home</p>
        </div>
      </Link>

      <Link href="/quemsomos">
        <div
          className={`flex flex-col items-center justify-center text-lg hover:text-primary ${
            activePage === '/quemsomos' ? 'text-primary' : ''
          }`}
          onClick={() => handleClick('/quemsomos')}
        >
          <BiHomeHeart className="text-primary" /> <p>Quem Somos</p>
        </div>
      </Link>
      <Link href="/enderecos">
        <div
          className={`flex flex-col items-center justify-center text-lg hover:text-primary ${
            activePage === '/enderecos' ? 'text-primary' : ''
          }`}
          onClick={() => handleClick('/enderecos')}
        >
          <FaMapMarkerAlt className="text-primary" /> <p>Endereços</p>
        </div>
      </Link>
      <Link href="/ministerio">
        <div
          className={`flex flex-col items-center justify-center text-lg hover:text-primary ${
            activePage === '/ministerio' ? 'text-primary' : ''
          }`}
          onClick={() => handleClick('/ministerio')}
        >
          <BsFillPersonLinesFill className="text-primary" /> <p>Ministério</p>
        </div>
      </Link>
      <Link href="/doacao">
        <div
          className={`flex flex-col items-center justify-center text-lg hover:text-primary ${
            activePage === '/doacao' ? 'text-primary' : ''
          }`}
          onClick={() => handleClick('/doacao')}
        >
          <FaHandHoldingHeart className="text-primary" /> <p>Doação</p>
        </div>
      </Link>
      <Link href="/agenda">
        <div
          className={`flex flex-col items-center justify-center text-lg hover:text-primary ${
            activePage === '/agenda' ? 'text-primary' : ''
          }`}
          onClick={() => handleClick('/agenda')}
        >
          <AiOutlineSchedule className="text-primary" /> <p>Agenda</p>
        </div>
      </Link>
      <Link href="/biblia">
        <div
          className={`flex flex-col items-center justify-center text-lg hover:text-primary ${
            activePage === '/biblia' ? 'text-primary' : ''
          }`}
          onClick={() => handleClick('/biblia')}
        >
          <BsBook className="text-primary" /> <p>Bíblia</p>
        </div>
      </Link>
      <Link href="/noticias">
        <div
          className={`flex flex-col items-center justify-center text-lg hover:text-primary ${
            activePage === '/noticias' ? 'text-primary' : ''
          }`}
          onClick={() => handleClick('/noticias')}
        >
          <BiNews className="text-primary" /> <p>Notícias</p>
        </div>
      </Link>
      <Link href="/contato">
        <div
          className={`flex flex-col items-center justify-center text-lg hover:text-primary ${
            activePage === '/contato' ? 'text-primary' : ''
          }`}
          onClick={() => handleClick('/contato')}
        >
          <TfiEmail className="text-primary" /> <p>Contato</p>
        </div>
      </Link>
    </nav>
  )
}
