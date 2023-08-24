import { BsBank, BsQrCode } from 'react-icons/bs'
import { MdOutlinePix } from 'react-icons/md'
import Socials from './Socials'

export default function DoeItem({ title, pix, bank }) {
  return (
    <div className=" mb-5 flex min-h-[350px] w-[250px] flex-col items-center justify-between  rounded-xl bg-white p-1 shadow-xl dark:bg-black dark:shadow-dark">
      <h1 className=" text-xl font-bold text-primary">{title}</h1>

      <di className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <BsBank className="text-2xl text-primary" /> <p>{bank}</p>
        </div>

        <div className="flex items-center gap-2">
          <MdOutlinePix className="text-2xl text-primary" /> <p>{pix}</p>
        </div>

        <BsQrCode className=" flex self-center text-9xl text-primary" />
      </di>
      <Socials
        whatsapp="https://api.whatsapp.com/send?phone="
        instagram="https://www.instagram.com/"
        facebook="https://www.facebook.com/"
      />
    </div>
  )
}
