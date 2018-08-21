'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  height: 10px;\n  margin: ', ';\n  background-color: #EEE;\n  border-radius: 4px;\n\n  &:before {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: ', ';\n    height: 100%;\n    background-color: blue;\n    border-radius: 4px;\n    transition: width .2s;\n  }\n'], ['\n  position: relative;\n  height: 10px;\n  margin: ', ';\n  background-color: #EEE;\n  border-radius: 4px;\n\n  &:before {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: ', ';\n    height: 100%;\n    background-color: blue;\n    border-radius: 4px;\n    transition: width .2s;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                   * UI - Label
                                                                                                                                                   * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                   */


var maxWidth = function maxWidth(w) {
  return w > 100 ? 100 : w;
};

var ProgressBar = _styledComponents2.default.div(_templateObject, function (props) {
  return props.margin ? props.margin : 'auto';
}, function (props) {
  return props.value ? maxWidth(props.value) + '%' : 0;
});

exports.default = ProgressBar;