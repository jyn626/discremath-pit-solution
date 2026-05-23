"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Part1 {
    letters;
    digits;
    iterations;
    constructor(iterations) {
        this.letters = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ];
        this.iterations = iterations;
        this.digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
    computeTotalPossibleValidIds() {
        const totalLetters = this.letters.length * this.letters.length; // 26 * 26
        const totalDigits = this.digits.length * this.digits.length * this.digits.length; // 10 * 10 * 10
        const result = totalLetters * totalDigits;
        return result;
    }
    totalUnpreatingIds() {
        const totalLettersCombination = this.letters.length * (this.letters.length - 1);
        const totalDigitCombinations = this.digits.length * (this.digits.length - 1) * (this.digits.length - 2);
        // const wantedDigitCombinations = totalDigitCombinations - invalidDigitCombinations
        const result = totalLettersCombination * totalDigitCombinations;
        return result;
    }
    generateValidIds(iteration) {
        while (iteration > 0) {
            const randomFirstLetter = this.letters[Math.floor(Math.random() * this.letters.length)];
            const randomSecondLetter = this.letters[Math.floor(Math.random() * this.letters.length)];
            const randomFirstDigit = this.digits[Math.floor(Math.random() * this.digits.length)];
            const randomSecondDigit = this.digits[Math.floor(Math.random() * this.digits.length)];
            const randomThirdDigit = this.digits[Math.floor(Math.random() * this.digits.length)];
            if (randomFirstLetter != randomSecondLetter &&
                randomFirstDigit != randomSecondDigit &&
                randomFirstDigit != randomThirdDigit &&
                randomSecondDigit != randomThirdDigit) {
                console.log(`${randomFirstLetter}${randomSecondLetter}-${randomFirstDigit}${randomSecondDigit}${randomThirdDigit}`);
                iteration -= 1;
            }
        }
    }
    displayResult() {
        console.log({
            "computeTotalPossibleValidIds": this.computeTotalPossibleValidIds(),
            "totalUnpreatingIds": this.totalUnpreatingIds()
        });
        this.generateValidIds(this.iterations);
    }
}
const part1 = new Part1(10);
part1.displayResult();
//# sourceMappingURL=part2.js.map