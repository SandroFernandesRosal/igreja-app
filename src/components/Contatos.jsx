'use client'
import { api } from '@/lib/api'
import { useEffect, useState } from 'react'
import { useToken } from '@/hooks/useToken'

import { useDataContato } from '@/store/useStore'

import Socials from './Socials'
import AddContatos from './crud/AddContatos'
import SkeletonContato from './skeleton/SkeletonContato'

export default function Contatos() {
  const { dataContato, setDataContato } = useDataContato()
  const [loading, setLoading] = useState(true)
  const [openContato, setOpenContato] = useState(false)
  const token = useToken()

  useEffect(() => {
    const fetchData = () => {
      api
        .get(`/contato`)
        .then((response) => {
          setDataContato(response.data)
          setLoading(false)
        })
        .catch((err) => console.log(err))
    }

    fetchData()

    const intervalId = setInterval(fetchData, 600)

    return () => clearInterval(intervalId)
  }, [setDataContato])
  return (
    <div>
      {token && (
        <>
          {openContato === false && (
            <div className="flex w-full justify-center">
              {' '}
              <button
                className="mb-4 mt-1 flex cursor-pointer rounded-lg border-none bg-bglight p-2 text-black placeholder-black shadow-light outline-none hover:bg-gradient-to-r hover:from-blue-900 hover:to-slate-900 hover:text-white focus:ring-0 dark:bg-bgdark dark:text-white dark:placeholder-white dark:shadow-dark"
                onClick={() => setOpenContato(true)}
              >
                Adicionar contato
              </button>{' '}
            </div>
          )}

          {openContato && (
            <div className="md:min-w-[35%]">
              {' '}
              <AddContatos
                openContato={openContato}
                setOpenContato={setOpenContato}
              />
            </div>
          )}
        </>
      )}

      <div className="m-2 flex w-full flex-wrap justify-center gap-5">
        {!loading ? (
          dataContato && dataContato.length < 1 ? (
            <p>Nenhum contato cadastrado.</p>
          ) : (
            dataContato.map((item) => {
              return (
                <Socials
                  className="cor"
                  key={item.id}
                  id={item.id}
                  title={item.local}
                  numerowhatsapp={item.whatsapp}
                  nomefacebook={item.facebook}
                  nomeinstagram={item.instagran}
                />
              )
            })
          )
        ) : (
          <SkeletonContato />
        )}
      </div>
    </div>
  )
}
