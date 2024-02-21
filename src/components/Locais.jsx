'use client'
import LocaisItem from './LocaisItem'
import { api } from '@/lib/api'
import { useEffect, useState } from 'react'
import { useToken } from '@/hooks/useToken'

import AddEndereco from './crud/AddEndereco'
import SkeletonEndereco from './skeleton/SkeletonEndereco'

export default function Locais() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [openEndereco, setOpenEndereco] = useState(false)
  const token = useToken()

  useEffect(() => {
    api
      .get(`/endereco`)
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <section className="mb-5 flex w-[100vw] flex-col items-center rounded-[35px]  bg-bglightsecundary  shadow-light dark:bg-bgdarksecundary  dark:shadow-dark md:w-[90vw] md:rounded-xl">
      <h1 className="m-0 mt-1 text-lg font-bold text-primary">Endereços</h1>
      <p className="mb-5 text-xl">Todos os nossos endereços</p>

      {token && (
        <>
          {openEndereco === false && (
            <div
              className="mb-4 flex cursor-pointer rounded-lg border-none bg-bglight p-2 placeholder-black shadow-light outline-none hover:shadow-hover focus:ring-0 dark:bg-bgdark dark:placeholder-white dark:shadow-dark dark:hover:shadow-hover"
              onClick={() => setOpenEndereco(true)}
            >
              Adicionar endereço
            </div>
          )}

          {openEndereco && (
            <div className="md:min-w-[35%]">
              {' '}
              <AddEndereco
                openEndereco={openEndereco}
                setOpenEndereco={setOpenEndereco}
              />
            </div>
          )}
        </>
      )}

      <div className="relative -top-[30px] mb-5 flex w-full flex-wrap justify-center gap-x-5 p-1  px-2 pt-10 md:gap-x-5">
        {!loading ? (
          data.length < 1 ? (
            <p>Nenhum endereço cadastrado.</p>
          ) : (
            data &&
            data.map((item) => {
              return (
                <LocaisItem
                  id={item.id}
                  key={item.id}
                  local={item.local}
                  rua={item.rua}
                  cep={item.cep}
                />
              )
            })
          )
        ) : (
          <SkeletonEndereco />
        )}
      </div>
    </section>
  )
}
