import Link from 'next/link'
import ChangeTheme from './ChangeTheme'
import { BiNews, BiHomeHeart } from 'react-icons/bi'
import { TfiEmail } from 'react-icons/tfi'
import { AiOutlineSchedule } from 'react-icons/ai'
import { BsBook, BsFillPersonLinesFill } from 'react-icons/bs'
import { FaHandHoldingHeart, FaMapMarkerAlt } from 'react-icons/fa'
import { useToken } from '@/hooks/useToken'
import { useTokenIgreja } from '@/hooks/useTokenIgreja'

export default function NavBar({ handleMenu, user }) {
  const token = useToken()
  const tokenIgreja = useTokenIgreja()
  return (
    <nav
      className={` font-Roboto
      fixed z-40 flex min-h-screen w-[100vw] flex-col  items-center justify-center gap-10    bg-white/90   font-bold backdrop-blur-md dark:bg-black/90 md:hidden `}
    >
      <div className="flex w-full items-center justify-around">
        {token || tokenIgreja ? <div>{user}</div> : <ChangeTheme />}
      </div>

      <div className="flex  w-[80%] flex-col gap-5">
        <Link
          href="/quemsomos"
          className=" flex items-center gap-5 border-b-[1px] border-solid  border-primary text-2xl hover:text-primary"
          onClick={handleMenu}
        >
          <BiHomeHeart className="text-primary" /> <p>Quem Somos</p>
        </Link>
        <Link
          href="/enderecos"
          className="flex items-center gap-5 border-b-[1px] border-solid  border-primary text-2xl hover:text-primary"
          onClick={handleMenu}
        >
          <FaMapMarkerAlt className="text-primary" /> <p>Endereços</p>
        </Link>
        <Link
          href="/ministerio"
          className="flex items-center gap-5 border-b-[1px] border-solid  border-primary text-2xl hover:text-primary"
          onClick={handleMenu}
        >
          <BsFillPersonLinesFill className="text-primary" /> <p>Ministério</p>
        </Link>

        <Link
          href="/doacao"
          className="flex items-center gap-5 border-b-[1px] border-solid  border-primary text-2xl hover:text-primary "
          onClick={handleMenu}
        >
          <FaHandHoldingHeart className="text-primary" /> <p>Doação</p>
        </Link>
        <Link
          href="/agenda"
          className="flex items-center gap-5 border-b-[1px] border-solid  border-primary text-2xl hover:text-primary "
          onClick={handleMenu}
        >
          <AiOutlineSchedule className="text-primary" /> <p>Agenda</p>
        </Link>

        <Link
          href="/biblia"
          className="flex items-center gap-5 border-b-[1px] border-solid border-primary  text-2xl hover:text-primary"
          onClick={handleMenu}
        >
          <BsBook className="text-primary" /> <p>Bíblia</p>
        </Link>

        <Link
          href="/noticias"
          className="flex items-center gap-5 border-b-[1px] border-solid border-primary  text-2xl hover:text-primary"
          onClick={handleMenu}
        >
          <BiNews className="text-primary" /> <p>Notícias</p>
        </Link>

        <Link
          href="/contato"
          className="flex items-center gap-5 border-b-[1px] border-solid border-primary text-2xl hover:text-primary"
          onClick={handleMenu}
        >
          <TfiEmail className="text-primary" /> <p>Contato</p>
        </Link>
      </div>
    </nav>
  )
}
