"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - AdvanceSearch/helper
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

var getSchemaDataById = exports.getSchemaDataById = function getSchemaDataById(id, schema) {
  var data = schema.filter(function (item) {
    return item.id === id;
  });
  return data.length > 0 ? data[0] : {};
};

var createFilterKey = exports.createFilterKey = function createFilterKey(id, type) {
  return id + ":" + type;
};

var processFilterItemsEngine = exports.processFilterItemsEngine = function processFilterItemsEngine(filterItems) {
  return filterItems.map(function (item) {
    return item.id ? item.id + ":\"" + item.value + "\"" : null;
  });
};

var isNumber = exports.isNumber = function isNumber(n) {
  return (/^\d+(\.\d+)?$/.test(n)
  );
};