const CRYPT_FIT_UPPERCASE = /[A-Z]/;
const CODE_CHAR_A_LOWERCASE = 97;
const CRYPT_FIT_LOWERCASE = /[a-z]/;
const CODE_CHAR_A_UPPERCASE = 65;
const ALPHABET_LENGTH = 26;

function codeForChar(item, shift, alphabetStartCode) {
    return (item - alphabetStartCode + shift) % ALPHABET_LENGTH + alphabetStartCode;
}

function caesarCodec(source, shift, action) {
    const codecShift = action === 'encode' ? shift : (ALPHABET_LENGTH - shift);

    let resultString = '';

    [...source].forEach(item => {
        const charItem = String.fromCharCode(item);

        if (CRYPT_FIT_UPPERCASE.test(charItem)) {
            resultString += String.fromCharCode(codeForChar(item, codecShift, CODE_CHAR_A_UPPERCASE));
        } else if (CRYPT_FIT_LOWERCASE.test(charItem)) {
            resultString += String.fromCharCode(codeForChar(item, codecShift, CODE_CHAR_A_LOWERCASE));
        } else {
            resultString += String.fromCharCode(item);
        }
    });

    return resultString;
}

module.exports = {
    caesarCodec,
};
