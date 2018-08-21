'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePicker = exports.DATE_FORMAT = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDatepicker = require('react-datepicker');

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _TextField = require('../TextField');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                             * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                             * UI - DatePicker
                                                                                                                                                                                                                             * Wrapper component for https://reactdatepicker.com/
                                                                                                                                                                                                                             * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                             */


(0, _styledComponents.injectGlobal)(['\n  .react-datepicker-popper {\n    .react-datepicker {\n      padding: 12px 16px;\n      border: 0;\n      box-shadow: 0 0 15px rgba(100, 100, 100, .2)\n    }\n\n    .react-datepicker__triangle {\n      display: none;\n    }\n\n    .react-datepicker__navigation {\n      top: 22px;\n    }\n\n    .react-datepicker__header {\n      border-bottom: 0;\n      background-color: white;\n    }\n\n    .react-datepicker__current-month {\n      margin-bottom: 20px;\n    }\n\n    .react-datepicker__day {\n      &:hover {\n        border-radius: 0;\n      }\n    }\n\n    .react-datepicker__day--selected,\n    .react-datepicker__day--in-selecting-range,\n    .react-datepicker__day--in-range {\n      background-color: #2761E8;\n      border-radius: 0;\n\n      &:hover {\n        border-radius: 0;\n      }\n    }\n\n    .react-datepicker__day-name,\n    .react-datepicker__day,\n    .react-datepicker__time-name {\n      width: 2rem;\n      line-height: 2rem;\n    }\n  }\n']);

var DATE_FORMAT = exports.DATE_FORMAT = 'YYYY-MM-DD';

var DatePicker = function DatePicker(_ref) {
  var className = _ref.className,
      selected = _ref.selected,
      dateFormat = _ref.dateFormat,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      restProps = _objectWithoutProperties(_ref, ['className', 'selected', 'dateFormat', 'minDate', 'maxDate', 'placeholder', 'onChange']);

  return _react2.default.createElement(_reactDatepicker2.default, _extends({
    className: className,
    selected: selected,
    dateFormat: dateFormat,
    minDate: minDate,
    maxDate: maxDate,
    placeholder: 'YYYY-MM-DD',
    onChange: onChange
  }, restProps));
};

exports.DatePicker = DatePicker;
DatePicker.defaultProps = {
  dateFormat: DATE_FORMAT,
  onChange: function onChange() {}
};

exports.default = (0, _styledComponents2.default)(DatePicker)(_templateObject, _TextField.inputTextStyle);