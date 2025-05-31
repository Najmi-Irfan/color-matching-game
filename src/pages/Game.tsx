import React, { useContext, useEffect, useState } from 'react'
import { COLOUR_LIST } from '../constant'
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
  const listLength = COLOUR_LIST.length

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
      // pageCtx?.setPage(2)
    }
  }, [remainingTime])

  const generateCircles = () => {
    // to store list of circle with its coordinate
    const circleList = []
    const targetColor = COLOUR_LIST[Math.floor(Math.random() * listLength)]

    //traverse color 1 by 1 and assign its x and y axis
    for (let i = 0; i < listLength; i++) {
      const circleObj: AxisProps = {
        color: COLOUR_LIST[i],
        x: Math.random() * (100 - 5),
        y: Math.random() * (100 - 5)
      }

      circleList.push(circleObj)
    }
    setWinningColor(targetColor)
    setCircleDetail(circleList)
  }

  const handleClick = (selectedColor: string) => {
    if (remainingTime <= 0) return

    if (selectedColor === winningColor) {
      setWinCount(prev => prev + 1)
      setMessage('Congratulations! You won!')
    } else {
      setMessage(`Ops, this is ${selectedColor} not ${winningColor}.`)
    }

    setTimeout(() => {
      generateCircles()
    }, 500)
  }

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
            className='w-[100px] h-[100px] rounded-full absolute cursor-pointer'
            style={{
              backgroundColor: list.color,
              left: `${list.x}%`,
              top: `${list.y}%`
            }}
          />
        ))}
      </div>

      <div className='fixed bottom-5 w-full text-center text-white'>
        {message}
      </div>
    </div>
  )
}
