import { BsBank } from 'react-icons/bs'
import { MdOutlinePix } from 'react-icons/md'
import Socials from './Socials'

export default function DoeItem({ title, pix, bank }) {
  return (
    <div className="mb-5 flex  h-[300px] w-[45%] max-w-[150px] flex-col items-center justify-between rounded-xl  bg-white p-1 shadow-light hover:shadow-primary dark:bg-black dark:shadow-dark dark:hover:shadow-primary md:mb-5 md:h-[300px] md:w-[200px] md:max-w-[200px]">
      <h1 className=" text-xl font-bold text-primary">{title}</h1>

      <div className="flex w-full flex-col justify-center gap-2 p-2 ">
        <div className="">
          <BsBank className="text-xl text-primary" /> <p>{bank}</p>
        </div>

        <div className="">
          <MdOutlinePix className="text-xl text-primary" /> <p>{pix}</p>
        </div>
      </div>
      <Socials
        whatsapp="https://api.whatsapp.com/send?phone="
        instagram="https://www.instagram.com/"
        facebook="https://www.facebook.com/"
      />
    </div>
  )
}
