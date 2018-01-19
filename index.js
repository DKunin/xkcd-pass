'use strict';

const uniqueRandomArray = require('unique-random-array');
const mnemonicWords = require('mnemonic-words');

module.exports = {
    all: mnemonicWords,
    generate: flags => {
        const { wc = 4, s = '_' } = flags;
        const words = new Array(wc)
            .fill()
            .map(() => uniqueRandomArray(mnemonicWords)());
        return words.join(s);
    }
};
