import { useForm } from 'react-hook-form'
import { Input } from '../components/InputField'

interface IFormInput {
  playerName: string
}

export function Landing () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>()

  const onSubmit = (data:IFormInput) => {
    console.log('Form Data:', data)
    // Start the game here
  }

  function LeftSideCard () {
    return (
      <div className='md:w-1/2 p-8 flex flex-col justify-center'>
        <div className='text-white text-center'>
          <h2 className='text-3xl font-bold mb-4'>Reaction Game</h2>
          <p>How to play:</p>
          <p>
            Select the colored circle which stated as target color (20 seconds
            per round)
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 mt-6'>
          <Input
            register={register}
            formName='playerName'
            placeholder='Enter your name'
            error={errors.playerName}
            label='Player Name'
          />

          <button type='submit' className='w-full bg-white py-2 rounded-md'>
            Start Game
          </button>
        </form>
      </div>
    )
  }

  function RightSideCard () {
    return (
      <div className='md:w-1/2 bg-[#fa4454] p-8 flex flex-col'>
        <p className='text-black text-center text-3xl font-bold pb-4'>
          Top scores
        </p>
        <p className='text-center mt-2'>No top score available right now</p>
      </div>
    )
  }

  return (
    <div className='min-h-screen flex items-center justify-center px-4'>
      <div className='bg-[#2A2A29] shadow-2xl rounded-md overflow-hidden flex flex-col md:flex-row w-full max-w-4xl'>
        <LeftSideCard />
        <RightSideCard />
      </div>
    </div>
  )
}
