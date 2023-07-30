import { create } from 'zustand'
import { imgs } from '../components/imgs'

export const useSearch = create((set) => ({
  search: '',
  setSearch: (query) => set({ search: query }),

  imgs,
}))

export const useDataStore = create((set) => ({
  data: [imgs], // Your data array
  filterText: '',

  setData: (newData) => set({ data: newData }),

  setFilterText: (text) => set({ filterText: text }),

  // Function to perform filtering on the data array

  filteredData: () => {
    const { data, filterText } = useDataStore.getState()

    return data.filter((item) =>
      item.toLowerCase().includes(filterText.toLowerCase()),
    )
  },
}))
