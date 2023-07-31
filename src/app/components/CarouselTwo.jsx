'use client'
import Image from 'next/image'

import { useState, useEffect } from 'react'
import Swipe from 'react-easy-swipe'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

export default function Carousel({ imgs }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const handleNextSlide = () => {
    const newSlide = currentSlide === imgs.length - 1 ? 0 : currentSlide + 1
    setCurrentSlide(newSlide)
  }

  const handlePrevSlide = () => {
    const newSlide = currentSlide === 0 ? imgs.length - 1 : currentSlide - 1
    setCurrentSlide(newSlide)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(handleNextSlide)
    }, 3000)
    return () => clearInterval(interval)
  })

  return (
    <div className="relative z-10">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute inset-y-1/2 left-2 z-10 m-auto cursor-pointer rounded-full bg-white/30 p-1 text-4xl text-white dark:bg-black/30 md:text-5xl"
      />
      <div className="relative m-auto flex justify-center">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative    h-[400px] w-[80vw] overflow-hidden rounded-xl  md:h-[400px] md:w-[400px] "
        >
          {imgs.map((image, index) => {
            if (index === currentSlide) {
              return (
                <Image
                  key={image.id}
                  src={image.url}
                  width={500}
                  height={500}
                  alt="..."
                  className="animate-fadeIn h-[100%] w-[100%]"
                />
              )
            }
            return null
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute inset-y-1/2  right-2 z-10 m-auto cursor-pointer rounded-full bg-white/30 p-1 text-4xl text-white dark:bg-black/30 md:text-5xl"
        seconds={seconds}
      />

      <div className="items-evenly absolute bottom-0 flex w-full  justify-center p-2 ">
        {imgs.map((_, index) => {
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
  )
}
