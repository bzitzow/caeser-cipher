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

    describe("given a message with spaces and punctuation", () => {
        beforeEach(() => {
            message = "this is a message with spaces and punctuation.";
            shift = 13;
        });

        it("does not shift the spaces and punctuation",  () => {
            expect(CeaserCypher.encode(message, shift)).toBe("guvf vf n zrffntr jvgu fcnprf naq chapghngvba.");
        });
    });

    describe("given a John Muir quote", () => {
        beforeEach(() => {
            message = "Who wouldn’t be a mountaineer! Up here all the world’s prizes seem nothing.";
            shift = 1;
        });

        it("encodes the capital letters, too", () => {
            expect(CeaserCypher.encode(message, shift)).toBe("Xip xpvmeo’u cf b npvoubjoffs! Vq ifsf bmm uif xpsme’t qsjaft tffn opuijoh.");
        });
    });

    describe("given the wikipedia example", () => {
        beforeEach(() => {
            // https://en.wikipedia.org/wiki/Caesar_cipher
            message = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            shift = 23;
        });

        it("encodes the alphabet as given with a right shift of 23", () => {
            expect(CeaserCypher.encode(message, shift)).toBe("XYZABCDEFGHIJKLMNOPQRSTUVW");
        });
    });
});
