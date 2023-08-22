import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

export default function Socials({ whatsapp, instagram, facebook }) {
  return (
    <div className="mb-[7px]  flex items-center justify-evenly gap-1 text-xl">
      <Link href={String(whatsapp)} target="blank">
        <FaWhatsapp className=" text-primary hover:text-primary/50" />
      </Link>

      <Link href={String(instagram)} target="blank">
        <FaInstagram className="text-primary hover:text-primary/50" />
      </Link>

      <Link href={String(facebook)} target="blank">
        <FaFacebook className="text-primary hover:text-primary/50" />
      </Link>
    </div>
  )
}
