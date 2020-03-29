const {Transform} = require('stream');

module.exports = {
    transformStream: (codec) => {
        return new Transform({
            transform(chunk, encoding, callback) {
                callback(null, codec(chunk));
            },
        });
    },
};
