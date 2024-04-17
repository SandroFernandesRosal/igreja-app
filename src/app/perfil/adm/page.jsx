import { getUser } from '@/lib/getUser'
import Image from 'next/image'

import RemoveUserAdm from '@/components/crud/RemoveAdm'
import Link from 'next/link'

export default async function PerfilAdm() {
  const { name, avatarUrl, login, id } = getUser()

  return (
    <div className="mb-2 mt-4 flex min-h-screen flex-col items-center gap-5 pt-24 md:mt-0 md:pt-[165px]">
      <div className="mb-4 flex min-h-screen w-[100vw] flex-col items-center rounded-[35px] bg-bglightsecundary  px-1  pb-4 shadow-light dark:bg-bgdarksecundary  dark:shadow-dark md:w-[90vw] md:rounded-xl">
        {name && avatarUrl && login && id ? (
          <>
            {' '}
            <div className="flex flex-col items-center  md:min-w-[35%]">
              <h1 className="m-0 text-lg font-bold text-primary dark:text-secundary ">
                Meu perfil
              </h1>
              <p className="mb-4 text-xl ">Verifique seus dados</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image
                src={avatarUrl}
                width={200}
                height={200}
                alt=""
                className="mt-1 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-slate-950 to-blue-900 p-[4px] shadow-light hover:from-blue-900 hover:to-slate-900 dark:shadow-dark"
              />
              <h1 className="text-lg font-bold">{name}</h1>
              <p>{login}</p>

              <div className="flex w-full justify-between gap-2">
                <Link
                  href={'/perfil/adm/editar'}
                  className="m-2 flex items-center rounded-lg bg-gradient-to-r from-slate-950 to-blue-900  px-2 text-lg font-bold  text-white shadow-light hover:from-blue-900   hover:to-slate-900 dark:shadow-dark"
                >
                  Editar perfil
                </Link>
                <RemoveUserAdm id={id} />
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="mb-4 text-lg font-bold text-secundary">
              Você não está logado como administrador
            </h1>
            <div className="flex w-full flex-wrap items-end justify-center gap-1 font-bold">
              Faça
              <Link
                href={'/login/adm'}
                className="cursor-pointer items-center  rounded-lg bg-gradient-to-r from-slate-950 to-blue-900 px-2  font-bold text-white  hover:from-blue-900 hover:to-slate-900"
              >
                login
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
