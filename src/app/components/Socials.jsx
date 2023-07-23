import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

export default function Socials() {
  return (
    <div className="mb-[7px]  flex items-center justify-evenly gap-1 text-3xl">
      <Link href="https://api.whatsapp.com/send?phone=" target="blank">
        <FaWhatsapp className=" text-primary hover:text-blue-400" />
      </Link>

      <Link href="https://www.linkedin.com/" target="blank">
        <FaLinkedin className="text-primary hover:text-blue-400" />
      </Link>

      <Link href="https://www.facebook.com/" target="blank">
        <FaFacebook className="text-primary hover:text-blue-400" />
      </Link>
    </div>
  )
}
