// persistMiddleware.js
export const persistMiddleware = (config) => (set, get, api) => {
  const { name, getStorageKey, setStorageKey } = config

  // Função para salvar o estado no localStorage
  const saveToLocalStorage = (state) => {
    localStorage.setItem(setStorageKey, JSON.stringify(state))
  }

  // Função para recuperar o estado do localStorage
  const loadFromLocalStorage = () => {
    const storedState = localStorage.getItem(getStorageKey)
    if (storedState) {
      return JSON.parse(storedState)
    }
    return undefined
  }

  // Carregar o estado inicial do localStorage
  const initialState = loadFromLocalStorage()

  // Atualizar o estado com o valor inicial recuperado do localStorage
  set(initialState || config.initialState)

  // Sobrescrever a função set para salvar o estado no localStorage após cada atualização
  return (fn) => {
    const result = set(fn)
    saveToLocalStorage(get())
    return result
  }
}
