import type { Dispatch, SetStateAction } from "react"

export type PageContextType = {
  page: number
  setPage: Dispatch<SetStateAction<number>>
}