import { secondsToHms } from './duration'

describe('duration', () => {
  it('should convert seconds to hms', () => {
    expect(secondsToHms(0)).toBe('0 seconds')
    expect(secondsToHms(1)).toBe('1 second')
    expect(secondsToHms(2)).toBe('2 seconds')
    expect(secondsToHms(59)).toBe('59 seconds')
    expect(secondsToHms(60)).toBe('1 minute')
    expect(secondsToHms(61)).toBe('1 minute, 1 second')
    expect(secondsToHms(120)).toBe('2 minutes')
    expect(secondsToHms(3600)).toBe('1 hour')
    expect(secondsToHms(7200)).toBe('2 hours')
    expect(secondsToHms(3601)).toBe('1 hour, 1 second')
    expect(secondsToHms(3660)).toBe('1 hour, 1 minute')
    expect(secondsToHms(3661)).toBe('1 hour, 1 minute, 1 second')
    expect(secondsToHms(3600 + 60 + 1)).toBe('1 hour, 1 minute, 1 second')
    expect(secondsToHms(3600 + 60 + 1 + 1)).toBe('1 hour, 1 minute, 2 seconds')
    expect(secondsToHms(3600 + 60 + 1 + 1 + 1)).toBe(
      '1 hour, 1 minute, 3 seconds'
    )
    expect(secondsToHms(3600 + 60 + 1 + 1 + 1 + 1)).toBe(
      '1 hour, 1 minute, 4 seconds'
    )
    expect(secondsToHms(3600 + 60 + 1 + 1 + 1 + 1 + 1)).toBe(
      '1 hour, 1 minute, 5 seconds'
    )
    expect(secondsToHms(3600 + 60 + 1 + 1 + 1 + 1 + 1 + 1)).toBe(
      '1 hour, 1 minute, 6 seconds'
    )
    expect(secondsToHms(3600 + 60 + 1 + 1 + 1 + 1 + 1 + 1 + 1)).toBe(
      '1 hour, 1 minute, 7 seconds'
    )
    expect(secondsToHms(3600 + 60 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1)).toBe(
      '1 hour, 1 minute, 8 seconds'
    )
  })
})
