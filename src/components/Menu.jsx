'use client'

import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import NavBar from './NavBar'
import { useMenu } from '@/store/useStore'

export default function Menu() {
  const { menu, setMenu } = useMenu()

  const handleMenu = () => {
    menu === false ? setMenu(true) : setMenu(false)
  }
  return (
    <>
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
      {menu && <NavBar handleMenu={handleMenu} menu={menu} />}
    </>
  )
}
