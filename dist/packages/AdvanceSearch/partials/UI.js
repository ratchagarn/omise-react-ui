'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Choice = exports.Input = exports.InputStyle = exports.Col = exports.Table = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: table;\n'], ['\n  display: table;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: ', ';\n  min-width: 200px;\n  padding-right: 8px;\n  vertical-align: middle;\n\n  &:last-child {\n    padding-right: none;\n  }\n'], ['\n  display: ', ';\n  min-width: 200px;\n  padding-right: 8px;\n  vertical-align: middle;\n\n  &:last-child {\n    padding-right: none;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: inline-block;\n  margin-right: 5px;\n  padding: 5px 10px;\n  background-color: ', ';\n  color: ', ';\n  cursor: pointer;\n  user-select: none;\n  border-radius: 4px;\n  transition: .2s;\n\n  &:hover {\n    background-color: #2761E8;\n    color: white;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n'], ['\n  display: inline-block;\n  margin-right: 5px;\n  padding: 5px 10px;\n  background-color: ', ';\n  color: ', ';\n  cursor: pointer;\n  user-select: none;\n  border-radius: 4px;\n  transition: .2s;\n\n  &:hover {\n    background-color: #2761E8;\n    color: white;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                   * UI - AdvanceSearch/partials/UI
                                                                                                                                                   * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                   */


var Table = exports.Table = _styledComponents2.default.div(_templateObject);

var Col = exports.Col = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.hide ? 'none' : 'table-cell';
});

var InputStyle = exports.InputStyle = '\n  display: block;\n  width: 100%;\n  height: 38px;\n  padding: 4px 8px;\n  border: 1px solid hsl(0, 0%, 80%);\n  background-color: hsl(0, 0%, 98%);\n  font-size: 14px;\n  border-radius: 4px;\n  outline: none;\n  transition: .2s;\n\n  &:focus {\n    border-color: #2684FF;\n    box-shadow: 0 0 0 1px #2684FF;\n  }\n';
var Input = exports.Input = _styledComponents2.default.input(_templateObject3, InputStyle);

var Choice = exports.Choice = _styledComponents2.default.span(_templateObject4, function (props) {
  return props.active ? '#2761E8' : 'transparent';
}, function (props) {
  return props.active ? 'white' : null;
});