'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Helpers - utils
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/

var pickColorFromObj = exports.pickColorFromObj = function pickColorFromObj(obj, name) {
  return obj[name] ? obj[name] : obj['default'];
};

var pickSizeFromObj = exports.pickSizeFromObj = function pickSizeFromObj(obj, name) {
  return obj[name] ? obj[name] : obj['md'];
};

var pickDataFromObj = exports.pickDataFromObj = function pickDataFromObj(obj, defaultKey) {
  return function (name) {
    return obj[name] ? obj[name] : obj[defaultKey];
  };
};

var capitalizeFirstLetter = exports.capitalizeFirstLetter = function capitalizeFirstLetter(str) {
  return '' + str.charAt(0).toUpperCase() + str.slice(1);
};

var createExampleCode = exports.createExampleCode = function createExampleCode(code) {
  return code.trim();
};