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
  const cookieValue = Cookies.get('local')

  const decodedValue = decodeURIComponent(cookieValue)

  const initialValue = decodedValue || 'viladapenha'

  return {
    local: initialValue,
    setLocal: (state) => {
      set({ local: state })

      Cookies.set('local', state, { expires: 7 })
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

export const useOpen = create((set) => ({
  open: false,
  openSet: (state) => set({ open: state }),
}))

export const useDataContato = create((set) => ({
  dataContato: [],
  setDataContato: (state) => set({ dataContato: state }),
}))

export const useMenu = create((set) => ({
  menu: false,
  setMenu: (state) => set({ menu: state }),
}))
