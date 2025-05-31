export function ScoreTable () {
  const topScores = [
    { id: 1, score: 11, name: 'John', date: '29/05/2025' },
    { id: 2, score: 9, name: 'Alice', date: '28/05/2025' }
    // You can test with fewer or zero items
  ]

  const shouldShowTable = topScores.length > 0

  const filledScores = shouldShowTable
    ? Array.from({ length: 10 }, (_, i) => {
        return (
          topScores[i] || {
            id: i + 1,
            score: '-',
            name: '-',
            date: '-'
          }
        )
      })
    : []

  return (
    <>
      <p className='text-black text-center text-3xl font-bold pb-4'>
        Top Scores
      </p>

      <div className='overflow-x-auto'>
        {shouldShowTable ? (
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
              {filledScores.map((item, index) => (
                <tr key={index} className='text-center'>
                  <td className='px-4 py-2 rounded-l-md'>{item.id}</td>
                  <td className='px-4 py-2'>{item.score}</td>
                  <td className='px-4 py-2'>{item.name}</td>
                  <td className='px-4 py-2 rounded-r-md'>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className='text-center mt-2'>No top score available right now</p>
        )}
      </div>
    </>
  )
}
