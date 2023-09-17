import Socials from './Socials'
import logo from '../../../public/img/logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex min-h-[100px] flex-col items-center justify-evenly border-t-2 border-solid border-y-primary bg-bglightsecundary  pb-5    dark:bg-bgdarksecundary ">
      <Link href="/" className="my-5">
        <Image src={logo} alt="logo do site" width={200} height={50} />
      </Link>
      <div className="mb-5 flex w-full flex-wrap justify-center gap-5 pt-5">
        <div className="w-[40%] max-w-[200px]  border-r-[1px] pr-5">
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
          className="mb-5 text-primary"
        >
          Desenvolvido por: Sandro Fernandes
        </Link>
      </div>
    </footer>
  )
}
