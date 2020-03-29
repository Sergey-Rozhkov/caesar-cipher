# Caesar cipher CLI tool

CLI tool for node.js that will encode and decode a text by Caesar cipher. RS School task.


### For start

Clone or download this repository for use CLI tool on your computer.

For installation modules:

```
npm i
```

For start use:

```
$ node index.js --shift <number> --action <encode || decode> [--input <path to input file>] [--output <path to output file>]
```

Options:

- -s, --shift: a shift **(requered option)**
- -i, --input: an input file **(requered option)**
- -o, --output: an output file
- -a, --action: an action encode/decode

### Demo

Use:

```bash
node index.js -s 7 -a encode

node index.js -s 8 -a encode -i path-to-file.txt

node index.js -s 8 -a encode -i path-to-file.txt -o path-to-result.txt
```
