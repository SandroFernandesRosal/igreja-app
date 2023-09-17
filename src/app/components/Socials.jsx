import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

export default function Socials({
  whatsapp,
  instagram,
  facebook,
  numerowhatsapp,
  nomeinstagram,
  nomefacebook,
  title,
}) {
  return (
    <div className="mb-[7px]  flex flex-col  justify-center gap-2">
      <h1 className="text-lg">{title}</h1>
      <Link
        href={String(whatsapp)}
        target="blank"
        className="flex items-center gap-2"
      >
        <FaWhatsapp className=" text-2xl text-primary hover:text-primary/50 " />
        <p>{numerowhatsapp}</p>
      </Link>

      <Link
        href={String(instagram)}
        target="blank"
        className="flex items-center gap-2"
      >
        <FaInstagram className="text-2xl text-primary hover:text-primary/50" />
        <p>{nomeinstagram}</p>
      </Link>

      <Link
        href={String(facebook)}
        target="blank"
        className="flex items-center gap-2"
      >
        <FaFacebook className="text-2xl text-primary hover:text-primary/50" />
        <p>{nomefacebook}</p>
      </Link>
    </div>
  )
}
