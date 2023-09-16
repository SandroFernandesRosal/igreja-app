import Socials from './Socials'
import logo from '../../../public/img/logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex h-[100px] flex-col items-center justify-evenly border-t-2 border-solid border-y-primary  bg-white/50    dark:bg-bgdarksecundary ">
      <Link href="/">
        <Image src={logo} alt="logo do site" width={200} height={50} />
      </Link>

      <Socials className="cor" />
    </footer>
  )
}
