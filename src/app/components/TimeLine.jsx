'use client'
import TimeLineItem from './TimeLineItem'
import { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import Swipe from 'react-easy-swipe'
import { dataLocais } from './dataLocais'

export default function TimeLine() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNextSlide = () => {
    const newSlide =
      currentSlide === dataLocais.length - 1 ? 0 : currentSlide + 1
    setCurrentSlide(newSlide)
  }

  const handlePrevSlide = () => {
    const newSlide =
      currentSlide === 0 ? dataLocais.length - 1 : currentSlide - 1
    setCurrentSlide(newSlide)
  }

  return (
    <div className="flex w-[80vw]  flex-col rounded-xl bg-white/20 pb-5 dark:bg-black/20">
      <div className="mb-5 flex-col items-center text-center">
        <h1 className="m-0 text-lg font-bold text-primary ">Agenda</h1>
        <p className="text-xl ">Agenda semanal</p>
      </div>
      <div className="relative z-10">
        <FaArrowLeft
          onClick={handlePrevSlide}
          className="absolute inset-y-1/2 left-2 z-10 m-auto cursor-pointer rounded-full bg-white/30 p-1 text-4xl text-white dark:bg-black/30 md:text-5xl"
        />
        <div className="relative m-auto flex justify-center">
          <Swipe
            onSwipeLeft={handleNextSlide}
            onSwipeRight={handlePrevSlide}
            className="relative  flex h-[400px] justify-center  gap-10 overflow-hidden  rounded-xl md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[80vw] "
          >
            {dataLocais.map((item, index) => {
              if (index === currentSlide) {
                return (
                  <TimeLineItem
                    key={index}
                    day={item.day}
                    title={item.title}
                    hora={item.hora}
                    titletwo={item.titletwo}
                    horatwo={item.horatwo}
                  />
                )
              }
              return null
            })}
          </Swipe>
        </div>
        <FaArrowRight
          onClick={handleNextSlide}
          className="absolute inset-y-1/2  right-2 z-10 m-auto cursor-pointer rounded-full bg-white/30 p-1 text-4xl text-white dark:bg-black/30 md:text-5xl"
        />

        <div className="items-evenly absolute bottom-0 flex w-full   justify-center p-2 ">
          {dataLocais.map((_, index) => {
            return (
              <div
                className={
                  index === currentSlide
                    ? 'mx-2 mb-2 h-4 w-4 cursor-pointer rounded-full bg-white'
                    : 'mx-2 mb-2 h-4 w-4 cursor-pointer rounded-full bg-gray-700'
                }
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
