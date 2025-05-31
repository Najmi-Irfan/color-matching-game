import type { ScoreProps } from "../types/score"

export function fetchScore() {
    const response = localStorage.getItem('topScores');
    if (response === null) {
        return [];
    } else {
        return JSON.parse(response);
    }
}

export function saveScore(payload: ScoreProps[]){
    localStorage.setItem('topScores', JSON.stringify(payload))
}