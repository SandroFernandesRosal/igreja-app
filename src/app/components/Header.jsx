'use client'

import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import NavBar from './NavBar'
import NavBarMd from './NavBarMd'
import { useState } from 'react'
import Link from 'next/link'
import ChangeTheme from './ChangeTheme'
import Image from 'next/image'
import logo from '../../../public/img/logo.png'

export default function Header() {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    menu === false ? setMenu(true) : setMenu(false)
  }

  return (
    <>
      <header className="font-Roboto fixed z-50 flex flex-col">
        <div className="flex h-20 w-[100vw]  items-center justify-evenly overflow-hidden border-b-2 border-solid border-y-primary  bg-bglightsecundary       backdrop-blur-md    dark:bg-bgdarksecundary">
          <Link href="/">
            <Image src={logo} alt="logo do site" width={200} height={50} />
          </Link>

          <div className="hidden gap-10 md:flex">
            <ChangeTheme />
          </div>
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

      {menu && <NavBar handleMenu={handleMenu} menu={menu} />}
    </>
  )
}
