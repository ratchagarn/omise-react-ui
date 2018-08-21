'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  overflow: hidden;\n'], ['\n  display: inline-block;\n  overflow: hidden;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -9999;\n  visibility: hidden;\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -9999;\n  visibility: hidden;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 1;\n  display: inline-block;\n  width: 44px;\n  height: 24px;\n  ', '\n  border-radius: 12px;\n  cursor: pointer;\n  transition: .2s;\n'], ['\n  position: relative;\n  z-index: 1;\n  display: inline-block;\n  width: 44px;\n  height: 24px;\n  ', '\n  border-radius: 12px;\n  cursor: pointer;\n  transition: .2s;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n        background-color: #EFEFEF;\n      '], ['\n        background-color: #EFEFEF;\n      ']),
    _templateObject5 = _taggedTemplateLiteral(['\n        background-color: ', ';\n      '], ['\n        background-color: ', ';\n      ']),
    _templateObject6 = _taggedTemplateLiteral(['\n        background-color: #CCC;\n      '], ['\n        background-color: #CCC;\n      ']),
    _templateObject7 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 3px;\n  left: 4px;\n  width: 18px;\n  height: 18px;\n  background-color: ', ';\n  text-align: center;\n  border-radius: 50%;\n  transform: ', ';\n  transition: .2s;\n\n  &:before {\n    content: \'\u2713\';\n    color: ', ';\n    font-size: 12px;\n    opacity: ', ';\n    transition: .1s;\n  }\n'], ['\n  position: absolute;\n  top: 3px;\n  left: 4px;\n  width: 18px;\n  height: 18px;\n  background-color: ', ';\n  text-align: center;\n  border-radius: 50%;\n  transform: ', ';\n  transition: .2s;\n\n  &:before {\n    content: \'\u2713\';\n    color: ', ';\n    font-size: 12px;\n    opacity: ', ';\n    transition: .1s;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * UI - Switch
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var noop = function noop() {};

var Switch = function (_Component) {
  _inherits(Switch, _Component);

  function Switch(props) {
    _classCallCheck(this, Switch);

    var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

    _initialiseProps.call(_this);

    var checked = props.checked;


    _this.state = {
      checked: checked
    };
    return _this;
  }

  _createClass(Switch, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          disabled = _props.disabled;
      var checked = this.state.checked;


      return _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          SwitchButton,
          { disabled: disabled, checked: checked },
          _react2.default.createElement(SwitchButton.toggle, { disabled: disabled, checked: checked })
        ),
        _react2.default.createElement(Input, {
          type: 'checkbox',
          name: name,
          disabled: disabled,
          checked: checked,
          onChange: this.handleOnChange
        })
      );
    }
  }]);

  return Switch;
}(_react.Component);

Switch.defaultProps = {
  disabled: false,
  checked: false
};
Switch.propTypes = {
  name: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  checked: _propTypes2.default.bool,
  onChange: _propTypes2.default.func.isRequired
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleOnChange = function (e) {
    var _e$target = e.target,
        name = _e$target.name,
        checked = _e$target.checked;
    var onChange = _this2.props.onChange;


    _this2.setState({ checked: checked }, function () {
      (onChange || noop)({ name: name, value: checked });
    });
  };
};

exports.default = Switch;


var activeBgColor = 'green';

var Container = _styledComponents2.default.label(_templateObject);

var Input = _styledComponents2.default.input(_templateObject2);

var SwitchButton = _styledComponents2.default.div(_templateObject3, function (props) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject4);
  } else if (props.checked) {
    return (0, _styledComponents.css)(_templateObject5, activeBgColor);
  } else {
    return (0, _styledComponents.css)(_templateObject6);
  }
});

SwitchButton.toggle = _styledComponents2.default.span(_templateObject7, function (props) {
  return props.disabled ? '#CCC' : 'white';
}, function (props) {
  return props.checked ? 'translateX(100%)' : 'translateX(0)';
}, function (props) {
  return props.disabled ? '#AAA' : activeBgColor;
}, function (props) {
  return props.checked ? 1 : 0;
});