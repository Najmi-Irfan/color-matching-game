import { useContext } from "react"
import { ScoreContext } from "../App"

export function useScoreContext() {
  const context = useContext(ScoreContext)
  if (!context) {
    throw new Error('useScoreContext must be used inside ScoreContext.Provider')
  }
  return context
}
