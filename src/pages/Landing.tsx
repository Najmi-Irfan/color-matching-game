export function Landing () {
  return (
    <div className='min-h-screen flex items-center justify-center px-4'>
      <div className='bg-[#2A2A29] shadow-2xl rounded-md overflow-hidden flex flex-col md:flex-row w-full max-w-4xl'>
        {/* Left: Login Form */}
        <div className='md:w-1/2 p-8 flex flex-col justify-center'>
          <div className='text-white text-center'>
            <h2 className='text-3xl font-bold mb-4'>Reaction Game</h2>
            <p>How to play:</p>
            <p>
              Select the colored circle which which stated as target color (20
              seconds per round)
            </p>
          </div>
          <div className='relative w-full my-4'>
            <label
              htmlFor='playerName'
              className='absolute left-3 top-1 text-xs text-white font-bold px-1 z-10'
            >
              Player Name <span className="text-red-400">*</span>
            </label>
            <input
              type='text'
              id='playerName'
              className='w-full px-4 pt-6 pb-2 text-sm border border-white rounded-xl bg-transparent'
            />
          </div>

          <button type='submit' className='w-full bg-white py-2 rounded-md'>
            Start Game
          </button>
        </div>

        {/* Right: Notes/Info */}
        <div className='md:w-1/2 bg-[#fa4454] p-8 flex flex-col'>
          <p className='text-black text-center text-3xl font-bold pb-4'>
            Top scores
          </p>
          <p>No top score available right now</p>
        </div>
      </div>
    </div>
  )
}
