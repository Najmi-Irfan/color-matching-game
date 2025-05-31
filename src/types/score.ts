export type ScoreProps = {
    id: number
    score: number
    name: string
    date: string
}

export type ScoreContextType = {
    scoreList: ScoreProps[]
    setScoreList: React.Dispatch<React.SetStateAction<ScoreProps[]>>
}
