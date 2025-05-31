import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { CIRCLE_SIZE, COLOUR_LIST } from '../constant'
import type { AxisProps } from '../types/axis'
import { PageContext } from '../App'
import { useScoreContext } from '../hooks/score'
import { saveScore } from '../service/api'

export function Game () {
  const { setScoreList, scoreList } = useScoreContext()
  const pageCtx = useContext(PageContext)
  const [winningColor, setWinningColor] = useState<string>('')
  const [winCount, setWinCount] = useState<number>(0)
  const [remainingTime, setRemainingTime] = useState<number>(20)
  const [circleDetail, setCircleDetail] = useState<AxisProps[]>([])
  const [message, setMessage] = useState<string>('')
  const listLength = useMemo(() => COLOUR_LIST.length, [])

  useEffect(() => {
    // generate circle for the first time when the page load
    generateCircles()

    // use interval by 1 second for countdown from 20 to 0
    const timer = setInterval(() => {
      setRemainingTime(prev => {
        if (prev > 0) {
          return prev - 1
        }
        return 0
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (remainingTime === 0) {
      setScoreList(prev => {
        const updatedData = prev.map(player => {
          return player.id === scoreList[scoreList.length - 1].id
            ? { ...player, score: winCount }
            : player
        })
        saveScore(updatedData)
        return updatedData
      })
      pageCtx?.setPage(2)
    }
  }, [remainingTime])

  const generateCircles = useCallback(() => {
    const circleList: AxisProps[] = []
    const targetColor = COLOUR_LIST[Math.floor(Math.random() * listLength)]

    const containerWidth = window.innerWidth
    const containerHeight = 400
    const circleSize = window.innerWidth >= 640 ? 100 : 50
    const radius = circleSize / 2
    const maxX = containerWidth - circleSize
    const maxY = containerHeight - circleSize

    const isOverlapping = (x: number, y: number, list: AxisProps[]) => {
      for (const item of list) {
        const existingX = (item.x / 100) * containerWidth
        const existingY = (item.y / 100) * containerHeight
        const dx = existingX - x
        const dy = existingY - y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < circleSize) {
          return true // overlap detected
        }
      }
      return false // no overlap
    }

    let attempts = 0
    let i = 0
    while (i < listLength && attempts < 1000) {
      const x = Math.random() * maxX + radius
      const y = Math.random() * maxY + radius

      if (!isOverlapping(x, y, circleList)) {
        circleList.push({
          color: COLOUR_LIST[i],
          x: (x / containerWidth) * 100,
          y: (y / containerHeight) * 100
        })
        i++
      }

      attempts++
    }

    setWinningColor(targetColor)
    setCircleDetail(circleList)
  }, [listLength])

  const handleClick = useCallback(
    (selectedColor: string) => {
      if (selectedColor === winningColor) {
        setWinCount(prev => prev + 1)
        setMessage('Congratulations! You won!')
      } else {
        setMessage(`Ops, this is ${selectedColor} not ${winningColor}.`)
      }

      setTimeout(() => {
        generateCircles()
      }, 500)
    },
    [remainingTime, winningColor, generateCircles]
  )

  return (
    <div className='p-4 text-white text-center'>
      <div className='text-3xl font-bold'>
        Find the color : <strong>{winningColor}</strong>
      </div>
      <div className='text-xl font-bold pt-4 pb-2'>
        Time Left: {remainingTime} seconds
      </div>
      <div>Win count: {winCount}</div>

      <div className='relative h-[400px] mt-5'>
        {circleDetail.map(list => (
          <div
            key={list.color}
            onClick={() => handleClick(list.color)}
            className='w-[50px] h-[50px] rounded-full absolute cursor-pointer sm:w-[100px] sm:h-[100px]'
            style={{
              backgroundColor: list.color,
              left: `${list.x}%`,
              top: `${list.y}%`
            }}
          />
        ))}
      </div>

      <div className='fixed bottom-5 w-full text-center self-center text-white z-50 px-4 pb-safe'>
        {message}
      </div>
    </div>
  )
}
