'use client'
import { useState, createContext } from 'react'
import { imgs } from '../components/imgs'

export const NewsContext = createContext()

const NewsContextProvider = ({ children }) => {
  const [search, setSearch] = useState('')

  return (
    <NewsContext.Provider value={{ search, setSearch, imgs }}>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsContextProvider
