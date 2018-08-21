'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * UI - AdvanceSearch/partials/FilterGenerator
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _templateObject = _taggedTemplateLiteral(['\n  display: ', ';\n  width: 100%;\n  margin-bottom: 20px;\n'], ['\n  display: ', ';\n  width: 100%;\n  margin-bottom: 20px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: table;\n  width: 100%;\n\n  &:after {\n    content: \'\';\n    clear: both;\n    display: table;\n  }\n'], ['\n  display: table;\n  width: 100%;\n\n  &:after {\n    content: \'\';\n    clear: both;\n    display: table;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: table-cell;\n  width: ', ';\n  min-width: ', ';\n  padding: 4px;\n  text-align: ', ';\n  vertical-align: middle;\n'], ['\n  display: table-cell;\n  width: ', ';\n  min-width: ', ';\n  padding: 4px;\n  text-align: ', ';\n  vertical-align: middle;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: table-cell;\n  width: 30px;\n  min-width: 30px;\n  padding: 4px;\n  text-align: center;\n  vertical-align: middle;\n'], ['\n  display: table-cell;\n  width: 30px;\n  min-width: 30px;\n  padding: 4px;\n  text-align: center;\n  vertical-align: middle;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background-color: #333;\n  text-align: center;\n  border-radius: 50%;\n  color: white;\n  cursor: pointer;\n  transition: background-color .2s;\n\n  &:hover {\n    background-color: red;\n  }\n'], ['\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background-color: #333;\n  text-align: center;\n  border-radius: 50%;\n  color: white;\n  cursor: pointer;\n  transition: background-color .2s;\n\n  &:hover {\n    background-color: red;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _helpers = require('../helpers');

var _SelectBox = require('../../SelectBox');

var _SelectBox2 = _interopRequireDefault(_SelectBox);

var _FilterTypeSwitcher = require('./FilterTypeSwitcher');

var _FilterTypeSwitcher2 = _interopRequireDefault(_FilterTypeSwitcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FilterGenerator = function FilterGenerator(_ref) {
  var schema = _ref.schema,
      filterItems = _ref.filterItems,
      onFilterSelect = _ref.onFilterSelect,
      onFilterChange = _ref.onFilterChange,
      onFilterDelete = _ref.onFilterDelete;

  var filters = filterItems.map(function (filter, index) {
    var selectOptions = [];

    schema.forEach(function (item) {
      var matched = filterItems.filter(function (f) {
        return f.id === item.id;
      });

      if (matched.length === 0) {
        selectOptions.push({
          label: item.displayName,
          value: (0, _helpers.createFilterKey)(item.id, item.type)
        });
      }
    });

    var selectedValue = filter.id == null ? null : {
      label: (0, _helpers.getSchemaDataById)(filter.id, schema).displayName,
      value: (0, _helpers.createFilterKey)(filter.id, filter.type)
    };

    return _react2.default.createElement(
      Filter,
      { key: index },
      _react2.default.createElement(
        ColDelete,
        null,
        _react2.default.createElement(
          Delete,
          { onClick: handleOnDelete(index) },
          '\xD7'
        )
      ),
      _react2.default.createElement(
        Col,
        null,
        _react2.default.createElement(_SelectBox2.default, {
          value: selectedValue,
          options: selectOptions,
          onChange: function onChange(e) {
            return handleOnSelectFilter(e, index);
          }
        })
      ),
      _react2.default.createElement(
        Col,
        { width: needToWidthAuto(filter.type) ? 'auto' : null },
        _react2.default.createElement(_FilterTypeSwitcher2.default, {
          schema: schema,
          filter: filter,
          onChange: onFilterChange })
      )
    );
  });

  return _react2.default.createElement(
    Container,
    { show: filters.length },
    filters
  );

  function handleOnSelectFilter(data, index) {
    if (data.length && data.length === 0) {
      return;
    }

    var _data$value$split = data.value.split(':'),
        _data$value$split2 = _slicedToArray(_data$value$split, 2),
        id = _data$value$split2[0],
        type = _data$value$split2[1];

    if (id && type) {
      onFilterSelect(id, type, index);
    } else {
      onFilterSelect(null, null, index);
    }
  }

  function handleOnDelete(index) {
    return function () {
      return onFilterDelete(index);
    };
  }

  function needToWidthAuto(filterType) {
    return (/choices|boolean/.test(filterType)
    );
  }
};

exports.default = FilterGenerator;

/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */

var Container = _styledComponents2.default.div(_templateObject, function (props) {
  return props.show ? 'block' : 'none';
});

var Filter = _styledComponents2.default.div(_templateObject2);

var Col = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.width ? props.width : '200px';
}, function (props) {
  return props.width ? props.width : '200px';
}, function (props) {
  return props.align ? props.align : null;
});

var ColDelete = _styledComponents2.default.div(_templateObject4);

var Delete = _styledComponents2.default.span(_templateObject5);