const CeaserCypher = require("./CaeserCypher");

describe("CaeserCypher", () => {
    let message;
    let shift;

    describe("encode: given 'a'", () => {
        beforeEach(() => {
            message = "a";
        });

        describe("with a shift of 1", () => {
            beforeEach(() => {
                shift = 1;
            });

            it("returns 'b'", () => {
                expect(CeaserCypher.encode(message, shift)).toBe("b");
            });
        });

        describe("with a shift of 2", () => {
            beforeEach(() => {
                shift = 2;
            });

            it("returns 'c'", () => {
                expect(CeaserCypher.encode(message, shift)).toBe("c");
            });
        });
    });

    describe("encode: given 'z' (the end of the alphabet)", () => {
        beforeEach(() => {
            message = "z";
        });

        describe("with a shift of 1", () => {
            beforeEach(() => {
                shift = 1;
            });

            it("returns 'a", () => {
                expect(CeaserCypher.encode(message, shift)).toBe("a");
            });
        });
    });
});
