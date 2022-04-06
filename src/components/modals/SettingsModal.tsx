import { BaseModal } from './BaseModal'
import { Link } from './Link'
import { SettingsToggle } from './SettingsToggle'
import {
  HARD_MODE_DESCRIPTION,
  HIGH_CONTRAST_MODE_DESCRIPTION,
} from '../../constants/strings'
import { solutionIndex } from '../../lib/words'

type Props = {
  isOpen: boolean
  handleClose: () => void
  isHardMode: boolean
  handleHardMode: Function
  isDarkMode: boolean
  handleDarkMode: Function
  isHighContrastMode: boolean
  handleHighContrastMode: Function
}

export const SettingsModal = ({
  isOpen,
  handleClose,
  isHardMode,
  handleHardMode,
  isDarkMode,
  handleDarkMode,
  isHighContrastMode,
  handleHighContrastMode,
}: Props) => {
  return (
    <BaseModal title="Kuregera" isOpen={isOpen} handleClose={handleClose}>
      <div className="flex flex-col mt-2 divide-y">
        <SettingsToggle
          settingName="Urukino rugoye"
          flag={isHardMode}
          handleFlag={handleHardMode}
          description={HARD_MODE_DESCRIPTION}
        />
        <SettingsToggle
          settingName="Amabara yoroshe"
          flag={isDarkMode}
          handleFlag={handleDarkMode}
        />
        <SettingsToggle
          settingName="Amabara amena amaso"
          flag={isHighContrastMode}
          handleFlag={handleHighContrastMode}
          description={HIGH_CONTRAST_MODE_DESCRIPTION}
        />
        <div className="flex justify-between gap-4 py-3">
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-300">
            2022{' '}
            <Link
              href="https://linktr.ee/ndakundaikirundi"
              text="Ndakunda Ikirundi"
            />
          </p>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-300">
            #{solutionIndex}
          </p>
        </div>
      </div>
    </BaseModal>
  )
}
