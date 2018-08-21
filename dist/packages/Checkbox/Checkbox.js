'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  position: relative;\n  min-height: 12px;\n  margin-right: 4px;\n  padding-left: 10px;\n  user-select: none;\n'], ['\n  display: inline-block;\n  position: relative;\n  min-height: 12px;\n  margin-right: 4px;\n  padding-left: 10px;\n  user-select: none;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n\n  &:checked ~ span {\n    border-color: ', ';\n\n    &:after {\n      opacity: 1;\n    }\n  }\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n\n  &:checked ~ span {\n    border-color: ', ';\n\n    &:after {\n      opacity: 1;\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 14px;\n  width: 14px;\n  border: 1px solid #CCC;\n  background-color: ', ';\n  transition: .2s;\n\n  &:after {\n    content: \'\';\n    position: absolute;\n    top: 25%;\n    left: 25%;\n    width: 5px;\n    height: 10px;\n    border: solid ', ';;\n    border-width: 0 2px 2px 0;\n    opacity: 0;\n    transform: rotate(45deg) translateX(-25%) translateY(-25%);\n    transition: .2s;\n  }\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 14px;\n  width: 14px;\n  border: 1px solid #CCC;\n  background-color: ', ';\n  transition: .2s;\n\n  &:after {\n    content: \'\';\n    position: absolute;\n    top: 25%;\n    left: 25%;\n    width: 5px;\n    height: 10px;\n    border: solid ', ';;\n    border-width: 0 2px 2px 0;\n    opacity: 0;\n    transform: rotate(45deg) translateX(-25%) translateY(-25%);\n    transition: .2s;\n  }\n']);

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
                                                                                                                                                                                                                             * UI - Checkbox
                                                                                                                                                                                                                             * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                             */


var Checkbox = function Checkbox(_ref) {
  var disabled = _ref.disabled,
      checked = _ref.checked,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ['disabled', 'checked', 'onChange']);

  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(Input, _extends({
      type: 'checkbox',
      disabled: disabled,
      checked: checked,
      onChange: handleOnChange
    }, rest)),
    _react2.default.createElement(CheckMark, { disabled: disabled })
  );

  function handleOnChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value,
        checked = _event$target.checked;

    onChange(name, value, checked);
  }
};

Checkbox.defaultProps = {
  onChange: function onChange() {}
};

Checkbox.propTypes = {
  onChange: _propTypes2.default.func.isRequired
};

exports.default = Checkbox;


var Container = _styledComponents2.default.span(_templateObject);

var Input = _styledComponents2.default.input(_templateObject2, function (props) {
  return props.disabled ? '#CCC' : 'blue';
});

var CheckMark = _styledComponents2.default.span(_templateObject3, function (props) {
  return props.disabled ? '#CCC' : 'transparent';
}, function (props) {
  return props.disabled ? '#999' : 'blue';
});