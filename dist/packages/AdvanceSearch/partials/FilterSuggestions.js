'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  float: left;\n'], ['\n  float: left;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: inline-block;\n  margin-right: 7px;\n  font-size: 12px;\n'], ['\n  display: inline-block;\n  margin-right: 7px;\n  font-size: 12px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: inline-block;\n  margin-right: 7px;\n  color: #2761E8;\n  font-size: 12px;\n  cursor: pointer;\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  &:hover {\n    text-decoration: underline;\n  }\n'], ['\n  display: inline-block;\n  margin-right: 7px;\n  color: #2761E8;\n  font-size: 12px;\n  cursor: pointer;\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  &:hover {\n    text-decoration: underline;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                   * UI - AdvanceSearch/partials/FilterSuggestions
                                                                                                                                                   * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                   */


var FilterSuggestions = function FilterSuggestions(_ref) {
  var suggestions = _ref.suggestions,
      onChange = _ref.onChange;

  var output = suggestions.map(function (item, i) {
    return _react2.default.createElement(
      Item,
      {
        key: item.name + '-' + i,
        onClick: handleOnClick(item.filterItems) },
      item.name
    );
  });

  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(
      Title,
      null,
      'Suggestion:'
    ),
    output
  );

  function handleOnClick(filterItems) {
    return function () {
      return onChange(filterItems);
    };
  }
};

exports.default = FilterSuggestions;

/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */

var Container = _styledComponents2.default.div(_templateObject);

var Title = _styledComponents2.default.span(_templateObject2);

var Item = _styledComponents2.default.span(_templateObject3);