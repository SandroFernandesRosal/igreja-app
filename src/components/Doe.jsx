'use client'
import Cookies from 'js-cookie'
import DoeItem from './DoeItem'
import { api } from '@/lib/api'
import { useEffect, useState } from 'react'

import SkeletonAgenda from './SkeletonAgenda'

import AddDoacao from './AddDoacao'

export default function Doe() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [openDoacao, setOpenDoacao] = useState(false)
  const token = Cookies.get('tokennn')

  useEffect(() => {
    api
      .get('/doacao')
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="mb-5 flex w-[100vw] flex-col items-center rounded-[35px]  bg-bglightsecundary  shadow-light  dark:bg-bgdarksecundary dark:shadow-dark  md:w-[90vw] md:rounded-xl">
      <div className="mb-5 flex-col items-center text-center">
        <h1 className="m-0 text-lg font-bold text-primary ">Ajude a igreja</h1>
        <p className="px-[5px] text-xl ">
          Faça uma doação por pix ou transferência bancária
        </p>
      </div>

      {token && (
        <>
          {openDoacao === false && (
            <div
              className="mb-4 flex  cursor-pointer items-center justify-center gap-2 text-lg font-bold"
              onClick={() => setOpenDoacao(true)}
            >
              Adicionar doação
            </div>
          )}

          {openDoacao && (
            <div className="md:min-w-[35%]">
              {' '}
              <AddDoacao
                openDoacao={openDoacao}
                setOpenDoacao={setOpenDoacao}
              />
            </div>
          )}
        </>
      )}

      <div className="relative -top-[30px] mb-5 flex w-full flex-wrap justify-center gap-x-5 p-1 px-2 pt-10 md:gap-x-5">
        {!loading ? (
          data.length < 1 ? (
            <p>Nenhuma igreja cadastrada.</p>
          ) : (
            data &&
            data.map((item) => {
              return (
                <DoeItem
                  key={item.id}
                  id={item.id}
                  local={item.local}
                  banco={item.banco}
                  conta={item.conta}
                  agencia={item.agencia}
                  nomebanco={item.nomebanco}
                  pix={item.pix}
                  nomepix={item.nomepix}
                />
              )
            })
          )
        ) : (
          <SkeletonAgenda />
        )}
      </div>
    </div>
  )
}