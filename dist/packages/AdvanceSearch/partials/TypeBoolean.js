'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n'], ['\n  position: relative;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _UI = require('./UI');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * UI - AdvanceSearch/partials/TypeBoolean
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var TypeBoolean = function (_Component) {
  _inherits(TypeBoolean, _Component);

  function TypeBoolean(props) {
    _classCallCheck(this, TypeBoolean);

    var _this = _possibleConstructorReturn(this, (TypeBoolean.__proto__ || Object.getPrototypeOf(TypeBoolean)).call(this, props));

    _this.handleOnChoiceClick = function (value) {
      return function () {
        _this.setState({ yes: value }, function () {
          _this.props.onChange(value);
        });
      };
    };

    _this.state = {
      yes: props.value
    };
    return _this;
  }

  _createClass(TypeBoolean, [{
    key: 'render',
    value: function render() {
      var yes = this.state.yes;
      var value = this.props.value;


      return _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          _UI.Choice,
          {
            active: yes,
            onClick: this.handleOnChoiceClick(true) },
          'YES'
        ),
        _react2.default.createElement(
          _UI.Choice,
          {
            active: !yes,
            onClick: this.handleOnChoiceClick(false) },
          'NO'
        )
      );
    }
  }]);

  return TypeBoolean;
}(_react.Component);

exports.default = TypeBoolean;

/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */

var Container = _styledComponents2.default.div(_templateObject);