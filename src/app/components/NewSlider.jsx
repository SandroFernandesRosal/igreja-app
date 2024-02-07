import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFlip,
  Autoplay,
} from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-flip'
import 'swiper/css/autoplay'
import SkeletonSlider from './SkeletonSlider'

export default function NewSlider({ data, loading }) {
  return (
    <>
      {!loading ? (
        <div className="flex w-full justify-center py-5">
          <Swiper
            modules={[
              Navigation,
              Pagination,
              A11y,
              EffectFlip,
              Scrollbar,
              Autoplay,
            ]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={false}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            autoplay={{ delay: 3000 }}
            loop={true}
            effect="flip"
            className="h-[300px] w-[100vw]  rounded-[35px] shadow-xl  dark:shadow-dark md:h-[400px] md:w-[500px] md:rounded-xl lg:h-[500px] lg:w-[800px]"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <Link key={item.id} href={`/noticias/${item.page}/${item.id}`}>
                  <Image
                    src={item.coverUrl}
                    width={800}
                    height={500}
                    className=" h-full rounded-[35px] object-fill md:rounded-xl"
                    alt="..."
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <SkeletonSlider />
      )}
    </>
  )
}
