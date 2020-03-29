#!/usr/bin/env node

const {program} = require('commander');
const {pipeline} = require('stream');
const {outputStream} = require('./caesar-cipher-src/outputPipe');
const {transformStream} = require('./caesar-cipher-src/transformPipe');
const {caesarCodec} = require('./caesar-cipher-src/codec');
const {inputStream} = require('./caesar-cipher-src/inputPipe');

program
    .option('-s, --shift <shift>', 'a shift')
    .option('-i, --input <file>', 'an input file')
    .option('-o, --output <file>', 'an output file')
    .option('-a, --action <type>', 'an action encode/decode');

program.parse(process.argv);

const {shift, input, output, action} = program;

const shiftParam = parseInt(shift, 10);
const actionParam = action.toLowerCase();

pipeline(
    inputStream(input), // input file stream or stdin stream
    transformStream((chunk) => caesarCodec(chunk, shiftParam, actionParam)), // standard Transform stream or https://github.com/rvagg/through2
    outputStream(output), // output file stream or stdout stream
    (err) => {
        if (err) {
            console.error('Pipeline failed.', err);
            process.exit(1);
        } else {
            console.error('Pipeline succeeded');
        }
    },
);
