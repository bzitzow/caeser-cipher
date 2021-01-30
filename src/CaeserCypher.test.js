const CeaserCypher = require("./CaeserCypher");

describe("CaeserCypher", () => {
    describe("encode: given 'a'", () => {
        let englishString;

        beforeEach(() => {
            englishString = "a";
        });

        it("returns returns 'b'", () => {
            expect(CeaserCypher.encode(englishString)).toBe("b");
        });
    });
});
