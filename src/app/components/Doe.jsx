import DoeItem from './DoeItem'
export default function Doe() {
  return (
    <div className="mb-5 mt-5 flex w-[90vw] flex-col items-center  rounded-xl bg-white/20 pb-5 shadow-lg dark:bg-black/20 dark:shadow-dark md:pb-5">
      <div className="mb-5 flex-col items-center text-center">
        <h1 className="m-0 text-lg font-bold text-primary ">Ajude a igreja</h1>
        <p className="text-xl ">
          Faça uma doação por pix ou transferência bancária
        </p>
      </div>
      <DoeItem
        title="Vila da Penha"
        pix="emailparapix@ gmail.com"
        bank="0000000-00"
      />
    </div>
  )
}
