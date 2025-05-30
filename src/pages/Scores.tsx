export function Scores () {
  const topScores = [
    { id: 1, score: 11, name: 'John', date: '29/05/2025' },
    { id: 2, score: 9, name: 'Alice', date: '28/05/2025' },
    { id: 3, score: 8, name: 'Bob', date: '27/05/2025' }
  ]

  return (
    <div className='min-h-screen flex items-center justify-center px-4'>
      <div className='bg-[#fa4454] shadow-2xl rounded-md overflow-hidden w-full max-w-4xl p-6 text-center'>
        <p className='text-2xl font-bold mb-4'>Top Scores</p>

        <div className='overflow-x-auto'>
          <table className='w-full border-separate border-spacing-y-2'>
            <thead>
              <tr className='text-center'>
                <th className='px-4 py-2 rounded-l-md'>No.</th>
                <th className='px-4 py-2'>Score</th>
                <th className='px-4 py-2'>Name</th>
                <th className='px-4 py-2 rounded-r-md'>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {topScores.map((item, index) => (
                <tr key={index} className='text-center'>
                  <td className='px-4 py-2 rounded-l-md'>{item.id}</td>
                  <td className='px-4 py-2'>{item.score}</td>
                  <td className='px-4 py-2'>{item.name}</td>
                  <td className='px-4 py-2 rounded-r-md'>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
