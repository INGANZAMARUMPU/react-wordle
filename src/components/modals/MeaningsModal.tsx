import { useState } from 'react'
import classNames from 'classnames'
import { solution } from '../../lib/words'
import { BaseModal } from './BaseModal'
import { SEND_TEXT, MEANINGS_TITLE } from '../../constants/strings'
import { saveMeaningToDatabase } from '../../lib/database'
import { proverb, meanings } from '../../lib/proverbs'

type Props = {
  isOpen: boolean
  handleClose: () => void
  setIsMeaningsModalOpen: (isMeaningsModalOpen: boolean) => void
  showSuccessAlert: (message: string) => void
}

const Meaning = ({ meaning }: { meaning: string }) => (
  <div className="flex justify-between gap-4 py-3">
    <div className="text-gray-500 dark:text-gray-300 mt-2 text-left">
      <p className="text-xs text-gray-500 dark:text-gray-300 whitespace-normal">
        {meaning.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  </div>
)

const Meanings = ({ meanings }: { meanings: string[] }) => (
  <>
    <div className="mt-8">
      <p className="text-m leading-6 font-medium text-gray-900 dark:text-gray-100">
        Insiguro zishoboka zimaze gutangwa
      </p>
    </div>
    <div className="flex flex-col divide-y">
      {meanings.map((meaning, index) => (
        <div key={index}>
          <Meaning meaning={meaning} />
        </div>
      ))}
    </div>
  </>
)

export const MeaningsModal = ({
  isOpen,
  handleClose,
  setIsMeaningsModalOpen,
  showSuccessAlert,
}: Props) => {
  const [meaning, setMeaning] = useState('')
  const [displayMeaningTextArea, setDisplayMeaningTextArea] = useState(false)
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
      <div className="my-5 sm:mt-6 dark:text-white">
        <button
          type="button"
          className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          onClick={() => {
            setDisplayMeaningTextArea(
              displayMeaningTextArea === true ? false : true
            )
          }}
        >
          {displayMeaningTextArea ? 'OYA' : 'EGO'}
        </button>
      </div>
      {displayMeaningTextArea && (
        <>
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
                setMeaning('')
                setDisplayMeaningTextArea(false)
                showSuccessAlert('Urakoze ku ntererano yawe !')
              }}
            >
              {SEND_TEXT}
            </button>
          </div>
        </>
      )}

      {meanings.length > 0 && <Meanings meanings={meanings} />}
    </BaseModal>
  )
}
