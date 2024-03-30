import { getUserIgreja } from '@/lib/getUserIgreja'
import Image from 'next/image'

import RemoveUserIgreja from '@/components/crud/RemoveUserIgreja'
import Link from 'next/link'

export default async function Perfil() {
  const { name, avatarUrl, login, id } = getUserIgreja()
  return (
    <div className="mb-2 mt-4 flex min-h-screen flex-col items-center gap-5 pt-24 md:mt-0 md:pt-[165px]">
      <div className="mb-4 flex min-h-screen w-[100vw] flex-col items-center rounded-[35px] bg-bglightsecundary  px-1  pb-4 shadow-light dark:bg-bgdarksecundary  dark:shadow-dark md:w-[90vw] md:rounded-xl">
        <div className="flex flex-col items-center  md:min-w-[35%]">
          <h1 className="m-0 text-lg font-bold text-primary ">Meu perfil</h1>
          <p className="mb-4 text-xl ">Verifique seus dados</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image src={avatarUrl} width={200} height={200} alt="" />
          <h1 className="text-lg font-bold">{name}</h1>
          <p>{login}</p>

          <div className="flex w-full justify-between gap-2">
            <Link
              href={'/perfil/editar'}
              className="flex items-center rounded-lg bg-green-500 px-2 text-lg font-bold hover:bg-green-700"
            >
              Editar perfil
            </Link>
            <RemoveUserIgreja id={id} />
          </div>
        </div>
      </div>
    </div>
  )
}
