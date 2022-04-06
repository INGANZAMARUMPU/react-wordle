import { StatItem } from './StatItem'

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
  return (
    <div className="flex justify-center my-2">
      <StatItem
        label={`Ikibanza cawe mu gihugu: ${country}`}
        value={national_rank}
        valueTextSize="text-s"
      />
      <StatItem
        label={"Ikibanza cawe kw'isi yose"}
        value={`${international_rank}`}
        valueTextSize="text-s"
      />
      <StatItem
        label={`Amanota moyen y'igihugu (${country})`}
        value={median_national_score}
        valueTextSize="text-s"
      />
      <StatItem
        label={"Amanota moyen kw'isi yose"}
        value={median_international_score}
        valueTextSize="text-s"
      />
    </div>
  )
}
