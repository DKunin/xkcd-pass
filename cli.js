#!/usr/bin/env node
'use strict';

const meow = require('meow');
const mnemWords = require('./');

const cli = meow({
    help: [
        'Examples',
        '  $ xkcd-pass',
        '  deputy_attack_horror_index',
        '',
        '  $ xkcd-pass --all',
        '  abandon',
        '  ability',
        '  able',
        '  ...',
        '',
        'Options',
        '  --all Get all words instead of a random combibation',
        '  --wc <WORD_COUNT> Get different word count then default',
        '  --s <SEPARATOR> Set specific separator'
    ].join('\n')
});

if (cli.flags.all) {
    // eslint-disable-next-line
    console.log(mnemWords.all.join('\n'));
} else {
    // eslint-disable-next-line
    console.log(mnemWords.generate(cli.flags));
}
