'use client'
import Cookies from 'js-cookie'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLocal } from '../../store/useStore'
import { AiFillCloseCircle } from 'react-icons/ai'
import { api } from '@/lib/api'

export default function EditAgenda({ setOpenEdit, id, title, hora, dia }) {
  const [day, setDay] = useState('')
  const [name, setName] = useState('')
  const [hour, setHour] = useState('')
  const { local } = useLocal()
  const router = useRouter()
  const token = Cookies.get('tokennn')

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const response = await api.put(
        `/agenda/${local}/${id}`,
        {
          day: day || dia,
          name: name || title,
          hour: hour || hora,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )

      const agenda = response.data

      if (response.status === 200 && agenda) {
        setOpenEdit(false)
        router.push('/')
        window.location.href = '/'
        return agenda
      }

      console.log(agenda)
    } catch (error) {
      console.error('Erro ao editar evento:', error)
      // Tratar erros de requisição aqui
    }

    return null
  }

  return (
    <form
      className="fixed left-0 top-0 z-30 flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-black/50 backdrop-blur-lg md:mt-5"
      onSubmit={handleSubmit}
    >
      <h1 className="z-20 mb-2 flex items-center justify-center gap-3 text-lg font-bold text-primary">
        Editar evento{' '}
        <AiFillCloseCircle
          onClick={() => setOpenEdit(false)}
          className="cursor-pointer text-2xl font-bold text-black dark:text-white"
        />
      </h1>
      <input
        className="mb-4 mt-2  w-[80%] max-w-[600px] cursor-pointer rounded-lg  border-none bg-bglightsecundary p-2 text-center font-bold placeholder-textlight shadow-light outline-none focus:ring-0 dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark"
        type="text"
        name="day"
        required={true}
        placeholder="Digite o dia"
        defaultValue={dia}
        onChange={(e) => setDay(e.target.value)}
      />

      <input
        className="mb-4  w-[80%] max-w-[600px] cursor-pointer rounded-lg  border-none bg-bglightsecundary p-2 text-center font-bold placeholder-textlight shadow-light outline-none focus:ring-0 dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark"
        type="text"
        name="name"
        required={true}
        placeholder="Digite nome do evento"
        defaultValue={title}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="mb-4  w-[80%] max-w-[600px] cursor-pointer rounded-lg  border-none bg-bglightsecundary p-2 text-center font-bold placeholder-textlight shadow-light outline-none focus:ring-0 dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark"
        type="text"
        name="hour"
        required={true}
        placeholder="Digite o horário"
        defaultValue={hora}
        onChange={(e) => setHour(e.target.value)}
      />

      <button
        type="submit"
        className="z-20  flex w-[200px] cursor-pointer items-center justify-center rounded-lg  bg-gradient-to-r from-slate-950 to-blue-900  font-bold text-white  hover:from-blue-900 hover:to-slate-900"
      >
        Enviar
      </button>
    </form>
  )
}
