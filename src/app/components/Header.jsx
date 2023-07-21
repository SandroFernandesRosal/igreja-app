'use client'

import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import NavBar from './NavBar'
import NavBarMd from './NavBarMd'
import { useState } from 'react'
import Link from 'next/link'
import ChangeTheme from './ChangeTheme'

export default function Header() {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    menu === false ? setMenu(true) : setMenu(false)
  }

  return (
    <>
      <header className="font-Roboto fixed z-30 flex h-20 w-[100vw]  items-center justify-evenly overflow-hidden border-b-2 border-solid border-y-blue-300 bg-white   dark:bg-black">
        <Link href="/">
          <div>Alcançados Pela Graça</div>
        </Link>
        <NavBarMd handleMenu={handleMenu} />
        <div className="hidden gap-10 md:flex">
          <ChangeTheme />
        </div>
        <div
          onClick={handleMenu}
          className={
            'flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full  border-[2px] border-white hover:bg-blue-200  dark:hover:bg-gray-800 md:hidden'
          }
        >
          {menu === false ? (
            <GiHamburgerMenu className="text-[22px] text-white" />
          ) : (
            <AiOutlineClose className="text-[25px]  text-white" />
          )}
        </div>
      </header>

      <NavBarMd />

      {menu && <NavBar handleMenu={handleMenu} menu={menu} />}
    </>
  )
}
