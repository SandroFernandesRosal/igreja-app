import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

export default function Socials() {
  return (
    <div className="mb-[7px]  flex items-center justify-evenly gap-1 text-3xl">
      <Link href="https://api.whatsapp.com/send?phone=" target="blank">
        <FaWhatsapp className=" text-primary hover:text-primary/50" />
      </Link>

      <Link href="https://www.instagram.com/" target="blank">
        <FaInstagram className="text-primary hover:text-primary/50" />
      </Link>

      <Link href="https://www.facebook.com/" target="blank">
        <FaFacebook className="text-primary hover:text-primary/50" />
      </Link>
    </div>
  )
}
