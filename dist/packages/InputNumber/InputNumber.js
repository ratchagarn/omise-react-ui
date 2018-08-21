'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: inline-block;\n'], ['\n  position: relative;\n  display: inline-block;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: ', ';\n  padding: ', ';\n  border: 1px solid #CCC;\n  font-size: 14px;\n  border-radius: 2px;\n  outline: none;\n  transition: .2s;\n'], ['\n  width: ', ';\n  padding: ', ';\n  border: 1px solid #CCC;\n  font-size: 14px;\n  border-radius: 2px;\n  outline: none;\n  transition: .2s;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 1px;\n  right: 1px;\n  width: 30px;\n  height: calc(100% - 2px);\n  border-left: 1px solid #CCC;\n\n  &:after {\n    content: \'\';\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    background-color: #CCC;\n  }\n'], ['\n  position: absolute;\n  top: 1px;\n  right: 1px;\n  width: 30px;\n  height: calc(100% - 2px);\n  border-left: 1px solid #CCC;\n\n  &:after {\n    content: \'\';\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    background-color: #CCC;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  background-color: #EAEAEA;\n  text-align: center;\n  cursor: pointer;\n  user-select: none;\n  transition: background-color .2s;\n\n  &:hover {\n    background-color: #EFEFEF;\n  }\n\n  &:last-child {\n    top: 50%;\n  }\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  background-color: #EAEAEA;\n  text-align: center;\n  cursor: pointer;\n  user-select: none;\n  transition: background-color .2s;\n\n  &:hover {\n    background-color: #EFEFEF;\n  }\n\n  &:last-child {\n    top: 50%;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                   * UI - InputNumber
                                                                                                                                                   * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                   */


var InputNumber = function InputNumber(_ref) {
  var name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange,
      step = _ref.step,
      maxLength = _ref.maxLength,
      showNav = _ref.showNav;

  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(Input, {
      type: 'text',
      name: name,
      value: value,
      maxLength: maxLength,
      onKeyPress: handleOnKeyPress,
      onChange: handleOnChange,
      showNav: showNav
    }),
    showNav && _react2.default.createElement(
      Control,
      null,
      _react2.default.createElement(
        Step,
        { onClick: handleOnStepClick('+', name) },
        '+'
      ),
      _react2.default.createElement(
        Step,
        { onClick: handleOnStepClick('-', name) },
        '-'
      )
    )
  );

  function handleOnKeyPress(e) {
    var n = String.fromCharCode(e.which);

    if (!/^\d*\.?\d*$/.test(n)) {
      e.preventDefault();
    }
  }

  function handleOnStepClick(type, name) {
    return function () {
      var newValue = value;

      if (type === '+') {
        newValue += parseFloat(step, 10);
      } else if (type === '-') {
        newValue -= parseFloat(step, 10);
      }

      var event = {
        target: {
          name: name,
          value: newValue
        }
      };

      handleOnChange(event);
    };
  }

  function handleOnChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;


    onChange(name, validateNumber(value));
  }
};

InputNumber.propTypes = {
  value: _propTypes2.default.number,
  defaultValue: _propTypes2.default.number,
  step: _propTypes2.default.number,
  maxLength: _propTypes2.default.number,
  showNav: _propTypes2.default.bool,
  onChange: _propTypes2.default.func
};

InputNumber.defaultProps = {
  step: 1,
  maxLength: 7,
  showNav: true,
  onChange: function onChange() {}
};

exports.default = InputNumber;


function validateNumber(n) {
  return isNaN(Number(n)) ? 0 : Number(n);
}

/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */
var Container = _styledComponents2.default.div(_templateObject);

var Input = _styledComponents2.default.input(_templateObject2, function (props) {
  return props.showNav ? '110px' : '70px';
}, function (props) {
  return props.showNav ? '7px 40px 7px 10px' : '7px 10px';
});

var Control = _styledComponents2.default.div(_templateObject3);

var Step = _styledComponents2.default.div(_templateObject4);