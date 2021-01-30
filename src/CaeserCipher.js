const LENGTH_OF_ALPHABET = 26;
const ASCII_START = { UPPERCASE: 65, LOWERCASE: 97};

CaeserCipher = {
    encode: (string, shift) => {
        const shiftCharacters = (character) => {
            const asciiCode = character.charCodeAt(0);
            const asciiStart = asciiCode >= ASCII_START.LOWERCASE ? ASCII_START.LOWERCASE : ASCII_START.UPPERCASE;
            const asciiCodeShifted = (asciiCode + shift - asciiStart) % LENGTH_OF_ALPHABET + asciiStart;

            return String.fromCharCode(asciiCodeShifted);
        }

        return string.replace(/[a-z]/ig, shiftCharacters);
    },
};

module.exports = CaeserCipher;
