'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid #CCC;\n  text-align: right;\n'], ['\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid #CCC;\n  text-align: right;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Modal = require('../Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * UI - Confirm/index
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Confirm = function (_Component) {
  _inherits(Confirm, _Component);

  function Confirm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Confirm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Confirm.__proto__ || Object.getPrototypeOf(Confirm)).call.apply(_ref, [this].concat(args))), _this), _this.handleOnAnswer = function (answer) {
      return function () {
        _this.props.onAnswer(answer);
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Confirm, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpen = _props.isOpen,
          labelYes = _props.labelYes,
          labelNo = _props.labelNo,
          children = _props.children;


      return _react2.default.createElement(
        _Modal2.default,
        {
          isOpen: isOpen,
          showClose: false,
          shouldCloseOnEsc: false,
          shouldCloseOnOverlayClick: false },
        children,
        _react2.default.createElement(
          ContainerAnswer,
          null,
          _react2.default.createElement(
            _Button2.default,
            {
              type: 'primary',
              onClick: this.handleOnAnswer(true) },
            labelYes
          ),
          _react2.default.createElement(
            _Button2.default,
            {
              type: 'destructive',
              onClick: this.handleOnAnswer(false) },
            labelNo
          )
        )
      );
    }
  }]);

  return Confirm;
}(_react.Component);

Confirm.defaultProps = {
  isOpen: false,
  labelYes: 'Yes',
  labelNo: 'No',
  onAnswer: function onAnswer() {}
};
exports.default = Confirm;

/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */

var ContainerAnswer = _styledComponents2.default.div(_templateObject);