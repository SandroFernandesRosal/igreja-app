export default function LideresItem({ nome, titulo, local }) {
  return (
    <div className="mb-5 flex h-[250px] w-[45%] max-w-[150px] flex-col items-center justify-evenly rounded-lg bg-white shadow-xl hover:shadow-lg hover:shadow-primary dark:bg-black dark:shadow-dark dark:hover:shadow-primary md:h-[300px] md:w-[200px] md:max-w-[200px]">
      <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border-2  border-primary">
        FOTO
      </div>

      <div className="text-center text-primary">
        <p>{nome}</p>
        <p>{titulo}</p>
        <p>{local}</p>
      </div>
    </div>
  )
}
