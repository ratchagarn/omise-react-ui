'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  visibility: ', ';\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: ', ';\n  transition: ', ';\n'], ['\n  visibility: ', ';\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: ', ';\n  transition: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: ', ';\n  background-color: black;\n  opacity: ', ';\n  transition: opacity .2s;\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: ', ';\n  background-color: black;\n  opacity: ', ';\n  transition: opacity .2s;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: ', ';\n  width: 600px;\n  padding: 20px;\n  background-color: white;\n  border-radius: 4px;\n  opacity: ', ';\n  box-shadow: 0 0 16px rgba(255, 255, 255, .4);\n  transform: ', ';\n  transition: ', 's cubic-bezier(0.175, 0.885, 0.320, 1.275);\n'], ['\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: ', ';\n  width: 600px;\n  padding: 20px;\n  background-color: white;\n  border-radius: 4px;\n  opacity: ', ';\n  box-shadow: 0 0 16px rgba(255, 255, 255, .4);\n  transform: ', ';\n  transition: ', 's cubic-bezier(0.175, 0.885, 0.320, 1.275);\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 16px;\n  height: 16px;\n  background-color: transparent;\n  font-size: 16px;\n  line-height: 16px;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 2px;\n  transition: .2s;\n\n  &:hover {\n    background-color: #EFEFEF;\n  }\n'], ['\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 16px;\n  height: 16px;\n  background-color: transparent;\n  font-size: 16px;\n  line-height: 16px;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 2px;\n  transition: .2s;\n\n  &:hover {\n    background-color: #EFEFEF;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * UI - Modal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var ESC_KEY = 27;
var ANIMATION_DELAY = 300;

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.handleOnOverlayClick = function () {
      if (_this.props.shouldCloseOnOverlayClick) {
        _this.props.onClose();
      }
    };

    _this.handleOnCloseClick = function () {
      _this.props.onClose();
    };

    _this.handleOnKeyDown = function (event) {
      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
        event.stopPropagation();
        _this.props.onClose();
      }
    };

    _this.el = document.createElement('div');
    _this.el.className = 'Modal';
    _this.appElement = props.appElement ? document.querySelector(props.appElement) : document.body;

    _this.Container = null;
    _this.animationTimer = null;
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.appElement.appendChild(this.el);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.appElement.removeChild(this.el);
      clearTimeout(this.animationTimer);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var isOpen = nextProps.isOpen;

      if (isOpen === this.props.isOpen) {
        return;
      }

      if (isOpen) {
        this.animationTimer = setTimeout(function () {
          _this2.props.onAfterOpen();
          _this2.Container.focus();
        }, ANIMATION_DELAY);
      } else {
        this.animationTimer = setTimeout(function () {
          _this2.props.onAfterClose();
        }, ANIMATION_DELAY);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          isOpen = _props.isOpen,
          showClose = _props.showClose,
          children = _props.children;


      return (0, _reactDom.createPortal)(_react2.default.createElement(
        Container,
        {
          innerRef: function innerRef(node) {
            return _this3.Container = node;
          },
          tabIndex: '-1',
          isOpen: isOpen,
          onKeyDown: this.handleOnKeyDown },
        _react2.default.createElement(Overlay, { isOpen: isOpen, onClick: this.handleOnOverlayClick }),
        _react2.default.createElement(
          Body,
          { isOpen: isOpen },
          showClose && _react2.default.createElement(
            Close,
            { onClick: this.handleOnCloseClick },
            '\xD7'
          ),
          children
        )
      ), this.el);
    }
  }]);

  return Modal;
}(_react2.default.Component);

Modal.defaultProps = {
  isOpen: false,
  showClose: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  onClose: function onClose() {},
  onAfterOpen: function onAfterOpen() {},
  onAfterClose: function onAfterClose() {}
};
exports.default = Modal;

/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */

var baseZindex = 9999;

var Container = _styledComponents2.default.div(_templateObject, function (props) {
  return props.isOpen ? 'visible' : 'hidden';
}, function (props) {
  return props.isOpen ? 99999 : -99999;
}, function (props) {
  return props.isOpen ? null : 'all .2s .4s';
});

var Overlay = _styledComponents2.default.div(_templateObject2, baseZindex - 1, function (props) {
  return props.isOpen ? .4 : 0;
});

var Body = _styledComponents2.default.div(_templateObject3, baseZindex, function (props) {
  return props.isOpen ? 1 : 0;
}, function (props) {
  return props.isOpen ? 'translateX(-50%) translateY(-50%) scale(1)' : 'translateX(-50%) translateY(-50%) scale(.6)';
}, ANIMATION_DELAY / 1000);

var Close = _styledComponents2.default.span(_templateObject4);