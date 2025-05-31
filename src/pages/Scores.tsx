import { useContext } from 'react'
import { ScoreTable } from '../components/ScoreTable'
import { useScoreContext } from '../hooks/score'
import { PageContext } from '../App'

export function Scores () {
  const { setScoreList, scoreList } = useScoreContext()
  const pageCtx = useContext(PageContext)

  return (
    <div className='min-h-screen flex items-center justify-center px-4'>
      <div className='bg-[#fa4454] shadow-2xl rounded-md overflow-hidden w-full w-2/4 p-6 text-center px-[15%]'>
        <ScoreTable scoreList={scoreList} />
        <button
          className='w-full bg-white py-2 mt-4 rounded-md'
          onClick={() => {
            pageCtx?.setPage(0)
          }}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}
