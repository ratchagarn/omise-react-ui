'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  .react-datepicker-wrapper,\n  .react-datepicker__input-container {\n    width: 100%;\n  }\n'], ['\n  .react-datepicker-wrapper,\n  .react-datepicker__input-container {\n    width: 100%;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _SelectBox = require('../../SelectBox');

var _SelectBox2 = _interopRequireDefault(_SelectBox);

var _DatePicker = require('../../DatePicker');

var _TypeText = require('./TypeText');

var _UI = require('./UI');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * UI - AdvanceSearch/partials/TypeDate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var DATE_FORMAT = 'YYYY-MM-DD';

var options = [{ label: 'Between', value: 'between' }, { label: 'Exactly', value: 'exactly' }, { label: 'Today', value: 'today' }, { label: 'Yesterday', value: 'yesterday' }, { label: 'This week', value: 'this_week' }, { label: 'Last week', value: 'last_week' }, { label: 'This month', value: 'this_month' }, { label: 'Last month', value: 'last_month' }];

var TypeDate = function (_Component) {
  _inherits(TypeDate, _Component);

  function TypeDate(props) {
    _classCallCheck(this, TypeDate);

    var _this = _possibleConstructorReturn(this, (TypeDate.__proto__ || Object.getPrototypeOf(TypeDate)).call(this, props));

    _initialiseProps.call(_this);

    var defaultSelectValue = props.selectedOption ? options.filter(function (item) {
      return item.value === props.selectedOption;
    })[0] : options[0];

    var dateA = 0;
    var dateB = 0;

    if (props.value.indexOf(',') > -1) {
      var _props$value$split = props.value.split(',');

      var _props$value$split2 = _slicedToArray(_props$value$split, 2);

      dateA = _props$value$split2[0];
      dateB = _props$value$split2[1];
    } else {
      dateA = props.value;
    }

    dateA = dateA ? (0, _moment2.default)(dateA) : (0, _moment2.default)();
    dateB = dateB ? (0, _moment2.default)(dateB) : (0, _moment2.default)();

    _this.state = {
      selectedValue: defaultSelectValue,
      dateA: dateA,
      dateB: defaultSelectValue.value === 'between' && dateB.diff(dateA, 'days') <= 0 ? (0, _moment2.default)(dateA).add(7, 'days') : dateB
    };
    return _this;
  }

  _createClass(TypeDate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onChange(this.setValueForOnChange());
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          dateA = _state.dateA,
          dateB = _state.dateB,
          selectedValue = _state.selectedValue;

      var isBetween = selectedValue.value === 'between';

      return _react2.default.createElement(
        EnchantedTable,
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
          { hide: selectedValue.value !== 'between' && selectedValue.value !== 'exactly' },
          _react2.default.createElement(EnchantedDatePicker, {
            selected: dateA,
            placeholderText: isBetween ? 'From' : DATE_FORMAT,
            maxDate: isBetween ? (0, _moment2.default)(dateB).subtract(1, 'days') : null,
            onChange: this.handleOnDateChange('dateA')
          })
        ),
        _react2.default.createElement(
          _UI.Col,
          { hide: selectedValue.value !== 'between' },
          _react2.default.createElement(EnchantedDatePicker, {
            selected: dateB,
            placeholderText: isBetween ? 'To' : DATE_FORMAT,
            minDate: isBetween ? (0, _moment2.default)(dateA).add(1, 'days') : null,
            onChange: this.handleOnDateChange('dateB')
          })
        )
      );
    }
  }]);

  return TypeDate;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleOnSelectChange = function (data) {
    _this2.setState({ selectedValue: data }, function () {
      var onChange = _this2.props.onChange;
      var _state2 = _this2.state,
          dateA = _state2.dateA,
          dateB = _state2.dateB,
          selectedValue = _state2.selectedValue;

      var diffDays = dateB ? dateB.diff(dateA, 'days') : 0;

      if (selectedValue.value === 'between' && diffDays <= 0) {
        _this2.setState({ dateB: (0, _moment2.default)(dateA).add(1, 'days') }, function () {
          onChange(_this2.setValueForOnChange());
        });
      } else {
        onChange(_this2.setValueForOnChange());
      }
    });
  };

  this.handleOnDateChange = function (name) {
    return function (date) {
      _this2.setState(_defineProperty({}, name, date), function () {
        _this2.props.onChange(_this2.setValueForOnChange());
      });
    };
  };

  this.setValueForOnChange = function () {
    var _state3 = _this2.state,
        dateA = _state3.dateA,
        dateB = _state3.dateB,
        selectedValue = _state3.selectedValue;

    var newValue = [(0, _moment2.default)(dateA).format(DATE_FORMAT)];

    if (selectedValue.value === 'between') {
      newValue.push((0, _moment2.default)(dateB).format(DATE_FORMAT));
    }

    return {
      option: selectedValue.value,
      value: newValue.join(',')
    };
  };
};

exports.default = TypeDate;

/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */

var EnchantedTable = (0, _styledComponents2.default)(_UI.Table)(_templateObject);

var EnchantedDatePicker = (0, _styledComponents2.default)(_DatePicker.DatePicker)(_templateObject2, _UI.InputStyle);