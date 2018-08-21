'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  border: 1px solid #CCC;\n  overflow: hidden;\n  border-radius: 5px;\n'], ['\n  display: inline-block;\n  border: 1px solid #CCC;\n  overflow: hidden;\n  border-radius: 5px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n\n  &:last-child button {\n    border-bottom: 0;\n  }\n'], ['\n  display: block;\n\n  &:last-child button {\n    border-bottom: 0;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: inline-block;\n  float: left;\n\n  &:last-child button {\n    border-right: 0;\n  }\n'], ['\n  display: inline-block;\n  float: left;\n\n  &:last-child button {\n    border-right: 0;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: relative;\n  ', '\n'], ['\n  position: relative;\n  ', '\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  opacity: 0;\n  cursor: pointer;\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  opacity: 0;\n  cursor: pointer;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: inline-block;\n  width: ', ';\n  padding: 8px 15px;\n  border: 0;\n  border-right: ', ';\n  border-bottom: ', ';\n  background-color: ', ';\n  color: ', ';\n  font-size: 14px;\n  cursor: pointer;\n  outline: none;\n  transition: background-color .2s;\n'], ['\n  display: inline-block;\n  width: ', ';\n  padding: 8px 15px;\n  border: 0;\n  border-right: ', ';\n  border-bottom: ', ';\n  background-color: ', ';\n  color: ', ';\n  font-size: 14px;\n  cursor: pointer;\n  outline: none;\n  transition: background-color .2s;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * UI - ButtonGroup
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var ButtonGroup = function (_Component) {
  _inherits(ButtonGroup, _Component);

  function ButtonGroup(props) {
    _classCallCheck(this, ButtonGroup);

    var _this = _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).call(this, props));

    _this.handleOnChange = function (e) {
      var name = e.target.name;

      var value = e.target.getAttribute('data-value');

      _this.setState({ selectedValue: value }, function () {
        _this.props.onChange(name, value);
      });
    };

    _this.state = {
      selectedValue: props.defaultValue
    };
    return _this;
  }

  _createClass(ButtonGroup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          name = _props.name,
          items = _props.items,
          vertical = _props.vertical;
      var selectedValue = this.state.selectedValue;


      var groups = items.map(function (item, i) {
        var selected = item.value === selectedValue;

        return _react2.default.createElement(
          Wrapper,
          { key: i, vertical: vertical },
          _react2.default.createElement(
            Button,
            {
              name: name,
              selected: selected,
              vertical: vertical,
              onClick: _this2.handleOnChange,
              'data-value': item.value },
            item.text
          )
        );
      });

      return _react2.default.createElement(
        Container,
        null,
        groups
      );
    }
  }]);

  return ButtonGroup;
}(_react.Component);

ButtonGroup.propTypes = {
  name: _propTypes2.default.string.isRequired,
  items: _propTypes2.default.array,
  vertical: _propTypes2.default.bool,
  defaultValue: _propTypes2.default.any,
  onChange: _propTypes2.default.func
};
ButtonGroup.defaultProps = {
  name: '',
  items: [],
  vertical: false,
  defaultValue: '',
  onChange: function onChange() {}
};
exports.default = ButtonGroup;

/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */

var Container = _styledComponents2.default.div(_templateObject);

var styleVertical = (0, _styledComponents.css)(_templateObject2);
var styleHorizontal = (0, _styledComponents.css)(_templateObject3);

var Wrapper = _styledComponents2.default.label(_templateObject4, function (_ref) {
  var vertical = _ref.vertical;
  return vertical ? styleVertical : styleHorizontal;
});

var InputRadio = _styledComponents2.default.input.attrs({
  type: 'radio'
})(_templateObject5);

var Button = _styledComponents2.default.button(_templateObject6, function (props) {
  return props.vertical ? '100%' : 'auto';
}, function (props) {
  return props.vertical ? null : '1px solid #CCC';
}, function (props) {
  return props.vertical ? '1px solid #CCC' : null;
}, function (props) {
  return props.selected ? 'blue' : 'white';
}, function (props) {
  return props.selected ? 'white' : 'inherit';
});