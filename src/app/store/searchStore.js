import { create } from 'zustand'
import { DataNews } from '../service/DataNews'
import { dataAgenda } from '../service/dataAgenda'
import { DataMinisterioPenha } from '../service/DataMinisterioPenha'

export const useSearch = create((set) => ({
  search: '',
  setSearch: (query) => set({ search: query }),
}))

export const useHook = create((set) => ({
  data: DataNews,
  setData: (state) => set({ data: state }),
}))

export const useAgenda = create((set) => ({
  agenda: dataAgenda,
  setAgenda: (state) => set({ agenda: state }),
}))

export const usemMinisterio = create((set) => ({
  ministerio: DataMinisterioPenha,
  setMinisterio: (state) => set({ ministerio: state }),
}))
