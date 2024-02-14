'use client'
import { api } from '@/lib/api'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import SkeletonAgenda from './SkeletonAgenda'

import Socials from './Socials'
import AddContatos from './AddContatos'

export default function Contatos() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [openContato, setOpenContato] = useState(false)
  const token = Cookies.get('tokennn')

  useEffect(() => {
    api
      .get(`/contato`)
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])
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
          data && data.length < 1 ? (
            <p>Nenhum contato cadastrado.</p>
          ) : (
            data.map((item) => {
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
