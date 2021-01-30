const CeaserCipher = require("./CaeserCipher");

describe("CaeserCipher", () => {
    let message;
    let shift;

    describe("the beginning of the alphabet ('a')", () => {
        beforeEach(() => {
            message = "a";
        });

        describe("with a right shift of 1", () => {
            beforeEach(() => {
                shift = 1;
            });

            it("returns 'b'", () => {
                expect(CeaserCipher.encode(message, shift)).toBe("b");
            });
        });

        describe("with a right shift of 2", () => {
            beforeEach(() => {
                shift = 2;
            });

            it("returns 'c'", () => {
                expect(CeaserCipher.encode(message, shift)).toBe("c");
            });
        });

        describe("with a left shift of -1", () => {
            beforeEach(() => {
                shift = -1;
            });

            it("returns 'z'", () => {
                expect(CeaserCipher.encode(message, shift)).toBe("z");
            });
        });
    });

    describe("the end of the alphabet ('z')", () => {
        beforeEach(() => {
            message = "z";
        });

        describe("with a right shift of 1", () => {
            beforeEach(() => {
                shift = 1;
            });

            it("returns 'a'", () => {
                expect(CeaserCipher.encode(message, shift)).toBe("a");
            });
        });
    });

    describe("given a message with spaces and punctuation", () => {
        beforeEach(() => {
            message = "this is a message with spaces and punctuation.";
            shift = 13;
        });

        it("does not shift the spaces and punctuation",  () => {
            expect(CeaserCipher.encode(message, shift)).toBe("guvf vf n zrffntr jvgu fcnprf naq chapghngvba.");
        });
    });

    describe("given a John Muir quote", () => {
        beforeEach(() => {
            message = "Who wouldn’t be a mountaineer! Up here all the world’s prizes seem nothing.";
            shift = 1;
        });

        it("encodes the capital letters, too", () => {
            expect(CeaserCipher.encode(message, shift)).toBe("Xip xpvmeo’u cf b npvoubjoffs! Vq ifsf bmm uif xpsme’t qsjaft tffn opuijoh.");
        });
    });

    describe("given the wikipedia example", () => {
        beforeEach(() => {
            // https://en.wikipedia.org/wiki/Caesar_cipher
            message = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            encrypted = "XYZABCDEFGHIJKLMNOPQRSTUVW";
            shift = 23;
        });

        it("encodes the alphabet as given with a right shift of 23", () => {
            expect(CeaserCipher.encode(message, shift)).toBe(encrypted);
        });

        it("decodes the encrypted example with a left shift of 23", () => {
            expect(CeaserCipher.encode(encrypted, -shift)).toBe(message);
        });
    });
});
