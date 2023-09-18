import { BsBank } from 'react-icons/bs'
import { MdOutlinePix } from 'react-icons/md'

export default function DoeItem({ title, pix, bank }) {
  return (
    <div className="mb-5 flex h-[300px] w-[45%]  max-w-[150px] flex-col items-center rounded-xl bg-bglight p-1 shadow-light transition delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-hover dark:bg-bgdark dark:shadow-dark dark:hover:shadow-hover md:mb-5 md:h-[300px] md:w-[200px] md:max-w-[200px]">
      <h1 className=" mb-10 text-xl font-bold text-primary">{title}</h1>

      <div className="flex w-full flex-col justify-center gap-10 p-2 ">
        <div className="">
          <BsBank className="text-xl text-primary" /> <p>{bank}</p>
        </div>

        <div className="">
          <MdOutlinePix className="text-xl text-primary" /> <p>{pix}</p>
        </div>
      </div>
    </div>
  )
}
