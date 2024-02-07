'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
} from 'swiper/modules'

import New from './New'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'
import 'swiper/css/autoplay'

export default function NewsSlider({ data, setData, local, setLocal }) {
  return (
    <div className="flex w-full justify-center">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          A11y,
          EffectCoverflow,
          Scrollbar,
          Autoplay,
        ]}
        spaceBetween={0}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={false}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {data &&
          data.map((item) => (
            <SwiperSlide key={item.id} className="box-content">
              <New
                url={item.coverUrl}
                title={item.title}
                id={item.id}
                description={item.content.slice(0, 30)}
                setData={setData}
                data={data}
                local={local}
                page={item.page}
                setLocal={setLocal}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
