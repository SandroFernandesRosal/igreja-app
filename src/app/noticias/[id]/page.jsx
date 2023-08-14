'use client'
import Image from 'next/image'
import { DataNews } from '@/app/components/DataNews'
export default function Noticia({ params }) {
  const id = params.id
  const selectedItem = DataNews.find((item) => item.id === id)
  return (
    <main className="flex min-h-screen flex-col  items-center gap-5 pt-24 md:pt-[165px]">
      <Image
        src={selectedItem.url}
        alt={selectedItem.title}
        width={400}
        height={400}
      />
      <p>{selectedItem.title}</p>
    </main>
  )
}
