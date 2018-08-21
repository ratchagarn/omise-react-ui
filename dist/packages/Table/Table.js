'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n\n  tr:nth-child(odd) > td {\n    background-color: white;\n  }\n\n  tr:nth-child(even) > td {\n    background-color: #F6F6F6;\n  }\n'], ['\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n\n  tr:nth-child(odd) > td {\n    background-color: white;\n  }\n\n  tr:nth-child(even) > td {\n    background-color: #F6F6F6;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  border-bottom: 1px solid #E9E9E9;\n'], ['\n  border-bottom: 1px solid #E9E9E9;\n']),
    _templateObject3 = _taggedTemplateLiteral([''], ['']),
    _templateObject4 = _taggedTemplateLiteral(['\n  padding: 8px;\n  text-align: ', ';\n'], ['\n  padding: 8px;\n  text-align: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  padding: 8px 16px;\n  border-top: 1px solid #E9E9E9;\n  border-bottom: 1px solid #E9E9E9;\n  text-align: ', ';\n'], ['\n  padding: 8px 16px;\n  border-top: 1px solid #E9E9E9;\n  border-bottom: 1px solid #E9E9E9;\n  text-align: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                             * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                             * UI - Table
                                                                                                                                                                                                                             * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                             */


var Table = function Table(_ref) {
  var heads = _ref.heads,
      rows = _ref.rows,
      props = _objectWithoutProperties(_ref, ['heads', 'rows']);

  var Heads = heads.map(function (data, i) {
    return _react2.default.createElement(
      HCol,
      { key: i, align: data.align },
      data.label
    );
  });

  var Columns = rows.map(function (data, j) {
    var cols = data.map(function (col, k) {
      var column = typeof col.column === 'function' ? col.column(props) : col.column;
      return _react2.default.createElement(
        Col,
        { key: k, align: col.align },
        column
      );
    });

    return _react2.default.createElement(
      Row,
      { key: j },
      cols
    );
  });

  return _react2.default.createElement(
    TableContainer,
    null,
    Heads && _react2.default.createElement(
      Head,
      null,
      _react2.default.createElement(
        Row,
        null,
        Heads
      )
    ),
    _react2.default.createElement(
      Body,
      null,
      Columns
    )
  );
};

Table.defaultProps = {
  heads: [],
  rows: []
};

exports.default = Table;

/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */

var TableContainer = _styledComponents2.default.table(_templateObject);

var Head = _styledComponents2.default.thead(_templateObject2);
var Body = _styledComponents2.default.tbody(_templateObject3);

var Row = _styledComponents2.default.tr(_templateObject3);

var HCol = _styledComponents2.default.th(_templateObject4, function (props) {
  return props.align ? props.align : 'left';
});

var Col = _styledComponents2.default.td(_templateObject5, function (props) {
  return props.align ? props.align : 'left';
});