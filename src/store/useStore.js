import { create } from 'zustand'
import Cookies from 'js-cookie'

export const useSearch = create((set) => ({
  search: '',
  setSearch: (query) => set({ search: query }),
}))

export const useData = create((set) => ({
  data: [],
  setData: (state) => set({ data: state }),
}))

export const useLocal = create((set) => {
  // Tenta obter o valor do cookie
  const cookieValue = Cookies.get('local')
  // Se o valor existir, use-o para inicializar o estado, caso contrário, use o valor padrão
  const initialValue = cookieValue || 'viladapenha'

  return {
    local: initialValue,
    setLocal: (state) => {
      // Atualiza o estado
      set({ local: state })
      // Atualiza o cookie
      Cookies.set('local', state, { expires: 7 }) // Define um cookie que expira em 7 dias
    },
  }
})

export const useLoading = create((set) => ({
  loading: true,
  setLoading: (state) => set({ loading: state }),
}))

export const useDataSearch = create((set) => ({
  dataSearch: [],
  setDataSearch: (state) => set({ dataSearch: state }),
}))

export const useOpenNew = create((set) => ({
  openNew: false,
  setOpenNew: (state) => set({ openNew: state }),
}))

export const useDataContato = create((set) => ({
  dataContato: [],
  setDataContato: (state) => set({ dataContato: state }),
}))

export const useMenu = create((set) => ({
  menu: false,
  setMenu: (state) => set({ menu: state }),
}))

export const useDataSobre = create((set) => ({
  dataSobre: [],
  setDataSobre: (state) => set({ dataSobre: state }),
}))

export const useActivePage = create((set) => ({
  activePage: '',
  setActivePage: (state) => set({ activePage: state }),
}))
