import { describe, it, expect } from 'vitest'
import { Part1 } from '../part1'

describe('Part 1: Compute numbers of possible valid ids', () => {
  it('Part 1, no.1', () => {
    const part1 = new Part1(10)
    const validIds = part1.computeTotalPossibleValidIds()
    expect(validIds).toBe(676000)
  })

  it('Part 1, no.2', () => {
    const part1 = new Part1(10)
    const validIds = part1.subtractInvalidIds()
    expect(validIds).toBe(643500)
  })

  it('Generate valid IDs', () => {
    const part1 = new Part1(10)
    const results = part1.generateValidIds()

    results.map((result) => {
      const combinations = result.split('-')
      const letters = combinations[0]
      const digits = combinations[1]

      if (new Set(letters).size == 1 || new Set(digits).size != 3) {
        throw new Error('There are duplicates!!')
      }
    })

  })
})
