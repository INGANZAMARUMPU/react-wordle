import { solution } from './words'
import { PROVERBS, ProverbKey } from '../constants/proverbs'
import { MEANINGS, MeaningKey } from '../constants/meanings'

export const getProverbOfDay = () => {
  const proverbs = PROVERBS[solution.toLowerCase() as ProverbKey]
  const proverb = proverbs ? proverbs[1] : ''
  const meanings = MEANINGS[proverb as MeaningKey] || []

  return {
    proverb,
    meanings,
  }
}

export const { proverb, meanings } = getProverbOfDay()
