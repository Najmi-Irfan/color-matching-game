import { useForm } from 'react-hook-form'
import { Input } from '../components/InputField'
import type { ScoreProps } from '../types/score'
import { useScoreContext } from '../hooks/score'
import { PageContext } from '../App'
import { useContext } from 'react'
import { ScoreTable } from '../components/ScoreTable'
import moment from 'moment'

interface IFormInput {
  playerName: string
}

function LeftSideCard () {
  const { setScoreList, scoreList } = useScoreContext()
  const pageCtx = useContext(PageContext)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({
    defaultValues: {
      playerName: ''
    }
  })

  const onSubmit = (data: IFormInput) => {
    const newPlayer = {
      id: scoreList.length + 1,
      score: 0,
      name: data.playerName,
      date: moment().format('DD/MM/YYYY')
    }
    setScoreList((prevList: ScoreProps[]) => [...prevList, newPlayer])
    pageCtx?.setPage(1)
  }
  return (
    <div className='md:w-1/2 p-8 flex flex-col h-screen'>
      <div className='text-white text-center'>
        <h2 className='text-3xl font-bold mb-4'>Reaction Game</h2>
        <p>How to play:</p>
        <p>
          Select the colored circle which stated as target color (20 seconds per
          round)
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col flex-1 justify-between'
      >
        <div className='flex flex-col items-center justify-center flex-1 space-y-4'>
          <Input
            register={register}
            formName='playerName'
            placeholder='Enter your name'
            error={errors.playerName}
            label='Player Name'
          />
        </div>

        <button type='submit' className='w-full bg-white py-2 rounded-md'>
          Start Game
        </button>
      </form>
    </div>
  )
}

function RightSideCard () {
  const { scoreList } = useScoreContext()
  return (
    <div className='md:w-1/2 bg-[#fa4454] p-8 flex flex-col'>
      <ScoreTable scoreList={scoreList} />
    </div>
  )
}

export function Landing () {
  return (
    <div className='min-h-screen flex items-center justify-center px-4'>
      <div className='bg-[#2A2A29] shadow-2xl rounded-md overflow-hidden flex flex-col md:flex-row w-full max-w-4xl'>
        <LeftSideCard />
        <RightSideCard />
      </div>
    </div>
  )
}
