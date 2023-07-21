'use client'
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
      top-[90px] hidden  w-full items-center  justify-center gap-5 border-b-[1px]  border-solid  border-white pb-[5px] md:absolute  md:flex`}
    >
      <Link
        href="/quemsomos"
        className=" flex flex-col items-center justify-center text-lg hover:text-blue-300"
        onClick={handleMenu}
      >
        <BiHomeHeart className="text-blue-300" /> <p>Quem Somos</p>
      </Link>
      <Link
        href="/endereços"
        className="flex flex-col items-center justify-center text-lg hover:text-blue-300"
        onClick={handleMenu}
      >
        <FaMapMarkerAlt className="text-blue-300" /> <p>Endereços</p>
      </Link>
      <Link
        href="/liderancas"
        className="flex flex-col items-center justify-center text-lg hover:text-blue-300"
        onClick={handleMenu}
      >
        <BiHomeHeart className="text-blue-300" /> <p>Lideranças</p>
      </Link>

      <Link
        href="/doacao"
        className="flex  flex-col  items-center justify-center text-lg hover:text-blue-300"
        onClick={handleMenu}
      >
        <FaHandHoldingHeart className="text-blue-300" /> <p>Doação</p>
      </Link>

      <Link
        href="/programacao"
        className="flex  flex-col  items-center justify-center text-lg hover:text-blue-300"
        onClick={handleMenu}
      >
        <AiOutlineSchedule className="text-blue-300" /> <p>Programação</p>
      </Link>

      <Link
        href="/biblia"
        className="flex flex-col  items-center justify-center text-lg hover:text-blue-300"
        onClick={handleMenu}
      >
        <BsBook className="text-blue-300" /> <p>Bíblia</p>
      </Link>

      <Link
        href="/noticias"
        className="flex flex-col  items-center justify-center text-lg hover:text-blue-300"
        onClick={handleMenu}
      >
        <BiNews className="text-blue-300" /> <p>Notícias</p>
      </Link>

      <Link
        href="/contato"
        className="flex  flex-col  items-center justify-center text-lg hover:text-blue-300"
        onClick={handleMenu}
      >
        <TfiEmail className="text-blue-300" /> <p>Contato</p>
      </Link>
    </nav>
  )
}
