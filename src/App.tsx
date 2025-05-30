import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction
} from 'react'
import { Landing } from './pages/Landing'
import { Game } from './pages/Game'
import { Scores } from './pages/Scores'

type PageContextType = {
  page: number
  setPage: Dispatch<SetStateAction<number>>
}

export const PageContext = createContext<PageContextType | null>(null)

function App () {
  const [page, setPage] = useState<number>(1)

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <>
        {page === 0 && <Landing />}
        {page === 1 && <Game />}
        {page === 2 && <Scores />}
      </>
    </PageContext.Provider>
  )
}

export default App
