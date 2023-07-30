import { create } from 'zustand'
import { imgs } from '../components/imgs'

export const useSearch = create((set) => ({
  search: '',
  setSearch: (query) => set({ search: query }),

  imgs,
}))
