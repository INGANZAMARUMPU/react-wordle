import {
  BookOpenIcon,
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline'
import { proverb } from '../../lib/proverbs'
import { solution } from '../../lib/words'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsMeaningsModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  isGameWon: boolean
  isGameLost: boolean
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsMeaningsModalOpen,
  setIsSettingsModalOpen,
  setIsStatsModalOpen,
  isGameLost,
  isGameWon,
}: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-content px-5">
        <InformationCircleIcon
          className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white"
          onClick={() => setIsInfoModalOpen(true)}
        />
        <div>
          <img src="/ijambo.png" alt="Ijambo" className="h-16" />
        </div>
        <div className="right-icons">
          {(isGameWon || isGameLost) && proverb && (
            <BookOpenIcon
              className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
              onClick={() => setIsMeaningsModalOpen(true)}
            />
          )}
          <ChartBarIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
          <CogIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsSettingsModalOpen(true)}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
