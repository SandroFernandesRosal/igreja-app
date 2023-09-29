import { create } from 'zustand'
import { DataVp } from '../service/DataVp'

export const useSearch = create((set) => ({
  search: '',
  setSearch: (query) => set({ search: query }),
}))

export const useData = create((set) => ({
  data: DataVp,
  setData: (state) => set({ data: state }),
}))
