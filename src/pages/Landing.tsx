export function Landing () {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
      <div className='bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl'>
        {/* Left: Login Form */}
        <div className='md:w-1/2 p-8 flex flex-col justify-center'>
          <h2 className='text-3xl font-bold mb-4 text-gray-800'>React Game</h2>
          <div>
            <label className='block mb-1 text-sm font-medium text-gray-600'>
              Player Name
            </label>
            <input
              type='password'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='********'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200'
          >
            Start Game
          </button>
        </div>

        {/* Right: Notes/Info */}
        <div className='md:w-1/2 bg-blue-100 p-8 flex items-center justify-center'>
          <p className='text-blue-800 text-center text-lg font-medium'>
            Top scores
          </p>
        </div>
      </div>
    </div>
  )
}
