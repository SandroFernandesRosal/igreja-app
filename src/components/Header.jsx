'use client'

import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import NavBar from './NavBar'
import NavBarMd from './NavBarMd'
import { useState } from 'react'
import Link from 'next/link'
import ChangeTheme from './ChangeTheme'
import Image from 'next/image'
import logo from '../../public/img/logo.png'
import { useToken } from '@/hooks/useToken'

export default function Header({ children }) {
  const [menu, setMenu] = useState(false)
  const token = useToken()

  const handleMenu = () => {
    menu === false ? setMenu(true) : setMenu(false)
  }

  return (
    <>
      <header className="font-Roboto fixed z-50 flex flex-col">
        <div className="flex h-20 w-[100vw]  items-center justify-evenly overflow-hidden border-b-2 border-solid border-b-primary  bg-bglightsecundary       backdrop-blur-md    dark:bg-bgdarksecundary">
          <Link href="/">
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
          {token && <div className="hidden md:flex">{children}</div>}

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
        <NavBarMd />
      </header>

      {menu && <NavBar handleMenu={handleMenu} menu={menu} user={children} />}
    </>
  )
}
