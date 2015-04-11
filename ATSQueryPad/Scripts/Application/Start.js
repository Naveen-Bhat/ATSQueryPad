'use strict';

var azure = require('./Azure-Js-Sdk/azure-storage');

var tableService = azure.createTableService(
  '<storage name>',
  '<access key>');

var query = new azure.TableQuery()
  .top(5)
  .where('PartitionKey eq ?', '000dfd322571487193eaad420ca4bfd5');

tableService.queryEntities('<table name>', query, null, function (error, result, response) {
    if (!error) {
        // query was successful
        console.log('success');
    }
});