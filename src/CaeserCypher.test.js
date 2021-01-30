const CeaserCypher = require("./CaeserCypher");

describe("CaeserCypher", () => {
    let englishString;
    let shift;

    describe("encode: given 'a'", () => {
        beforeEach(() => {
            englishString = "a";
        });

        describe("with a shift of 1", () => {
            beforeEach(() => {
                shift = 1;
            });

            it("returns 'b'", () => {
                expect(CeaserCypher.encode(englishString, shift)).toBe("b");
            });
        });

        describe("with a shift of 2", () => {
            beforeEach(() => {
                shift = 2;
            });

            it("returns 'c'", () => {
                expect(CeaserCypher.encode(englishString, shift)).toBe("c");
            });
        });
    });
});
