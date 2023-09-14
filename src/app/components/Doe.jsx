import DoeItem from './DoeItem'
export default function Doe() {
  return (
    <div className="mb-5 flex w-[100vw] flex-col items-center rounded-[30px]  bg-white/20  shadow-lg  dark:bg-black/20 dark:shadow-dark  md:mb-5 md:w-[90vw] md:rounded-xl">
      <div className="mb-5 flex-col items-center text-center">
        <h1 className="m-0 text-lg font-bold text-primary ">Ajude a igreja</h1>
        <p className="px-[5px] text-xl ">
          Faça uma doação por pix ou transferência bancária
        </p>
      </div>
      <div className=" mb-5 flex w-full  flex-wrap justify-center gap-x-5 p-1 md:gap-x-5">
        <DoeItem
          title="Vila da Penha"
          pix="emailparapix@ gmail.com"
          bank="0000000-00"
        />

        <DoeItem
          title="Bairro 2"
          pix="emailparapix@ gmail.com"
          bank="0000000-00"
        />

        <DoeItem
          title="Bairro 3"
          pix="emailparapix@ gmail.com"
          bank="0000000-00"
        />
      </div>
    </div>
  )
}
