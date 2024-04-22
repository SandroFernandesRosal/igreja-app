import logo from '../../public/img/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { RxOpenInNewWindow } from 'react-icons/rx'
import Contatos from './Contatos'

export default function Footer() {
  return (
    <footer className="flex min-h-[100px] flex-col items-center justify-evenly border-t-2 border-solid border-y-secundary bg-gradient-to-r from-slate-950  to-blue-900 pb-5 font-bold">
      <Link href="/" className="my-5">
        <Image
          src={logo}
          alt="logo do site"
          width={200}
          height={50}
          className="h-[50px] w-[200px]"
        />
      </Link>
      <div className="mb-5 flex w-full flex-wrap justify-center gap-5  pt-5 text-white">
        <Contatos />
      </div>
      <div>
        <Link
          href="https://sandrofernandesdev.netlify.app/"
          target="blank"
          className="mb-5 flex w-full flex-wrap	 items-center justify-center gap-1 text-textlight dark:text-textdark"
        >
          <p className="text-white">Desenvolvido por:</p>{' '}
          <p className="text-white">Sandro Fernandes</p>
          <RxOpenInNewWindow className="text-xl text-white" />
        </Link>
      </div>
    </footer>
  )
}
