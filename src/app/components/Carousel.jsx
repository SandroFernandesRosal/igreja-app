'use client'

import Image from 'next/image'

import { useState, useEffect } from 'react'

const ImageCarousel = ({ images, children }) => {
  // Use the state hook to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0)

  // Use the effect hook to update the current index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          return 0
        }
        return prevIndex + 1
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  // Render the current image
  return (
    <div className="relative h-[300px] w-[80%] bg-[#013d72] lg:h-[700px]">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt=""
          width={100}
          height={100}
          className={`absolute h-full w-full opacity-0 transition-all duration-1000 ease-in ${
            currentIndex === index ? 'opacity-100' : ''
          }`}
        />
      ))}
      {children}
    </div>
  )
}

export default ImageCarousel
