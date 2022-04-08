import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { RankingBar, RankingStats } from '../stats/RankingBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { solution, tomorrow } from '../../lib/words'
import { BaseModal } from './BaseModal'
import {
  GUESS_DISTRIBUTION_TEXT,
  INTERNATIONAL_COMPETITION_TEXT,
  NEW_WORD_TEXT,
  SHARE_TEXT,
  STATISTICS_TITLE,
  YOUR_SCORE_TEXT,
} from '../../constants/strings'

import { RANKINGS_ENDPOINT } from '../../constants/endpoints'

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShareToClipboard: () => void
  isHardMode: boolean
  isDarkMode: boolean
  isHighContrastMode: boolean
  numberOfGuessesMade: number
}

export const StatsModal = ({
  isOpen,
  handleClose,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShareToClipboard,
  isHardMode,
  isDarkMode,
  isHighContrastMode,
  numberOfGuessesMade,
}: Props) => {
  const gameScore = localStorage.getItem('gameScore')
  const country = localStorage.getItem('country')

  const [rankingStats, setRankingStats] = useState<RankingStats>({
    national_rank: '/',
    international_rank: '/',
    median_national_score: 0,
    median_international_score: 0,
    country: country || '',
  })

  const getRankingStats = useCallback(async () => {
    if (!gameScore || !country) return

    const result = await axios.get(RANKINGS_ENDPOINT, {
      params: { score: gameScore, country, solution },
    })

    const data = await result.data
    setRankingStats(data as RankingStats)
  }, [gameScore, country])

  useEffect(() => {
    if (!isOpen) return

    getRankingStats()
  }, [isOpen, getRankingStats])

  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal
        title={STATISTICS_TITLE}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <StatBar gameStats={gameStats} />
      </BaseModal>
    )
  }

  return (
    <BaseModal
      title={STATISTICS_TITLE}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <StatBar gameStats={gameStats} />
      <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
        {GUESS_DISTRIBUTION_TEXT}
      </h4>
      <Histogram
        gameStats={gameStats}
        numberOfGuessesMade={numberOfGuessesMade}
      />
      {gameScore && (
        <>
          <p className="text-lg font-bold leading-5 text-gray-900 dark:text-gray-100">
            {YOUR_SCORE_TEXT}: {gameScore}
          </p>
          <p className="text-m mt-2 leading-6 font-medium text-gray-900 dark:text-gray-100">
            {INTERNATIONAL_COMPETITION_TEXT}
          </p>
          {<RankingBar rankingStats={rankingStats} />}
        </>
      )}
      {(isGameLost || isGameWon) && (
        <div className="mt-5 sm:mt-6 columns-2 dark:text-white">
          <div>
            <h5>{NEW_WORD_TEXT}</h5>
            <Countdown
              className="text-lg font-medium text-gray-900 dark:text-gray-100"
              date={tomorrow}
              daysInHours={true}
            />
          </div>
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              shareStatus(
                guesses,
                isGameLost,
                isHardMode,
                isDarkMode,
                isHighContrastMode,
                handleShareToClipboard
              )
            }}
          >
            {SHARE_TEXT}
          </button>
        </div>
      )}
    </BaseModal>
  )
}
