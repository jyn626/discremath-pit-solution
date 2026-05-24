import { Part2 } from '../part2'
import { describe, it, expect } from 'vitest'

describe('Part 2', () => {
  it('must count ordered selections of 3 digits from 10 where no digit repeats.', () => {
    const part2 = new Part2(10)
    expect(part2.subtractInvalidIdsAndKeepNoRepeats()).toBe(468000)
  })

})