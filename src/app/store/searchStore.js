import { create } from 'zustand'
import { DataNews } from '../components/DataNews'
export const useSearch = create((set) => ({
  search: '',
  setSearch: (query) => set({ search: query }),

  DataNews,
}))
