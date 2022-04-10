import { useState } from 'react'
import classNames from 'classnames'
import { solution } from '../../lib/words'
import { BaseModal } from './BaseModal'
import { SEND_TEXT, MEANINGS_TITLE } from '../../constants/strings'
import { saveMeaningToDatabase } from '../../lib/database'
import { proverb } from '../../lib/proverbs'

type Props = {
  isOpen: boolean
  handleClose: () => void
  setIsMeaningsModalOpen: (isMeaningsModalOpen: boolean) => void
  showSuccessAlert: (message: string) => void
}

export const MeaningsModal = ({
  isOpen,
  handleClose,
  setIsMeaningsModalOpen,
  showSuccessAlert,
}: Props) => {
  const [meaning, setMeaning] = useState('')
  const disabled = meaning.length === 0

  return (
    <BaseModal title={MEANINGS_TITLE} isOpen={isOpen} handleClose={handleClose}>
      <div>
        <p className="text-sm my-4 text-gray-500 dark:text-gray-300">
          Umugani w'uno munsi urimwo ijambo{' '}
          <span className="font-bold">{solution}</span>
        </p>
      </div>
      <div>
        <p className="text-m leading-6 font-bold italic text-gray-900 dark:text-gray-100">
          {proverb}
        </p>
      </div>

      <div>
        <p className="text-sm my-4 text-gray-500 dark:text-gray-300">
          Woba uzi ico uwo mugani usigura ?
        </p>
      </div>
      <div>
        <div className="flex justify-center">
          <textarea
            value={meaning}
            onChange={(event) => setMeaning(event.target.value)}
            rows={5}
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-500 focus:outline-none"
            placeholder="Insiguro y'umugani"
          />
        </div>
      </div>

      <div className="mt-5 sm:mt-6 dark:text-white">
        <button
          type="button"
          disabled={disabled}
          className={classNames({
            'mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white sm:text-sm':
              true,
            'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500':
              !disabled,
            'bg-slate-600': disabled,
          })}
          onClick={() => {
            saveMeaningToDatabase(solution, proverb, meaning)
            setIsMeaningsModalOpen(false)
            showSuccessAlert('Urakoze ku ntererano yawe !')
          }}
        >
          {SEND_TEXT}
        </button>
      </div>
    </BaseModal>
  )
}
