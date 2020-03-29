const fs = require('fs');
const {EOL} = require('os');

module.exports = {
    inputStream: (path = '') => {
        if (path === '') {
            return process.stdin;
        } else {
            if (!fs.existsSync(path)) {
                process.stderr.write('file does not exist' + EOL);
                process.exit(1);
            }

            try {
                fs.accessSync(path, fs.constants.R_OK);
            } catch (err) {
                process.stderr.write('no access' + EOL);
            }

            return fs.createReadStream(path);
        }
    },
};
