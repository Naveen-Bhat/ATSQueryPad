﻿// 
// Copyright (c) Microsoft and contributors.  All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// 
// See the License for the specific language governing permissions and
// limitations under the License.
// 

// LICENSING NOTE: The original code is altered based on ATSQueryPad needs.

// Module dependencies.
var odataHandler = require('../internal/odatahandler');

exports = module.exports;

exports.serialize = function (tableName) {
  return JSON.stringify({ TableName: tableName });
};

exports.parse = function (response) {
  var result = null;
  if (response.body) {
    result = odataHandler.parseJsonTables(response.body);
  }

  return result;
};