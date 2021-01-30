const LENGTH_OF_ALPHABET = 26;
const ASCII_START = { UPPERCASE: 65, LOWERCASE: 97};

CaeserCipher = {
    /**
     * Encode/Decode a message via a Caeser Cipher.
     *
     * @param {String} message the message to be encoded via the cipher.
     * @param {Number} shift the number to shift values for encoding. A negative number will shift left. A positive will shift right.
     *
     * @returns {String} an string encoded via the Caeser Cipher with the given shift value.
     */
    encode: (message, shift) => {
        // Adjust the shift to positive if it is provided as negative (left shift)
        shift = (Math.sign(shift) === -1) ? shift + LENGTH_OF_ALPHABET : shift;

        const shiftCharacters = (character) => {
            const asciiCode = character.charCodeAt(0);
            const asciiStart = asciiCode >= ASCII_START.LOWERCASE ? ASCII_START.LOWERCASE : ASCII_START.UPPERCASE;
            const asciiCodeShifted = ((asciiCode + shift - asciiStart) % LENGTH_OF_ALPHABET) + asciiStart;

            return String.fromCharCode(asciiCodeShifted);
        }

        return message.replace(/[a-z]/ig, shiftCharacters);
    },
};

module.exports = CaeserCipher;
