CaeserCypher = {
    encode: (string, shift) => {
        const encodedString = String.fromCharCode(string.charCodeAt(0) + shift);

        return encodedString;
    }
}

module.exports = CaeserCypher;
