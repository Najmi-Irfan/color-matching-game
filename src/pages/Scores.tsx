import { ScoreTable } from '../components/ScoreTable'

export function Scores () {
  return (
    <div className='min-h-screen flex items-center justify-center px-4'>
      <div className='bg-[#fa4454] shadow-2xl rounded-md overflow-hidden w-full max-w-4xl p-6 text-center'>
        <ScoreTable />
      </div>
    </div>
  )
}
