
/**
* Creates a new HmacSHA256Sign object.
*
* @constructor
*/
function HmacSha256Sign(accessKey) {
    this._accessKey = accessKey;
}

/**
* Computes a signature for the specified string using the HMAC-SHA256 algorithm.
*
* @param {string} stringToSign The UTF-8-encoded string to sign.
* @return A String that contains the HMAC-SHA256-encoded signature.
*/
HmacSha256Sign.prototype.sign = function (stringToSign) {
    // Encoding the Signature
    // Signature=Base64(HMAC-SHA256(UTF8(StringToSign)))

    return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(CryptoJS.enc.Utf8.parse(stringToSign), CryptoJS.enc.Base64.parse(this._accessKey)));;
};

module.exports = HmacSha256Sign;