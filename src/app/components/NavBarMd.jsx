'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function NavBarMd({ handleMenu }) {
  const [igreja, setIgreja] = useState(false)

  const handleIgreja = () => {
    igreja === false ? setIgreja(true) : setIgreja(false)
  }
  return (
    <nav
      className={` font-Roboto
       z-20  hidden  items-center justify-center gap-10  md:flex `}
    >
      <div className="flex  gap-5">
        <div>
          <div
            className="flex items-center gap-5  text-lg hover:text-blue-300"
            onClick={handleIgreja}
          >
            Igreja
          </div>

          {igreja && (
            <div className="absolute z-30 flex h-[200px] flex-col">
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
          )}
        </div>
        <Link
          href="/programacao"
          className="flex items-center text-lg hover:text-blue-300 "
          onClick={handleMenu}
        >
          Programação
        </Link>

        <Link
          href="/biblia"
          className="flex items-center text-lg hover:text-blue-300 "
          onClick={handleMenu}
        >
          Bíblia
        </Link>

        <Link
          href="/noticias"
          className="flex items-center text-lg hover:text-blue-300 "
          onClick={handleMenu}
        >
          Notícias
        </Link>

        <Link
          href="/contato"
          className="flex items-center text-lg hover:text-blue-300"
          onClick={handleMenu}
        >
          Contato
        </Link>
      </div>
    </nav>
  )
}
