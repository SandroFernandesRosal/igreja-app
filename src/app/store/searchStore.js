import { create } from 'zustand'
import { DataNews } from '../service/DataNews'

function isLocalStorageAvailable() {
  try {
    const testKey = '__zustand_test__'
    localStorage.setItem(testKey, testKey)
    localStorage.removeItem(testKey)
    return true
  } catch (error) {
    return false
  }
}

export const useSearch = create((set) => ({
  search: '',
  setSearch: (query) => set({ search: query }),
}))

export const useHook = create((set) => ({
  data: JSON.parse(localStorage.getItem(DataNews)) || [], // Inicializa com o valor armazenado no localStorage, se existir
  setData: (state) => {
    set({ data: state })
    if (isLocalStorageAvailable()) {
      localStorage.setItem(DataNews, JSON.stringify(state)) // Salva o valor no localStorage
    }
  },
}))
