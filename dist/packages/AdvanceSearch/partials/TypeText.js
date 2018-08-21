'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _UI = require('./UI');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - AdvanceSearch/partials/TypeText
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
var TypeText = function TypeText(_ref) {
  var placeholder = _ref.placeholder,
      value = _ref.value,
      _onChange = _ref.onChange;
  return _react2.default.createElement(_UI.Input, {
    type: 'text',
    placeholder: placeholder,
    value: value,
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    }
  });
};

exports.default = TypeText;