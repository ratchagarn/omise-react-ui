'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: inline;\n  margin-right: 4px;\n'], ['\n  display: inline;\n  margin-right: 4px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n'], ['\n  display: block;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', ';\n  cursor: ', ';\n'], ['\n  ', ';\n  cursor: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                   * UI - Label
                                                                                                                                                   * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                   */


var styleInline = (0, _styledComponents.css)(_templateObject);

var styleBlock = (0, _styledComponents.css)(_templateObject2);

var Label = _styledComponents2.default.label(_templateObject3, function (props) {
  return props.block ? styleBlock : styleInline;
}, function (props) {
  return props.cursor;
});

Label.defaultProps = {
  cursor: 'pointer'
};

Label.propTypes = {
  htmlFor: _propTypes2.default.string,
  cursor: _propTypes2.default.string
};

exports.default = Label;