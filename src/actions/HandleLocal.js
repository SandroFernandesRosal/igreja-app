'use server'
import { useLocal } from '@/store/useStore'
export const handleLocalSelection = (selected) => {
  const setLocal = useLocal.getState().setLocal

  setLocal(selected)
}
