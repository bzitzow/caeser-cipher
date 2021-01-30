CaeserCypher = {
    encode: (string) => {
        const key = 1;
        const encodedString = String.fromCharCode(string.charCodeAt(0) + key);

        return encodedString;
    }
}

module.exports = CaeserCypher;
