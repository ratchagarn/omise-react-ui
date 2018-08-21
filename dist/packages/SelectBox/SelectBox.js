'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                             * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                             * UI - SelectBox
                                                                                                                                                                                                                             * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                             */


var SelectBox = function SelectBox(_ref) {
  var name = _ref.name,
      onChange = _ref.onChange,
      options = _ref.options,
      disabled = _ref.disabled,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ['name', 'onChange', 'options', 'disabled', 'className']);

  return _react2.default.createElement(_reactSelect2.default, _extends({
    name: name,
    className: className,
    onChange: onChange,
    options: options,
    isDisabled: disabled
  }, restProps));
};

exports.default = SelectBox;