import axios from 'axios'

import {
  COUNTRY_ENDPOINT,
  GAMES_ENDPOINT,
  MISSING_WORDS_ENDPOINT,
} from '../constants/endpoints'
import { getStoredPenalty, loadGameStateFromLocalStorage } from './localStorage'
import { loadStats } from './stats'

type CompletedGamePayload = {
  country: string
  end_time: Date
  guesses: string[]
  score: number
  solution: string
  start_time: Date
  time_taken: number
  timezone: string
  won: boolean
}

export const saveGameStateToDatabase = (won: boolean) => {
  if (localStorage.getItem('saved')) return

  const game = loadGameStateFromLocalStorage()
  const startTime = new Date(localStorage.getItem('startTime') as string)
  const endTime = new Date()
  const guesses = (game && game.guesses) || []
  const timeTaken = Math.floor((endTime.getTime() - startTime.getTime()) / 1000)
  const penalty = getStoredPenalty()
  const { successRate, totalGames } = loadStats()
  const advantage = successRate * Math.max(totalGames, 1)
  const normalScore = advantage - guesses.length * timeTaken - 100 * penalty
  const score = won ? normalScore : 0
  localStorage.removeItem('penalty')
  localStorage.setItem('gameScore', score.toString())

  const completedGame = {
    end_time: endTime,
    guesses,
    score,
    solution: game && game.solution,
    start_time: startTime,
    time_taken: timeTaken,
    won,
  } as CompletedGamePayload

  axios.get(COUNTRY_ENDPOINT).then(({ data: { country_name, timezone } }) => {
    localStorage.setItem('country', country_name)
    completedGame.country = country_name
    completedGame.timezone = timezone
    axios.post(GAMES_ENDPOINT, completedGame).then(() => {
      localStorage.setItem('saved', 'true')
    })
  })
}

export const saveCurrentGuessToDatabase = (currentGuess: string) => {
  const penalty = getStoredPenalty() + 1

  localStorage.setItem('penalty', penalty.toString())
  axios.post(MISSING_WORDS_ENDPOINT, {
    word: { value: currentGuess.toLowerCase() },
  })
}
