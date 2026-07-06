import { createContext, useContext } from 'react'

export const BackContext = createContext()

export function useBack() {
  return useContext(BackContext)
}
