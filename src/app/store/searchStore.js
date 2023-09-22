import { create } from 'zustand'
import { DataNews } from '../service/DataNews'

export const useSearch = create((set) => ({
  search: '',
  setSearch: (query) => set({ search: query }),
}))

export const useHook = create((set) => ({
  data: DataNews,
  setData: (state) => set({ data: state }),
}))
