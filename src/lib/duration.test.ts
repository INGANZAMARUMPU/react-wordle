import { secondsToHms } from './duration'

describe('duration', () => {
  it('should convert seconds to hms', () => {
    expect(secondsToHms(0)).toBe('amasegonda 0')
    expect(secondsToHms(1)).toBe('isegonda 1')
    expect(secondsToHms(2)).toBe('amasegonda 2')
    expect(secondsToHms(59)).toBe('amasegonda 59')
    expect(secondsToHms(60)).toBe('umunota 1')
    expect(secondsToHms(61)).toBe('umunota 1, isegonda 1')
    expect(secondsToHms(120)).toBe('iminota 2')
    expect(secondsToHms(3600)).toBe('isaha 1')
    expect(secondsToHms(7200)).toBe('amasaha 2')
    expect(secondsToHms(3601)).toBe('isaha 1, isegonda 1')
    expect(secondsToHms(3660)).toBe('isaha 1, umunota 1')
    expect(secondsToHms(3661)).toBe('isaha 1, umunota 1, isegonda 1')
    expect(secondsToHms(3600 + 60 + 1)).toBe('isaha 1, umunota 1, isegonda 1')
    expect(secondsToHms(3600 + 60 + 1 + 1)).toBe(
      'isaha 1, umunota 1, amasegonda 2'
    )
    expect(secondsToHms(3600 + 60 + 1 + 1 + 1)).toBe(
      'isaha 1, umunota 1, amasegonda 3'
    )
    expect(secondsToHms(3600 + 60 + 1 + 1 + 1 + 1)).toBe(
      'isaha 1, umunota 1, amasegonda 4'
    )
    expect(secondsToHms(3600 + 60 + 1 + 1 + 1 + 1 + 1)).toBe(
      'isaha 1, umunota 1, amasegonda 5'
    )
    expect(secondsToHms(3600 + 60 + 1 + 1 + 1 + 1 + 1 + 1)).toBe(
      'isaha 1, umunota 1, amasegonda 6'
    )
    expect(secondsToHms(3600 + 60 + 1 + 1 + 1 + 1 + 1 + 1 + 1)).toBe(
      'isaha 1, umunota 1, amasegonda 7'
    )
    expect(secondsToHms(3600 + 60 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1)).toBe(
      'isaha 1, umunota 1, amasegonda 8'
    )
  })
})
