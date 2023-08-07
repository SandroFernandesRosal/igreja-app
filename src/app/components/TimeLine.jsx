import TimeLineItem from './TimeLineItem'
export default function TimeLine() {
  return (
    <div className="flex w-[80vw] flex-col rounded-xl bg-white/20 pb-5 dark:bg-black/20">
      <div className="mb-5 flex-col items-center text-center">
        <h1 className="m-0 text-lg font-bold text-primary ">Agenda</h1>
        <p className="text-xl ">Agenda semanal</p>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <TimeLineItem
          day="Domingo"
          title="Escola bíblica dominical"
          hora="08:00h"
          titletwo="Culto de adoração"
          horatwo="10:00h"
        />

        <TimeLineItem
          day="Segunda"
          title="Culto de oração"
          hora="19:30h"
          titletwo="Cantina"
          horatwo="21:30h"
        />

        <TimeLineItem
          day="Quarta"
          title="Culto da família"
          hora="18:30h"
          titletwo="Cantina"
          horatwo="21:00h"
        />

        <TimeLineItem
          day="Sexta"
          title="Projeto Jiu-Jitsu"
          hora="18:30h"
          titletwo="Cantina"
          horatwo="21:00h"
        />

        <TimeLineItem
          day="Sábado"
          title="Culto"
          hora="18:30h"
          titletwo="Cantina das delícias"
          horatwo="19:00h"
        />
      </div>
    </div>
  )
}
