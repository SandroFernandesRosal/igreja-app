'use client'
import { useSearch } from '../store/searchStore'

export default function ContainerResults({ children }) {
  const { search } = useSearch()
  return (
    <div
      className={`flex  gap-2 md:gap-5  ${search ? 'flex-row' : 'flex-col'} ${
        search && 'flex-wrap'
      }  
      } ${search && 'justify-center'} ${
        search ? 'items-start' : 'items-center'
      } px-1 pb-5`}
    >
      {children}
    </div>
  )
}
