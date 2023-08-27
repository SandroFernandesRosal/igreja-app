import { BsBank, BsQrCode } from 'react-icons/bs'
import { MdOutlinePix } from 'react-icons/md'
import Socials from './Socials'

export default function DoeItem({ title, pix, bank }) {
  return (
    <div className="mb-3 flex  min-h-[350px] w-[45%] max-w-[150px] flex-col items-center justify-between rounded-xl  bg-white p-1 shadow-lg dark:bg-black dark:shadow-dark md:mb-5 md:w-[200px]  md:max-w-[200px]">
      <h1 className=" text-xl font-bold text-primary">{title}</h1>

      <di className="flex w-full flex-col justify-center gap-2 p-2 ">
        <div className="">
          <BsBank className="text-lg text-primary" /> <p>{bank}</p>
        </div>

        <div className="">
          <MdOutlinePix className="text-lg text-primary" /> <p>{pix}</p>
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
