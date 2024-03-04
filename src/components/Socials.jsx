import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useState } from 'react'
import EditContatos from './crud/EditContatos'
import RemoveContatos from './crud/RemoveContatos'

export default function Socials({
  numerowhatsapp,
  nomeinstagram,
  nomefacebook,
  title,
  id,
}) {
  const [openEdit, setOpenEdit] = useState(false)
  const token = Cookies.get('tokennn')
  return (
    <>
      <div className="mb-[7px]  flex flex-col  justify-center gap-2">
        <h1 className="text-lg">{title}</h1>
        <Link
          href={`https://api.whatsapp.com/send?phone=${numerowhatsapp}`}
          target="blank"
          className="flex items-center gap-2"
        >
          <FaWhatsapp className=" text-2xl text-primary hover:text-primary/50 " />
          <p className="text-textlight dark:text-textdark">{numerowhatsapp}</p>
        </Link>

        <Link
          href={`https://www.facebook.com/${nomeinstagram}`}
          target="blank"
          className="flex items-center gap-2"
        >
          <FaInstagram className="text-2xl text-primary hover:text-primary/50" />
          <p className="text-textlight dark:text-textdark">{nomeinstagram}</p>
        </Link>

        <Link
          href={`https://www.facebook.com/${nomefacebook}`}
          target="blank"
          className="flex items-center gap-2"
        >
          <FaFacebook className="text-2xl text-primary hover:text-primary/50" />
          <p className="text-textlight dark:text-textdark">{nomefacebook}</p>
        </Link>

        {token && (
          <div className="flex w-full justify-around md:gap-2">
            {openEdit === false && (
              <button
                className="rounded-lg bg-green-500  px-1 font-bold md:px-3 md:text-lg"
                onClick={() => setOpenEdit(true)}
              >
                Editar
              </button>
            )}
            <RemoveContatos id={id} />
          </div>
        )}
      </div>

      {openEdit && (
        <EditContatos
          localInitial={title}
          whatsappInitial={numerowhatsapp}
          facebookInitial={nomefacebook}
          instagranInitial={nomeinstagram}
          id={id}
          setOpenEdit={setOpenEdit}
        />
      )}
    </>
  )
}
