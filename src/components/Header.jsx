'use client'
import { useEffect, useState } from 'react'
import { useActivePage } from '@/store/useStore'
import { useRouter } from 'next/navigation'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import NavBar from './NavBar'
import NavBarMd from './NavBarMd'

import Link from 'next/link'
import ChangeTheme from './ChangeTheme'
import Image from 'next/image'
import logo from '../../public/img/logo.png'
import { useToken } from '@/hooks/useToken'
import { useTokenIgreja } from '@/hooks/useTokenIgreja'

export default function Header({ children }) {
  const [menu, setMenu] = useState(false)
  const token = useToken()
  const tokenIgreja = useTokenIgreja()

  const router = useRouter()

  const { activePage, setActivePage } = useActivePage()

  useEffect(() => {
    setActivePage(router.pathname)
  }, [router.pathname, setActivePage])

  const handleClick = (href) => {
    setActivePage(href)
  }

  const handleMenu = () => {
    menu === false ? setMenu(true) : setMenu(false)
  }

  return (
    <>
      <header className="font-Roboto fixed z-50 flex flex-col">
        <div className="flex h-20 w-[100vw]  items-center justify-evenly overflow-hidden border-b-2 border-solid border-b-primary  bg-gradient-to-r from-slate-950 to-blue-900  backdrop-blur-md">
          <Link href="/" onClick={() => handleClick('/')}>
            <Image
              src={logo}
              alt="logo do site"
              width={200}
              height={50}
              className="h-[50px] w-[200px]"
            />
          </Link>

          <div className="hidden  md:flex">
            <ChangeTheme />
          </div>
          {token && <div className="hidden text-white md:flex">{children}</div>}
          {tokenIgreja && (
            <div className="hidden text-white md:flex">{children}</div>
          )}

          <div
            onClick={handleMenu}
            className={
              'flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full  border-[2px] border-primary hover:bg-blue-300  dark:hover:bg-gray-800 md:hidden'
            }
          >
            {menu === false ? (
              <GiHamburgerMenu className="text-[22px] text-primary" />
            ) : (
              <AiOutlineClose className="text-[25px]  text-primary" />
            )}
          </div>
        </div>
        <NavBarMd activePage={activePage} handleClick={handleClick} />
      </header>

      {menu && <NavBar handleMenu={handleMenu} menu={menu} user={children} />}
    </>
  )
}
