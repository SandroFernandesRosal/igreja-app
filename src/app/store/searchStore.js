import { create } from 'zustand'
import { DataNews } from '../service/DataNews'
import { DataNews2 } from '../service/DataNews2'
export const useSearch = create((set) => ({
  search: '',
  setSearch: (query) => set({ search: query }),

  DataNews,
  data: DataNews,
  setData: () => set({ Datanews2: DataNews2 }),
}))
