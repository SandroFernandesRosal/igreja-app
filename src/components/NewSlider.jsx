'use client'
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
import { useData, useLoading, useLocal } from '../store/useStore'
import { useEffect } from 'react'
import api from '@/service/api'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-flip'
import 'swiper/css/autoplay'
import SkeletonSlider from './SkeletonSlider'

export default function NewSlider() {
  const { data, setData } = useData()
  const { loading, setLoading } = useLoading()
  const { local } = useLocal()

  useEffect(() => {
    api
      .get(`/news/${local}`)
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [local, setData, setLoading])
  return (
    <>
      {!loading ? (
        data && data.length < 1 ? (
          <div className="my-5 flex h-[300px] w-[100vw] flex-col items-center justify-center  rounded-[35px] shadow-xl  dark:shadow-dark md:h-[400px] md:w-[500px] md:rounded-xl lg:h-[500px] lg:w-[800px]">
            {' '}
            <p>NENHUMA NOTÍCIA CADASTRADA.</p>
            <p>Aguarde as postagens.</p>
          </div>
        ) : (
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
              autoplay={{ delay: 3000 }}
              loop={true}
              effect="flip"
              className="h-[300px] w-[100vw]  rounded-[35px] shadow-xl  dark:shadow-dark md:h-[400px] md:w-[500px] md:rounded-xl lg:h-[500px] lg:w-[800px]"
            >
              {data &&
                data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Link
                      key={item.id}
                      href={`/noticias/${item.page}/${item.id}`}
                    >
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
        )
      ) : (
        <SkeletonSlider />
      )}
    </>
  )
}
