import { create } from 'zustand'
import { DataNews } from '../service/DataNews'
export const useSearch = create((set) => ({
  search: '',
  setSearch: (query) => set({ search: query }),

  DataNews,
}))
