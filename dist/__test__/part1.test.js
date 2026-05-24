"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const part1_1 = require("../part1");
(0, vitest_1.describe)('Part 1: Compute numbers of possible valid ids', () => {
    (0, vitest_1.it)('should pass', () => {
        const part1 = new part1_1.Part1(10);
        const validIds = part1.computeTotalPossibleValidIds();
        (0, vitest_1.expect)(validIds).toBe(676000);
    });
});
//# sourceMappingURL=part1.test.js.map