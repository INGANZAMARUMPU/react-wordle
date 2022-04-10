import { solution } from './words'
import { PROVERBS, ProverbKey } from '../constants/proverbs'

export const getProverbOfDay = () => {
  const proverbs = PROVERBS[solution.toLowerCase() as ProverbKey]
  const proverb = proverbs ? proverbs[0] : ''

  return {
    proverb,
  }
}

export const { proverb } = getProverbOfDay()
