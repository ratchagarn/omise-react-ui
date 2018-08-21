'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _helpers = require('../helpers');

var _SelectBox = require('../../SelectBox');

var _SelectBox2 = _interopRequireDefault(_SelectBox);

var _UI = require('./UI');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * UI - AdvanceSearch/partials/TypeNumber
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var options = [{ label: 'Equal', value: 'equal' }, { label: 'Between', value: 'between' }, { label: 'Greater than', value: 'greater_than' }, { label: 'Less than', value: 'less_than' }];

var TypeNumber = function (_Component) {
  _inherits(TypeNumber, _Component);

  function TypeNumber(props) {
    _classCallCheck(this, TypeNumber);

    var _this = _possibleConstructorReturn(this, (TypeNumber.__proto__ || Object.getPrototypeOf(TypeNumber)).call(this, props));

    _initialiseProps.call(_this);

    var defaultSelectValue = props.selectedOption ? options.filter(function (item) {
      return item.value === props.selectedOption;
    })[0] : options[0];

    var numberA = '';
    var numberB = '';

    if (typeof props.value === 'string' && props.value.indexOf(',') > -1) {
      var _props$value$split = props.value.split(',');

      var _props$value$split2 = _slicedToArray(_props$value$split, 2);

      numberA = _props$value$split2[0];
      numberB = _props$value$split2[1];
    } else {
      numberA = props.value;
    }

    numberA = (0, _helpers.isNumber)(numberA) ? parseFloat(numberA, 10) : '';
    numberB = (0, _helpers.isNumber)(numberB) ? parseFloat(numberB, 10) : '';

    _this.state = {
      selectedValue: defaultSelectValue,
      numberA: (0, _helpers.isNumber)(numberA) ? parseFloat(numberA, 10) : '',
      numberB: defaultSelectValue.value === 'between' && numberB && numberB <= numberA ? numberA + 10 : numberB
    };
    return _this;
  }

  _createClass(TypeNumber, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onChange(this.setValueForOnChange());
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          numberA = _state.numberA,
          numberB = _state.numberB,
          selectedValue = _state.selectedValue;


      return _react2.default.createElement(
        _UI.Table,
        { show: true, marginBottom: 0 },
        _react2.default.createElement(
          _UI.Col,
          null,
          _react2.default.createElement(_SelectBox2.default, {
            value: selectedValue,
            options: options,
            onChange: this.handleOnSelectChange
          })
        ),
        _react2.default.createElement(
          _UI.Col,
          null,
          _react2.default.createElement(_UI.Input, {
            type: 'text',
            name: 'numberA',
            placeholder: this.setPlaceholderText('numberA'),
            value: numberA,
            onChange: this.handleOnInputChange,
            onKeyPress: this.handleOnKeyPress,
            onBlur: this.handleOnBlur
          })
        ),
        _react2.default.createElement(
          _UI.Col,
          { hide: selectedValue.value !== 'between' },
          _react2.default.createElement(_UI.Input, {
            type: 'text',
            name: 'numberB',
            placeholder: this.setPlaceholderText('numberB'),
            value: numberB,
            onChange: this.handleOnInputChange,
            onKeyPress: this.handleOnKeyPress,
            onBlur: this.handleOnBlur
          })
        )
      );
    }
  }]);

  return TypeNumber;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleOnKeyPress = function (event) {
    var n = String.fromCharCode(event.which);

    if (!/\d|\./.test(n)) {
      event.preventDefault();
    }
  };

  this.handleOnBlur = function (event) {
    var onChange = _this2.props.onChange;
    var _state2 = _this2.state,
        numberA = _state2.numberA,
        numberB = _state2.numberB;
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;

    var newState = {};

    if (value === '') {
      newState[name] = 0;
    }

    if (numberA >= numberB) {
      newState.numberB = numberA + 10;
    }

    _this2.setState(newState, function () {
      onChange(_this2.setValueForOnChange());
    });
  };

  this.handleOnSelectChange = function (data) {
    _this2.setState({ selectedValue: data }, function () {
      _this2.props.onChange(_this2.setValueForOnChange());
    });
  };

  this.handleOnInputChange = function (event) {
    var _event$target2 = event.target,
        name = _event$target2.name,
        value = _event$target2.value;

    var parseValue = parseFloat(value, 10);
    var newState = _defineProperty({}, name, isNaN(parseValue) ? '' : parseValue);

    _this2.setState(newState, function () {
      _this2.props.onChange(_this2.setValueForOnChange());
    });
  };

  this.setPlaceholderText = function (type) {
    var selectedValue = _this2.state.selectedValue;


    if (selectedValue.value === 'between') {
      if (type === 'numberA') {
        return 'Start';
      } else if (type === 'numberB') {
        return 'End';
      }
    } else {
      return _this2.props.placeholder;
    }
  };

  this.setValueForOnChange = function () {
    var _state3 = _this2.state,
        numberA = _state3.numberA,
        numberB = _state3.numberB,
        selectedValue = _state3.selectedValue;

    var newValue = [numberA];

    if (selectedValue.value === 'between') {
      newValue.push(numberB);
    }

    return {
      option: selectedValue.value,
      value: newValue.join(',')
    };
  };
};

exports.default = TypeNumber;