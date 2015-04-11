'use strict';

var exports = module.exports;

exports.util = require('./azure-sdk-util');
exports.validate = require('./validate');
exports.StorageServiceClient = require('./services/storageserviceclient');
exports.WebResource = require('./webresource');
exports.Constants = require('./constants');
exports.edmType = require('./edmtype');
exports.ServiceClient = require('./services/serviceclient');
exports.HmacSha256Sign = require('./signing/hmacsha256sign');
exports.Logger = require('./logger');
exports.sr = require('./sr');