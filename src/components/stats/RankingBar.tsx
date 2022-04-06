import { StatItem } from './StatItem'
import {
  YOUR_POSITION_IN_COUNTRY_TEXT,
  YOUR_POSITION_WORLDWIDE_TEXT,
  MEDIAN_SCORE_WORLDWIDE_TEXT,
  MEDIAN_SCORE_PER_COUNTRY_TEXT,
} from '../../constants/strings'

import { COUNTRIES, CountryKey } from '../../constants/countries'

type Props = {
  rankingStats: RankingStats
}

export type RankingStats = {
  national_rank: string
  international_rank: string
  median_national_score: number
  median_international_score: number
  country: string
}

export const RankingBar = ({
  rankingStats: {
    median_international_score,
    median_national_score,
    country,
    international_rank,
    national_rank,
  },
}: Props) => {
  const countryKirundiName = COUNTRIES[country as CountryKey] || country

  return (
    <div className="flex justify-center my-2">
      <StatItem
        label={`${YOUR_POSITION_IN_COUNTRY_TEXT} (${countryKirundiName})`}
        value={national_rank}
        valueTextSize="text-s"
      />
      <StatItem
        label={YOUR_POSITION_WORLDWIDE_TEXT}
        value={`${international_rank}`}
        valueTextSize="text-s"
      />
      <StatItem
        label={`${MEDIAN_SCORE_PER_COUNTRY_TEXT} (${countryKirundiName})`}
        value={median_national_score}
        valueTextSize="text-s"
      />
      <StatItem
        label={MEDIAN_SCORE_WORLDWIDE_TEXT}
        value={median_international_score}
        valueTextSize="text-s"
      />
    </div>
  )
}
