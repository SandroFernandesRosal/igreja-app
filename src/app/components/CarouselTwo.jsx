'use client'
import Image from 'next/image'

import { useState, useEffect } from 'react'
import Swipe from 'react-easy-swipe'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
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
  }, [currentSlide])

  return (
    <div className="relative z-10">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute inset-y-1/2 left-2 z-10 m-auto p-1 cursor-pointer md:text-5xl rounded-full bg-white/30 text-4xl text-white dark:bg-black/30"
      />
      <div className="relative m-auto flex justify-center">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative    md:w-[400px] md:h-[400px] w-[80vw] h-[400px]  overflow-hidden rounded-xl "
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
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute inset-y-1/2  right-2 z-10 m-auto cursor-pointer p-1 rounded-full bg-white/30 text-4xl md:text-5xl text-white dark:bg-black/30"
        seconds={seconds}
      />

      <div className="absolute flex justify-center p-2 bottom-0  w-full items-evenly ">
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
