var exports = module.exports;

var azureCommon = require('./azure-common');

exports.Constants = azureCommon.Constants;
exports.StorageServiceClient = azureCommon.StorageServiceClient;
exports.Logger = azureCommon.Logger;
exports.WebResource = azureCommon.WebResource;
exports.Validate = azureCommon.validate;

var TableService = require('./tableservice');

exports.TableService = TableService;
exports.TableQuery = require('./tablequery');

/**
* Creates a new {@link TableService} object using the host Uri and the SAS credentials provided.
* 
* @param {string|object} host                         The host address. To define primary only, pass a string. 
*                                                     Otherwise 'host.primaryHost' defines the primary host and 'host.secondaryHost' defines the secondary host.
* @param {string} sasToken                            The Shared Access Signature token.
* @return {TableService}                              A new TableService object with the SAS credentials.
*/
exports.createTableServiceWithSas = function (hostUri, sasToken) {
    return new TableService(null, null, hostUri, sasToken);
};

/**
* Creates a new {@link TableService} object.
* If no storageaccount or storageaccesskey are provided, the AZURE_STORAGE_CONNECTION_STRING and then the AZURE_STORAGE_ACCOUNT and AZURE_STORAGE_ACCESS_KEY 
* environment variables will be used.
*
* @param {string} [storageAccountOrConnectionString]  The storage account or the connection string.
* @param {string} [storageAccessKey]                  The storage access key.
* @param {string|object} [host]                       The host address. To define primary only, pass a string. 
*                                                     Otherwise 'host.primaryHost' defines the primary host and 'host.secondaryHost' defines the secondary host.
* @return {TableService}                              A new TableService object.
*
*/
exports.createTableService = function (storageAccountOrConnectionString, storageAccessKey, host) {
    return new TableService(storageAccountOrConnectionString, storageAccessKey, host);
};

