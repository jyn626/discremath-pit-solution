class Part1 {
  letters: string[];
  digits: number[];
  iterations: number;

  constructor(iterations: number) {
    this.letters = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    this.iterations = iterations
    this.digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  computeTotalPossibleValidIds(): number {
    const totalLetters = this.letters.length * this.letters.length // 26 * 26
    const totalDigits = this.digits.length * this.digits.length * this.digits.length // 10 * 10 * 10
    const result = totalLetters * totalDigits

    return result

  }


  totalUnpreatingIds(): number {
    /**
      o Exclude:
         IDs with identical letters (e.g. AA, BB)
         IDs with identical digits (e.g. 111, 222)
      o Compute the total valid USER IDs
     */

    // ang atoang letter combination is 2 letters
    const totalLettersCombination = this.letters.length * this.letters.length
    const invalidLetterCombinations = this.letters.length

    // mag subtraction rule dayon ta
    // wanted = total possible outcomes - unwanted 
    const wantedLetterCombinations = totalLettersCombination - invalidLetterCombinations

    // !!! I still don't understand fully how this works.
    const totalDigitCombinations = this.digits.length * this.digits.length * this.digits.length  // 10 * 10 * 10 
    // !!! Why is this a 10 ? Why does this work ? is this even correct ? lmao.
    const invalidDigitCombinations = 10

    const wantedDigitCombinations = totalDigitCombinations - invalidDigitCombinations
    const result = wantedDigitCombinations * wantedLetterCombinations

    return result
  }

  generateValidIds(iteration: number): void {


    while (iteration > 0) {
      const randomFirstLetter = this.letters[Math.floor(Math.random() * this.letters.length)]!
      const randomSecondLetter = this.letters[Math.floor(Math.random() * this.letters.length)]!

      const randomFirstDigit = this.digits[Math.floor(Math.random() * this.digits.length)]!
      const randomSecondDigit = this.digits[Math.floor(Math.random() * this.digits.length)]!
      const randomThirdDigit = this.digits[Math.floor(Math.random() * this.digits.length)]!

      if (
        randomFirstLetter != randomSecondLetter &&
        randomFirstDigit != randomSecondDigit &&
        randomFirstDigit != randomThirdDigit &&
        randomSecondDigit != randomThirdDigit
      ) {
        console.log(`${randomFirstLetter}${randomSecondLetter}-${randomFirstDigit}${randomSecondDigit}${randomThirdDigit}`)
        iteration -= 1
      }
    }

  }


  displayResult() {
    console.log({
      "computeTotalPossibleValidIds": this.computeTotalPossibleValidIds(),
      "totalUnpreatingIds": this.totalUnpreatingIds()
    })


    this.generateValidIds(this.iterations)
  }

}


const part1 = new Part1(10)

part1.displayResult()