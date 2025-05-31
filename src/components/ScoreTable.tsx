import type { ScoreProps } from "../types/score"

export function ScoreTable ({scoreList}:{scoreList: ScoreProps[]}) {

  const shouldShowTable = scoreList.length > 0

  const filledScores = shouldShowTable
    ? Array.from({ length: 10 }, (_, i) => {
        return (
          scoreList[i] || {
            id: '-',
            score: '-',
            name: '-',
            date: '-'
          }
        )
      })
    : []

  return (
    <>
      <p className='text-[#042e27] text-center text-3xl font-bold pb-4'>
        Top Scores
      </p>

      <div>
        {shouldShowTable ? (
          <table className='w-full text-[#042e27]'>
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
