import Link from 'next/link'

import { BiNews, BiHomeHeart } from 'react-icons/bi'
import { TfiEmail } from 'react-icons/tfi'
import { AiOutlineSchedule } from 'react-icons/ai'
import { BsBook, BsFillPersonLinesFill } from 'react-icons/bs'
import { FaHandHoldingHeart, FaMapMarkerAlt } from 'react-icons/fa'
import { VscHeartFilled } from 'react-icons/vsc'

export default function NavBarMd({ activePage, handleClick }) {
  return (
    <nav
      className={`font-Roboto hidden w-[100vw] items-center  justify-center gap-3 overflow-x-auto bg-bglight/30 p-3 pb-[5px] backdrop-blur-md dark:bg-bgdark/30 md:flex lg:gap-4`}
    >
      <Link href="/">
        <div
          className={`flex flex-col items-center justify-center hover:text-primary lg:text-lg ${
            activePage === '/' ? 'border-b-2 border-primary  text-primary ' : ''
          }`}
          onClick={() => handleClick('/')}
        >
          <BiHomeHeart className="text-primary" /> <p>Home</p>
        </div>
      </Link>
      <Link href="/quemsomos">
        <div
          className={`flex flex-col items-center justify-center hover:text-primary lg:text-lg ${
            activePage === '/quemsomos'
              ? 'border-b-2 border-primary  text-primary'
              : ''
          }`}
          onClick={() => handleClick('/quemsomos')}
        >
          <BiHomeHeart className="text-primary" /> <p>Quem Somos</p>
        </div>
      </Link>
      <Link href="/enderecos">
        <div
          className={`flex flex-col items-center justify-center hover:text-primary lg:text-lg ${
            activePage === '/enderecos'
              ? 'border-b-2 border-primary  text-primary'
              : ''
          }`}
          onClick={() => handleClick('/enderecos')}
        >
          <FaMapMarkerAlt className="text-primary" /> <p>Endereços</p>
        </div>
      </Link>
      <Link href="/ministerio">
        <div
          className={`flex flex-col items-center justify-center hover:text-primary lg:text-lg ${
            activePage === '/ministerio'
              ? 'border-b-2 border-primary  text-primary'
              : ''
          }`}
          onClick={() => handleClick('/ministerio')}
        >
          <BsFillPersonLinesFill className="border-b-2 border-primary  text-primary" />{' '}
          <p>Ministério</p>
        </div>
      </Link>
      <Link href="/doacao">
        <div
          className={`flex flex-col items-center justify-center hover:text-primary lg:text-lg ${
            activePage === '/doacao'
              ? 'border-b-2 border-primary  text-primary'
              : ''
          }`}
          onClick={() => handleClick('/doacao')}
        >
          <FaHandHoldingHeart className="border-b-2 border-primary  text-primary" />{' '}
          <p>Doação</p>
        </div>
      </Link>
      <Link href="/agenda">
        <div
          className={`flex flex-col items-center justify-center hover:text-primary lg:text-lg ${
            activePage === '/agenda'
              ? 'border-b-2 border-primary  text-primary'
              : ''
          }`}
          onClick={() => handleClick('/agenda')}
        >
          <AiOutlineSchedule className="border-b-2 border-primary  text-primary" />{' '}
          <p>Agenda</p>
        </div>
      </Link>
      <Link href="/biblia">
        <div
          className={`flex flex-col items-center justify-center hover:text-primary lg:text-lg ${
            activePage === '/biblia'
              ? 'border-b-2 border-primary  text-primary'
              : ''
          }`}
          onClick={() => handleClick('/biblia')}
        >
          <BsBook className="text-primary" /> <p>Bíblia</p>
        </div>
      </Link>
      <Link href="/noticias">
        <div
          className={`flex flex-col items-center justify-center hover:text-primary lg:text-lg ${
            activePage === '/noticias'
              ? 'border-b-2 border-primary  text-primary'
              : ''
          }`}
          onClick={() => handleClick('/noticias')}
        >
          <BiNews className="text-primary" /> <p>Notícias</p>
        </div>
      </Link>
      <Link href="/testemunhos">
        <div
          className={`flex flex-col items-center justify-center hover:text-primary lg:text-lg ${
            activePage === '/testemunhos'
              ? 'border-b-2 border-primary  text-primary'
              : ''
          }`}
          onClick={() => handleClick('/testemunhos')}
        >
          <VscHeartFilled className="text-primary" /> <p>Testemunhos</p>
        </div>
      </Link>
      <Link href="/contato">
        <div
          className={`flex flex-col items-center justify-center hover:text-primary lg:text-lg ${
            activePage === '/contato'
              ? 'border-b-2 border-primary  text-primary'
              : ''
          }`}
          onClick={() => handleClick('/contato')}
        >
          <TfiEmail className="text-primary" /> <p>Contato</p>
        </div>
      </Link>
    </nav>
  )
}
