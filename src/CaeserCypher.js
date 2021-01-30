const lengthOfAlphabet = 26;
const asciiStart = 97;

CaeserCypher = {
    encode: (string, shift) => {
        const asciiCode = string.charCodeAt(0);
        const asciiCodeShifted = (asciiCode + shift - asciiStart) % lengthOfAlphabet + asciiStart;

        return String.fromCharCode(asciiCodeShifted);
    },
};

module.exports = CaeserCypher;
