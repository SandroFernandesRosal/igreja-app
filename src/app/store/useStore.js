import { create } from 'zustand'
import { DataNews } from '../service/DataNews'
import { dataAgenda } from '../service/dataAgenda'
import { DataMinisterioPenha } from '../service/DataMinisterioPenha'

export const useSearch = create((set) => ({
  search: '',
  setSearch: (query) => set({ search: query }),
}))

export const useNews = create((set) => ({
  news: DataNews,
  setNews: (state) => set({ news: JSON.parse(state) }),
}))

export const useAgenda = create((set) => ({
  agenda: dataAgenda,
  setAgenda: (state) => set({ agenda: state }),
}))

export const usemMinisterio = create((set) => ({
  ministerio: DataMinisterioPenha,
  setMinisterio: (state) => set({ ministerio: state }),
}))
