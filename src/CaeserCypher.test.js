const CeaserCypher = require("./CaeserCypher");

describe("CaeserCypher", () => {
    describe("given an english string", () => {
        let englishString;

        beforeEach(() => {
            englishString = "a string";
        });

        it("returns the string", () => {
            expect(CeaserCypher.encode(englishString)).toBe(englishString);
        });
    });
});
