import Socials from './Socials'
import logo from '../../../public/img/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { RxOpenInNewWindow } from 'react-icons/rx'

export default function Footer() {
  return (
    <footer className="flex min-h-[100px] flex-col items-center justify-evenly border-t-2 border-solid border-y-primary bg-bglightsecundary pb-5  font-bold    dark:bg-bgdarksecundary ">
      <Link href="/" className="my-5">
        <Image src={logo} alt="logo do site" width={200} height={50} />
      </Link>
      <div className="mb-5 flex w-full flex-wrap justify-center gap-5 pt-5">
        <div className="w-[40%] max-w-[200px]  border-r-[1px] border-textlight pr-5 dark:border-textdark">
          <Socials
            className="cor"
            title="Vila da Penha"
            numerowhatsapp="21999999999"
            nomefacebook="alcancadospelagraca"
            nomeinstagram="@alcancadospelagraca"
          />
        </div>

        <div className="w-[40%] max-w-[200px] md:border-r-[1px] md:pr-5">
          <Socials
            className="cor"
            title="Vila da Penha"
            numerowhatsapp="21999999999"
            nomefacebook="alcancadospelagraca"
            nomeinstagram="@alcancadospelagraca"
          />
        </div>

        <div className="w-[40%] max-w-[200px]">
          <Socials
            className="cor"
            title="Vila da Penha"
            numerowhatsapp="21999999999"
            nomefacebook="alcancadospelagraca"
            nomeinstagram="@alcancadospelagraca"
          />
        </div>
      </div>
      <div>
        <Link
          href="https://sandrofernandesdev.netlify.app/"
          target="blank"
          className="mb-5 flex items-center gap-1 text-textlight dark:text-textdark"
        >
          <p>Desenvolvido por: Sandro Fernandes</p>
          <RxOpenInNewWindow className="text-xl text-primary" />
        </Link>
      </div>
    </footer>
  )
}
