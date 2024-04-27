'use client'
import { useState, useRef } from 'react'
import { BiHappyAlt } from 'react-icons/bi'
import emailjs from '@emailjs/browser'

import Contatos from '../../components/Contatos'

export default function Contato() {
  const form = useRef()

  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [assuntoInput, setAssuntoInput] = useState('')
  const [textInput, setTextInput] = useState('')
  const [alert, setAlert] = useState(false)

  const timeoutRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmailapg',
        'template_4irfdp2',
        form.current,
        '83UVaTlKXOdZElYi_',
      )
      .then(
        () => {
          alert === false ? setAlert(true) : setAlert(false)

          clearTimeout(timeoutRef.current)
          timeoutRef.current = setTimeout(() => {
            setAlert(false)
          }, 2000)
        },
        (error) => {
          alert(error.mensagem)
        },
      )
    setNameInput('')
    setEmailInput('')
    setAssuntoInput('')
    setTextInput('')
  }
  return (
    <main className="flex min-h-screen flex-col  items-center gap-5 pt-24 md:pt-[145px]">
      <div className=" mb-10 mt-5 flex  min-h-screen w-[100vw] flex-col items-center rounded-[35px] bg-bglightsecundary shadow-light dark:bg-bgdarksecundary dark:shadow-dark md:w-[90vw] md:rounded-xl ">
        {alert && (
          <div className="absolute top-[50%] z-20 flex items-center justify-center rounded-lg bg-bglightsecundary font-bold dark:bg-bgdarksecundary">
            Mensagem enviada com sucesso!{' '}
            <BiHappyAlt className="text-[30px] text-primary" />
          </div>
        )}

        <h1 className="m-0 text-lg font-bold text-primary dark:text-secundary ">
          Entre em contato
        </h1>
        <p className="mb-5 text-xl">Por email ou por nossas redes sociais</p>

        <form
          ref={form}
          onSubmit={onSubmit}
          name="form"
          className="mb-5 mt-3 flex w-[75%] max-w-[500px] flex-col items-center gap-3 rounded-xl bg-bglight p-3 shadow-light dark:bg-bgdark dark:shadow-dark md:mb-5"
        >
          <h1 className="text-xl font-bold text-primary dark:text-secundary">
            Preencha os campos abaixo:
          </h1>
          <input
            required={true}
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite seu nome"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            className="shadow-ligh mb-[10px] w-[90%] cursor-pointer rounded-lg border-none  bg-bglightsecundary p-[5px] text-center font-bold placeholder-textlight shadow-light outline-none focus:ring-0  dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark"
          />

          <input
            required={true}
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            className="shadow-ligh mb-[10px] w-[90%] cursor-pointer rounded-lg border-none bg-bglightsecundary p-[5px] text-center font-bold placeholder-textlight shadow-light  outline-none focus:ring-0  dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark "
          />

          <input
            required={true}
            type="text"
            name="assunto"
            id="assunto"
            placeholder="Digite o assunto"
            value={assuntoInput}
            onChange={(e) => setAssuntoInput(e.target.value)}
            className="shadow-ligh mb-[10px] w-[90%] cursor-pointer rounded-lg border-none  bg-bglightsecundary p-[5px] text-center font-bold placeholder-textlight shadow-light  outline-none focus:ring-0  dark:bg-bgdarksecundary dark:placeholder-textdark  dark:shadow-dark "
          />

          <textarea
            required={true}
            name="mensagem"
            id="mensagem"
            cols="30"
            rows="10"
            placeholder="Digite sua mensagem"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            className="shadow-ligh w-[90%]  cursor-pointer rounded-lg border-none  bg-bglightsecundary p-[5px] text-center font-bold placeholder-textlight shadow-light  outline-none focus:ring-0  dark:bg-bgdarksecundary dark:placeholder-textdark dark:shadow-dark "
          ></textarea>

          <button
            type="submit"
            name="submit"
            className="m-2 flex items-center rounded-lg bg-gradient-to-r from-slate-950 to-blue-900 px-10 text-lg font-bold  text-white shadow-light hover:from-blue-900   hover:to-slate-900 dark:shadow-dark"
          >
            Enviar
          </button>
        </form>

        <section className=" mb-5 flex w-[100%] flex-col items-center font-bold md:mb-5">
          <div className="flex w-[100%] flex-col items-center gap-5 md:flex-row md:flex-wrap md:justify-center md:py-5">
            <Contatos />
          </div>
        </section>
      </div>
    </main>
  )
}
