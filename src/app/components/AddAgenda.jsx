'use client'
import Cookies from 'js-cookie'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLocal } from '../store/useStore'
import { AiFillCloseCircle } from 'react-icons/ai'

export default function AddAgenda({ openNew, setOpenNew }) {
  const [day, setDay] = useState('')
  const [name, setName] = useState('')
  const [hour, setHour] = useState('')
  const { local } = useLocal()
  const router = useRouter()
  const token = Cookies.get('tokennn')

  async function handleSubmit(event) {
    event.preventDefault()
    const res = await fetch(`http://localhost:3333/agenda/${local}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        day: `${day}`,
        name: `${name}`,
        hour: `${hour}`,
      }),
    })

    const agenda = await res.json()

    if (res.ok && agenda) {
      router.push('/')
      return agenda
    }
    console.log(agenda)
    return null
  }

  return (
    <form
      className="flex  flex-col items-center justify-center"
      onSubmit={handleSubmit}
    >
      <h1 className="z-20 mb-2 flex items-center justify-center gap-3 text-lg font-bold text-primary">
        Adicionar evento{' '}
        {openNew === true && (
          <AiFillCloseCircle
            onClick={() => setOpenNew(false)}
            className="cursor-pointer text-2xl font-bold text-black dark:text-white"
          />
        )}
      </h1>
      <input
        className="mb-4 mt-2 w-[200px] cursor-pointer rounded-lg  border-none bg-bglightsecundary p-2 text-center font-bold placeholder-textlight shadow-light outline-none focus:ring-0 dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark"
        type="text"
        name="day"
        placeholder="Dia da semana"
        onChange={(e) => setDay(e.target.value)}
      />

      <input
        className="mb-4 w-[200px] cursor-pointer rounded-lg  border-none bg-bglightsecundary p-2 text-center font-bold placeholder-textlight shadow-light outline-none focus:ring-0 dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark"
        type="text"
        name="name"
        placeholder="Nome do evento"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="mb-4 w-[200px] cursor-pointer rounded-lg  border-none bg-bglightsecundary p-2 text-center font-bold placeholder-textlight shadow-light outline-none focus:ring-0 dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark"
        type="text"
        name="hour"
        placeholder="Horário do evento"
        onChange={(e) => setHour(e.target.value)}
      />

      <button
        type="submit"
        className="z-20  flex w-[200px] cursor-pointer items-center justify-center rounded-lg  bg-primary font-bold  text-black hover:bg-primary/50"
      >
        Enviar
      </button>
    </form>
  )
}
