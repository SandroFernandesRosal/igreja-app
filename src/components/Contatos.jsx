'use client'
import { api } from '@/lib/api'
import { useEffect, useState } from 'react'
import { useToken } from '@/hooks/useToken'
import SkeletonAgenda from './SkeletonAgenda'
import { useDataContato } from '@/store/useStore'

import Socials from './Socials'
import AddContatos from './AddContatos'

export default function Contatos() {
  const { dataContato, setDataContato } = useDataContato()
  const [loading, setLoading] = useState(true)
  const [openContato, setOpenContato] = useState(false)
  const token = useToken()

  useEffect(() => {
    api
      .get(`/contato`)
      .then((response) => {
        setDataContato(response.data)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [setDataContato])
  return (
    <div>
      {token && (
        <>
          {openContato === false && (
            <div
              className="mb-4 flex  cursor-pointer items-center justify-center gap-2 text-lg font-bold"
              onClick={() => setOpenContato(true)}
            >
              Adicionar contato
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
          <SkeletonAgenda />
        )}
      </div>
    </div>
  )
}
