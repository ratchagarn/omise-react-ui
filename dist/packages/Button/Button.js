'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: ', ';\n  width: ', ';\n  margin-right: 4px;\n  color: ', ';\n  font-size: ', ';\n  opacity: ', ';\n  outline: none;\n  cursor: pointer;\n  border-radius: 2px;\n  transition: .2s;\n\n  ', '\n'], ['\n  display: ', ';\n  width: ', ';\n  margin-right: 4px;\n  color: ', ';\n  font-size: ', ';\n  opacity: ', ';\n  outline: none;\n  cursor: pointer;\n  border-radius: 2px;\n  transition: .2s;\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n        padding: 0;\n        border: 1px solid transparent;\n        background-color: transparent;\n      '], ['\n        padding: 0;\n        border: 1px solid transparent;\n        background-color: transparent;\n      ']),
    _templateObject3 = _taggedTemplateLiteral(['\n        padding: ', ';\n        border: 1px solid ', ';\n        background-color: ', ';\n\n        &:hover {\n          background-color: ', ';\n        }\n      '], ['\n        padding: ', ';\n        border: 1px solid ', ';\n        background-color: ', ';\n\n        &:hover {\n          background-color: ', ';\n        }\n      ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _utils = require('../../helpers/utils');

var _ButtonSettings = require('./ButtonSettings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                  * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                  * UI - Button
                                                                                                                                                  * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                  */


var Button = _styledComponents2.default.button(_templateObject, function (props) {
  return props.block ? 'block' : 'inline-block';
}, function (props) {
  return props.block ? '100%' : 'auto';
}, function (props) {
  return (0, _utils.pickColorFromObj)(_ButtonSettings.colorText, props.type);
}, function (props) {
  return (0, _utils.pickSizeFromObj)(_ButtonSettings.buttonFontSize, props.size);
}, function (props) {
  return props.disabled ? '.6' : null;
}, function (_ref) {
  var type = _ref.type,
      size = _ref.size;

  if (type === 'link') {
    return (0, _styledComponents.css)(_templateObject2);
  } else {
    return (0, _styledComponents.css)(_templateObject3, (0, _utils.pickSizeFromObj)(_ButtonSettings.buttonPadding, size), (0, _polished.darken)(.2, (0, _utils.pickColorFromObj)(_ButtonSettings.colorBg, type)), (0, _utils.pickColorFromObj)(_ButtonSettings.colorBg, type), function (props) {
      return (0, _polished.darken)(.1, (0, _utils.pickColorFromObj)(_ButtonSettings.colorBg, props.type));
    });
  }
});

Button.propTypes = {
  type: _propTypes2.default.string,
  size: _propTypes2.default.string
};

exports.default = Button;