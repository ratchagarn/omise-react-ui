'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _helpers = require('../helpers');

var _TypeBoolean = require('./TypeBoolean');

var _TypeBoolean2 = _interopRequireDefault(_TypeBoolean);

var _TypeChoices = require('./TypeChoices');

var _TypeChoices2 = _interopRequireDefault(_TypeChoices);

var _TypeDate = require('./TypeDate');

var _TypeDate2 = _interopRequireDefault(_TypeDate);

var _TypeNumber = require('./TypeNumber');

var _TypeNumber2 = _interopRequireDefault(_TypeNumber);

var _TypeSelect = require('./TypeSelect');

var _TypeSelect2 = _interopRequireDefault(_TypeSelect);

var _TypeText = require('./TypeText');

var _TypeText2 = _interopRequireDefault(_TypeText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - AdvanceSearch/partials/FilterTypeSwitcher
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
var FilterTypeSwitcher = function FilterTypeSwitcher(_ref) {
  var filter = _ref.filter,
      schema = _ref.schema,
      onChange = _ref.onChange;

  var result = null;

  var schemaData = (0, _helpers.getSchemaDataById)(filter.id, schema);
  var displayName = schemaData.displayName,
      defaultValue = schemaData.defaultValue;


  if (filter.type === 'boolean') {
    result = _react2.default.createElement(_TypeBoolean2.default, {
      value: filter.value,
      onChange: handleOnChoiceChange
    });
  } else if (filter.type === 'choices') {
    var items = schemaData.items;


    result = _react2.default.createElement(_TypeChoices2.default, {
      items: items,
      value: filter.value,
      onChange: handleOnChoiceChange
    });
  } else if (filter.type === 'text') {
    result = _react2.default.createElement(_TypeText2.default, {
      placeholder: displayName,
      value: filter.value,
      onChange: handleOnTypeTextChange
    });
  } else if (filter.type === 'number') {
    result = _react2.default.createElement(_TypeNumber2.default, {
      placeholder: displayName,
      value: filter.value,
      selectedOption: filter.option,
      onChange: handleOnTypeNumberChange
    });
  } else if (filter.type === 'date') {
    return _react2.default.createElement(_TypeDate2.default, {
      value: filter.value,
      selectedOption: filter.option,
      onChange: handleOnTypeDateChange
    });
  } else if (filter.type === 'select') {
    var options = schemaData.options;

    var selectedValue = options.filter(function (item) {
      return item.value === filter.value;
    })[0];

    result = _react2.default.createElement(_TypeSelect2.default, {
      value: selectedValue,
      options: options,
      onChange: handleOnTypeSelectChange
    });
  }

  return result;

  function handleOnTypeSelectChange(data) {
    onChange(filter.id, data.value);
  }

  function handleOnTypeTextChange(value) {
    onChange(filter.id, value);
  }

  function handleOnTypeNumberChange(data) {
    onChange(filter.id, data.value, data.option);
  }

  function handleOnTypeDateChange(data) {
    onChange(filter.id, data.value, data.option);
  }

  function handleOnChoiceChange(value) {
    onChange(filter.id, value);
  }
};

exports.default = FilterTypeSwitcher;