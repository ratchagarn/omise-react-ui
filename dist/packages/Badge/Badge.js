'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  margin-right: 4px;\n  padding: ', ';\n  background-color: ', ';\n  color: ', ';\n  font-size: ', ';\n  text-transform: uppercase;\n  border-radius: ', ';\n  transition: background-color .2s, color .2s;\n'], ['\n  display: inline-block;\n  margin-right: 4px;\n  padding: ', ';\n  background-color: ', ';\n  color: ', ';\n  font-size: ', ';\n  text-transform: uppercase;\n  border-radius: ', ';\n  transition: background-color .2s, color .2s;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../helpers/utils');

var _settings = require('./settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                  * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                  * UI - Badge
                                                                                                                                                  * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                  */


var pickColor = (0, _utils.pickDataFromObj)(_settings.color, 'gray');
var pickSize = (0, _utils.pickDataFromObj)(_settings.size, 'md');

var Badge = _styledComponents2.default.span(_templateObject, function (props) {
  return pickSize(props.size).padding;
}, function (props) {
  return pickColor(props.color).bg;
}, function (props) {
  return pickColor(props.color).color;
}, function (props) {
  return pickSize(props.size).font;
}, function (props) {
  return pickSize(props.size).radius;
});

Badge.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.string
};

exports.default = Badge;