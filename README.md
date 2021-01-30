# caeser-cipher
A simple [Caeser Cipher](https://en.wikipedia.org/wiki/Caesar_cipher) library that allows you to encode a message with a right shift value.

For example, given the letter "A" with a right shift of 1, "A" would become "B".

## Usage

```javascript
const CaeserCipher = require("ceaser-cipher");

CaeserCipher.encode("A", 1); // right shift
// "B"

CaeserCipher.encode("A", -1); // left shift
// "Z"

CaeserCipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 23);
// "XYZABCDEFGHIJKLMNOPQRSTUVW"
```

## Installation

```shell
npm install --save bzitzow/caeser-cipher#main
```

## Contributing

### Clone the project

```
git clone https://github.com/bzitzow/caeser-cipher.git
cd caeser-cipher
```

### Run the tests

```shell
npm run test
```

or, to run the test watcher:
```
npm run test:watch
```

## Author
Brian Zitzow <bzitzow@gmail.com>
