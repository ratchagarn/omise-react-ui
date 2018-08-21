'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: inline-block;\n'], ['\n  position: relative;\n  display: inline-block;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: \'relative\';\n  z-index: 2;\n  min-width: 200px;\n  margin-top: 0;\n  padding-right: 25px;\n  cursor: pointer;\n  user-select: none;\n'], ['\n  position: \'relative\';\n  z-index: 2;\n  min-width: 200px;\n  margin-top: 0;\n  padding-right: 25px;\n  cursor: pointer;\n  user-select: none;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid #666;\n  opacity: ', ';\n  cursor: pointer;\n  user-select: none;\n  transform: ', ';\n  transition: .2s;\n'], ['\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid #666;\n  opacity: ', ';\n  cursor: pointer;\n  user-select: none;\n  transform: ', ';\n  transition: .2s;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: ', ';\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  user-select: none;\n  cursor: pointer;\n'], ['\n  display: ', ';\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  user-select: none;\n  cursor: pointer;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  visibility: ', ';\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: ', ';\n  width: 100%;\n  max-height: 126px;\n  margin-top: 5px;\n  background-color: white;\n  border-radius: 2px;\n  overflow-y: auto;\n  opacity: ', ';\n  box-shadow: 0 0 10px rgba(0, 0, 0, .1);\n  transition: .2s;\n'], ['\n  visibility: ', ';\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: ', ';\n  width: 100%;\n  max-height: 126px;\n  margin-top: 5px;\n  background-color: white;\n  border-radius: 2px;\n  overflow-y: auto;\n  opacity: ', ';\n  box-shadow: 0 0 10px rgba(0, 0, 0, .1);\n  transition: .2s;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  position: relative;\n  padding: 10px;\n  background-color: transparent;\n  color: ', ';\n  cursor: pointer;\n  user-select: none;\n  transition: background-color .2s;\n\n  &:hover {\n    background-color: #F9F9F9;\n  }\n\n  &:before {\n    content: \'\u2713\';\n    float: right;\n    color: blue;\n    opacity: ', ';\n    transition: opacity .2s .2s;\n  }\n'], ['\n  position: relative;\n  padding: 10px;\n  background-color: transparent;\n  color: ', ';\n  cursor: pointer;\n  user-select: none;\n  transition: background-color .2s;\n\n  &:hover {\n    background-color: #F9F9F9;\n  }\n\n  &:before {\n    content: \'\u2713\';\n    float: right;\n    color: blue;\n    opacity: ', ';\n    transition: opacity .2s .2s;\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  margin: 5px 10px;\n  height: 1px;\n  background-color: #CCC;\n'], ['\n  margin: 5px 10px;\n  height: 1px;\n  background-color: #CCC;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextField = require('../TextField');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * UI - Checkbox
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.handleOnOpen = function () {
      _this.setState(function (_ref) {
        var open = _ref.open;
        return { open: !open };
      });
    };

    _this.handleCloseDropdown = function () {
      _this.setState({ open: false });
    };

    _this.handleOnSelectItem = function (e) {
      var _this$props = _this.props,
          options = _this$props.options,
          name = _this$props.name,
          onChange = _this$props.onChange;

      var index = e.target.getAttribute('data-index');
      var value = options[index].value;

      _this.handleCloseDropdown();
      onChange(name, value);
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          options = _props.options,
          value = _props.value,
          disabled = _props.disabled,
          helpMessage = _props.helpMessage,
          errorMessage = _props.errorMessage,
          restProps = _objectWithoutProperties(_props, ['options', 'value', 'disabled', 'helpMessage', 'errorMessage']);

      var open = this.state.open;


      var dropdownItems = options.map(function (item, i) {
        var selected = item.value === value;

        if (item.divider) {
          return _react2.default.createElement(DropdownDivider, { key: i });
        }

        return _react2.default.createElement(
          DropdownItem,
          {
            key: i,
            'data-index': i,
            selected: selected,
            onClick: _this2.handleOnSelectItem },
          item.text
        );
      });

      return _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          InputWrapper,
          null,
          _react2.default.createElement(EnchanceTextField, _extends({}, restProps, {
            disabled: disabled,
            onClick: this.handleOnOpen,
            onChange: this.handleOnChange,
            value: value,
            readOnly: true
          })),
          _react2.default.createElement(
            DropdownList,
            { open: open },
            dropdownItems
          ),
          _react2.default.createElement(Caret, { open: open, disabled: disabled })
        ),
        _react2.default.createElement(
          _TextField.HelpMessage,
          { show: helpMessage && !errorMessage },
          helpMessage
        ),
        _react2.default.createElement(
          _TextField.ErrorMessage,
          { show: errorMessage },
          errorMessage
        ),
        _react2.default.createElement(Backdrop, { open: open, onClick: this.handleCloseDropdown })
      );
    }
  }]);

  return Dropdown;
}(_react.Component);

Dropdown.defaultProps = {
  name: null,
  options: [],
  value: '',
  onChange: function onChange() {}
};
exports.default = Dropdown;

/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */

var Container = _styledComponents2.default.div(_templateObject);

var InputWrapper = _styledComponents2.default.div(_templateObject);

var EnchanceTextField = (0, _styledComponents2.default)(_TextField.Input)(_templateObject2);

var Caret = _styledComponents2.default.span(_templateObject3, function (props) {
  return props.disabled ? '.4' : null;
}, function (props) {
  return props.open ? 'rotate(180deg)' : null;
});

var Backdrop = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.open ? 'block' : 'none';
});

var DropdownList = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.open ? 'visible' : 'hidden';
}, function (props) {
  return props.open ? 3 : -1;
}, function (props) {
  return props.open ? 1 : 0;
});

var DropdownItem = _styledComponents2.default.div(_templateObject6, function (props) {
  return props.selected ? 'blue' : 'inherit';
}, function (props) {
  return props.selected ? 1 : 0;
});

var DropdownDivider = _styledComponents2.default.div(_templateObject7);