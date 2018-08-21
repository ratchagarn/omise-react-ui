'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n'], ['\n  position: relative;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -9999;\n  visibility: hidden;\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -9999;\n  visibility: hidden;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SelectBox = require('../../SelectBox');

var _SelectBox2 = _interopRequireDefault(_SelectBox);

var _Tooltip = require('../../Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * UI - AdvanceSearch/partials/TypeSelect
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var TypeSelect = function (_Component) {
  _inherits(TypeSelect, _Component);

  function TypeSelect(props) {
    _classCallCheck(this, TypeSelect);

    var _this = _possibleConstructorReturn(this, (TypeSelect.__proto__ || Object.getPrototypeOf(TypeSelect)).call(this, props));

    _this.handleOnChange = function (data) {
      _this.setState({ tooltipTitle: data.label }, function () {
        _this.props.onChange(data);
        _this.handleTooltip();
      });
    };

    _this.handleTooltip = function () {
      var widthForHideTooltip = _this.props.widthForHideTooltip;


      _this.setState({
        disabledToolTip: _this.tooltipTitleText.offsetWidth <= widthForHideTooltip
      });
    };

    _this.state = {
      tooltipTitle: props.value.label,
      disabledToolTip: false
    };

    _this.tooltipTitleText = null;
    return _this;
  }

  _createClass(TypeSelect, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleTooltip();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          options = _props.options;
      var _state = this.state,
          tooltipTitle = _state.tooltipTitle,
          disabledToolTip = _state.disabledToolTip;


      return _react2.default.createElement(
        _Tooltip2.default,
        {
          title: tooltipTitle,
          disabled: disabledToolTip },
        _react2.default.createElement(_SelectBox2.default, {
          value: value,
          options: options,
          onChange: this.handleOnChange
        }),
        _react2.default.createElement(
          TooltipTitleText,
          {
            innerRef: function innerRef(node) {
              return _this2.tooltipTitleText = node;
            } },
          tooltipTitle
        )
      );
    }
  }]);

  return TypeSelect;
}(_react.Component);

TypeSelect.defaultProps = {
  widthForHideTooltip: 135,
  options: []
};
exports.default = TypeSelect;


var Container = _styledComponents2.default.div(_templateObject);

var TooltipTitleText = _styledComponents2.default.span(_templateObject2);