import Image from 'next/image'
import { useState, useEffect } from 'react'
import Swipe from 'react-easy-swipe'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import Link from 'next/link'

export default function Carousel({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNextSlide = () => {
    const newSlide = currentSlide === data.length - 1 ? 0 : currentSlide + 1
    setCurrentSlide(newSlide)
  }

  const handlePrevSlide = () => {
    const newSlide = currentSlide === 0 ? data.length - 1 : currentSlide - 1
    setCurrentSlide(newSlide)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide()
    }, 3000)
    return () => clearInterval(interval)
  })

  return (
    <div className="relative z-10 mb-10 mt-5 h-[300px] w-[100%] rounded-[35px] shadow-light dark:shadow-dark md:mb-10  md:mt-5 md:h-[400px] md:w-[500px] md:max-w-[500px] md:rounded-xl md:shadow-lg md:hover:shadow-primary md:dark:shadow-dark md:dark:hover:shadow-primary lg:h-[500px] lg:w-[800px] lg:max-w-[800px] ">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute inset-y-1/2 left-2 z-10 m-auto cursor-pointer rounded-full bg-black/10 p-1 text-4xl text-primary dark:bg-white/10 md:text-5xl"
      />
      <div className="relative m-auto flex justify-center shadow-xl">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative    h-[300px] w-[100vw] overflow-hidden rounded-[35px] shadow-xl  dark:shadow-dark md:h-[400px] md:w-[500px] md:rounded-xl lg:h-[500px] lg:w-[800px]"
        >
          {data.map((image, index) => {
            if (index === currentSlide) {
              return (
                <Link key={image.id} href={`/noticias/${image.id}`}>
                  <Image
                    src={image.url}
                    width={800}
                    height={500}
                    alt="..."
                    className=" h-full object-fill"
                  />
                </Link>
              )
            }
            return null
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute inset-y-1/2  right-2 z-10 m-auto cursor-pointer rounded-full bg-black/10 p-1 text-4xl text-primary dark:bg-white/10 md:text-5xl"
      />

      <div className="items-evenly absolute bottom-0 flex w-full   justify-center p-2 ">
        {data.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? 'mx-2 mb-2 h-4 w-4 cursor-pointer rounded-full bg-primary'
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
