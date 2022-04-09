const getHDisplay = (h: number, m: number, s: number) => {
  return h === 0
    ? ''
    : h + ' hour' + (h > 1 ? 's' : '') + (m > 0 || s > 0 ? ', ' : '')
}

const getMDisplay = (h: number, m: number, s: number) => {
  return m === 0 ? '' : m + ' minute' + (m > 1 ? 's' : '') + (s > 0 ? ', ' : '')
}

const getSDisplay = (h: number, m: number, s: number) => {
  if (s === 0 && (h > 0 || m > 0)) {
    return ''
  }
  return s >= 0 ? s + (s === 1 ? ' second' : ' seconds') : ''
}

export const secondsToHms = (duration: number) => {
  duration = Number(duration)
  const h = Math.floor(duration / 3600)
  const m = Math.floor((duration % 3600) / 60)
  const s = Math.floor((duration % 3600) % 60)

  const hDisplay = getHDisplay(h, m, s)
  const mDisplay = getMDisplay(h, m, s)
  const sDisplay = getSDisplay(h, m, s)

  return [hDisplay, mDisplay, sDisplay].join('')
}
