const lengthOfAlphabet = 26;
const asciiStart = 97;

CaeserCypher = {
    encode: (string, shift) => {
        const shiftCharacters = (character) => {
            const asciiCode = character.charCodeAt(0);
            const asciiCodeShifted = (asciiCode + shift - asciiStart) % lengthOfAlphabet + asciiStart;

            return String.fromCharCode(asciiCodeShifted);
        }

        return string.replace(/[a-z]/g, shiftCharacters);
    },
};

module.exports = CaeserCypher;
