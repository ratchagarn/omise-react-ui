'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n'], ['\n  position: relative;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  float: right;\n  color: #2761E8;\n  font-size: 12px;\n  cursor: pointer;\n\n  &:hover {\n    text-decoration: underline;\n  }\n'], ['\n  float: right;\n  color: #2761E8;\n  font-size: 12px;\n  cursor: pointer;\n\n  &:hover {\n    text-decoration: underline;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: ', ';\n\n  &:after {\n    content: \'\';\n    clear: both;\n    display: table;\n  }\n'], ['\n  display: ', ';\n\n  &:after {\n    content: \'\';\n    clear: both;\n    display: table;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: ', ';\n'], ['\n  display: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 10;\n  float: right;\n  width: 16px;\n  height: 16px;\n  margin-bottom: 10px;\n  background-color: black;\n  color: white;\n  font-size: 12px;\n  text-align: center;\n  line-height: 16px;\n  cursor: pointer;\n  border-radius: 50%;\n'], ['\n  position: relative;\n  z-index: 10;\n  float: right;\n  width: 16px;\n  height: 16px;\n  margin-bottom: 10px;\n  background-color: black;\n  color: white;\n  font-size: 12px;\n  text-align: center;\n  line-height: 16px;\n  cursor: pointer;\n  border-radius: 50%;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  position: relative;\n  margin-left: 34px;\n\n  &:before {\n    content: \'\xD7\';\n    position: absolute;\n    top: 50%;\n    left: -26px;\n    width: 16px;\n    height: 16px;\n    background-color: #333;\n    text-align: center;\n    border-radius: 50%;\n    color: white;\n    pointer-events: none;\n    transform: translateY(-50%) rotate(45deg);\n  }\n'], ['\n  position: relative;\n  margin-left: 34px;\n\n  &:before {\n    content: \'\xD7\';\n    position: absolute;\n    top: 50%;\n    left: -26px;\n    width: 16px;\n    height: 16px;\n    background-color: #333;\n    text-align: center;\n    border-radius: 50%;\n    color: white;\n    pointer-events: none;\n    transform: translateY(-50%) rotate(45deg);\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  padding: 10px;\n  border: 1px solid #CCC;\n  background-color: #333;\n  color: #EEE;\n  border-radius: 4px;\n'], ['\n  padding: 10px;\n  border: 1px solid #CCC;\n  background-color: #333;\n  color: #EEE;\n  border-radius: 4px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _helpers = require('./helpers');

var _FilterGenerator = require('./partials/FilterGenerator');

var _FilterGenerator2 = _interopRequireDefault(_FilterGenerator);

var _FilterSuggestions = require('./partials/FilterSuggestions');

var _FilterSuggestions2 = _interopRequireDefault(_FilterSuggestions);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * UI - AdvanceSearch
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var AdvanceSearch = function (_Component) {
  _inherits(AdvanceSearch, _Component);

  function AdvanceSearch(props) {
    _classCallCheck(this, AdvanceSearch);

    var _this = _possibleConstructorReturn(this, (AdvanceSearch.__proto__ || Object.getPrototypeOf(AdvanceSearch)).call(this, props));

    _this.handleOpenFilter = function () {
      _this.setState({ showFilter: true });
    };

    _this.handleCloseFilter = function () {
      _this.setState({ showFilter: false }, function () {
        _this.setState({ filterItems: [] }, function () {
          return _this.processFilterItem();
        });
      });
    };

    _this.handleOnSuggestionsChange = function (filterItems) {
      _this.setState({
        showFilter: true,
        filterItems: [].concat(_toConsumableArray(filterItems))
      });
    };

    _this.handleOnFilterSelect = function (id, type, index) {
      var updatedFilterItem = [].concat(_toConsumableArray(_this.state.filterItems));
      updatedFilterItem[index].id = id;
      updatedFilterItem[index].type = type;

      var schemaData = (0, _helpers.getSchemaDataById)(id, _this.props.schema);
      var defaultValue = schemaData.defaultValue,
          defaultOption = schemaData.defaultOption;

      updatedFilterItem[index].value = defaultValue;
      updatedFilterItem[index].option = defaultOption ? defaultOption : null;

      _this.setState({ filterItems: updatedFilterItem }, function () {
        _this.processFilterItem();
      });
    };

    _this.handleOnFilterChange = function (id, value, option) {
      var updatedFilterItem = [].concat(_toConsumableArray(_this.state.filterItems));

      updatedFilterItem.map(function (item) {
        if (item.id === id) {
          item.value = value;

          if (option) {
            item.option = option;
          }
        }
      });

      _this.setState({ filterItems: updatedFilterItem }, function () {
        _this.processFilterItem();
      });
    };

    _this.handleOnFilterDelete = function (deleteIndex) {
      var updatedFilterItem = [].concat(_toConsumableArray(_this.state.filterItems));
      updatedFilterItem.splice(deleteIndex, 1);

      _this.setState({ filterItems: updatedFilterItem }, function () {
        _this.processFilterItem();
      });
    };

    _this.handleOnAddMoreClick = function () {
      var schema = _this.props.schema;
      var filterItems = _this.state.filterItems;


      if (filterItems.length === schema.length) {
        return;
      }

      var updatedFilterItems = [].concat(_toConsumableArray(filterItems));
      updatedFilterItems.push({
        id: null,
        type: null,
        option: null,
        value: ''
      });

      _this.setState({ filterItems: updatedFilterItems }, function () {
        _this.processFilterItem();
      });
    };

    _this.processFilterItem = function (filterItems) {
      clearTimeout(_this.processQueryTimer);

      _this.processQueryTimer = setTimeout(function () {
        var filterItemsData = filterItems || _this.state.filterItems;
        var query = (0, _helpers.processFilterItemsEngine)(filterItemsData);

        _this.props.onChange(query, filterItemsData);
      }, _this.props.processQueryDelay);
    };

    _this.state = {
      showFilter: props.expandedFilter,
      filterItems: []
    };

    _this.processQueryTimer = null;
    return _this;
  }

  _createClass(AdvanceSearch, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          schema = _props.schema,
          suggestions = _props.suggestions,
          addMoreLabel = _props.addMoreLabel,
          expandedFilter = _props.expandedFilter;
      var _state = this.state,
          showFilter = _state.showFilter,
          filterItems = _state.filterItems;


      var isReachToLimit = filterItems.length === schema.length;

      return _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          FilterControlPanel,
          { show: !showFilter },
          _react2.default.createElement(_FilterSuggestions2.default, {
            suggestions: suggestions,
            onChange: this.handleOnSuggestionsChange
          }),
          _react2.default.createElement(
            ExpandFilterControlButton,
            {
              onClick: this.handleOpenFilter },
            'Advance Search'
          )
        ),
        _react2.default.createElement(
          FilterContainer,
          { show: showFilter, expandedFilter: expandedFilter },
          !expandedFilter && _react2.default.createElement(
            CloseFilter,
            { onClick: this.handleCloseFilter },
            '\xD7'
          ),
          _react2.default.createElement(_FilterGenerator2.default, {
            schema: schema,
            filterItems: filterItems,
            onFilterSelect: this.handleOnFilterSelect,
            onFilterChange: this.handleOnFilterChange,
            onFilterDelete: this.handleOnFilterDelete
          }),
          _react2.default.createElement(
            AddMoreFilter,
            null,
            _react2.default.createElement(
              _Button2.default,
              {
                type: 'primary',
                size: 'sm',
                disabled: isReachToLimit,
                onClick: this.handleOnAddMoreClick },
              addMoreLabel
            )
          )
        )
      );
    }
  }]);

  return AdvanceSearch;
}(_react.Component);

AdvanceSearch.propTypes = {
  schema: _propTypes2.default.array.isRequired,
  suggestions: _propTypes2.default.array,
  addMoreLabel: _propTypes2.default.string,
  expandedFilter: _propTypes2.default.bool,
  processQueryDelay: _propTypes2.default.number,
  onChange: _propTypes2.default.func
};
AdvanceSearch.defaultProps = {
  schema: [],
  suggestions: [],
  addMoreLabel: 'Add more filter',
  expandedFilter: false,
  processQueryDelay: 250,
  onChange: function onChange() {}
};
exports.default = AdvanceSearch;

/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */

var Container = _styledComponents2.default.div(_templateObject);

var ExpandFilterControlButton = _styledComponents2.default.span(_templateObject2);

var FilterControlPanel = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.show ? 'block' : 'none';
});

var FilterContainer = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.show ? 'block' : 'none';
});

var CloseFilter = _styledComponents2.default.div(_templateObject5);

var AddMoreFilter = _styledComponents2.default.div(_templateObject6);

var Pre = _styledComponents2.default.pre(_templateObject7);