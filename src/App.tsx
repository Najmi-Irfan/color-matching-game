// App.tsx or main component
import { createContext, useState } from 'react'
import { Landing } from './pages/Landing'
import { Game } from './pages/Game'
import { Scores } from './pages/Scores'
import type { ScoreProps, ScoreContextType } from './types/score'
import type { PageContextType } from './types/page'
import { fetchScore } from './service/api'

export const PageContext = createContext<PageContextType | null>(null)
export const ScoreContext = createContext<ScoreContextType | null>(null)

function App () {
  const [page, setPage] = useState<number>(1)
  const [scoreList, setScoreList] = useState<ScoreProps[]>(fetchScore())

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <ScoreContext.Provider value={{ scoreList, setScoreList }}>
        <>
          {page === 0 && <Landing />}
          {page === 1 && <Game />}
          {page === 2 && <Scores />}
        </>
      </ScoreContext.Provider>
    </PageContext.Provider>
  )
}

export default App
