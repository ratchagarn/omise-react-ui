'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorMessage = exports.HelpMessage = exports.Input = exports.inputTextStyle = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n'], ['\n  position: relative;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      border-color: red !important;\n    '], ['\n      border-color: red !important;\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: ', ';\n  margin-top: 5px;\n  color: #AAA;\n  font-size: 12px;\n'], ['\n  display: ', ';\n  margin-top: 5px;\n  color: #AAA;\n  font-size: 12px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: ', ';\n  margin-top: 5px;\n  color: red;\n  font-size: 12px;\n'], ['\n  display: ', ';\n  margin-top: 5px;\n  color: red;\n  font-size: 12px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                             * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                             * UI - Input
                                                                                                                                                                                                                             * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                             */


var TextField = function TextField(_ref) {
  var onChange = _ref.onChange,
      disabled = _ref.disabled,
      placeholder = _ref.placeholder,
      helpMessage = _ref.helpMessage,
      errorMessage = _ref.errorMessage,
      rest = _objectWithoutProperties(_ref, ['onChange', 'disabled', 'placeholder', 'helpMessage', 'errorMessage']);

  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(Input, _extends({
      type: 'text',
      onChange: onChange,
      disabled: disabled,
      placeholder: placeholder,
      helpMessage: helpMessage,
      errorMessage: errorMessage
    }, rest)),
    _react2.default.createElement(
      HelpMessage,
      { show: helpMessage && !errorMessage },
      helpMessage
    ),
    _react2.default.createElement(
      ErrorMessage,
      { show: errorMessage },
      errorMessage
    )
  );
};

TextField.propTypes = {
  placeholder: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  value: _propTypes2.default.string
};

exports.default = TextField;


var Container = _styledComponents2.default.div(_templateObject);

var inputTextStyle = exports.inputTextStyle = '\n  display: block;\n  width: 100%;\n  margin-top: ' + function (props) {
  return props.marginTop ? props.marginTop : '15px';
} + ';\n  padding: 0 0 8px 0;\n  border: 0;\n  border-bottom: 2px solid #CCC;\n  background: transparent;\n  font-size: 14px;\n  outline: none;\n  opacity: ' + function (props) {
  return props.disabled ? '.4' : null;
} + ';\n  transition: .2s;\n  ' + function (props) {
  return props.errorMessage && (0, _styledComponents.css)(_templateObject2);
} + '\n\n  &:focus {\n    border-color: blue;\n  }\n\n  &::-webkit-input-placeholder {\n    color: #AAA;\n  }\n  &::-moz-placeholder {\n    color: #AAA;\n  }\n  &:-ms-input-placeholder {\n    color: #AAA;\n  }\n  &:-moz-placeholder {\n    color: #AAA;\n  }\n';

var Input = exports.Input = _styledComponents2.default.input(_templateObject3, inputTextStyle);

var HelpMessage = exports.HelpMessage = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.show ? 'block' : 'none';
});

var ErrorMessage = exports.ErrorMessage = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.show ? 'block' : 'none';
});