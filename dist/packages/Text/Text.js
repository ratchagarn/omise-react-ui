'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: ', ';\n  font-size: ', ';\n  user-select: ', ';\n'], ['\n  display: ', ';\n  font-size: ', ';\n  user-select: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                   * UI - Text
                                                                                                                                                   * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                   */


var fontSize = {
  sm: '10px',
  md: '14px',
  lg: '18px'
};

var Text = _styledComponents2.default.span(_templateObject, function (props) {
  return props.block ? 'block' : 'inline';
}, function (_ref) {
  var size = _ref.size;
  return fontSize[size] ? fontSize[size] : fontSize['md'];
}, function (props) {
  return props.userSelect ? 'auto' : 'none';
});

Text.defaultProps = {
  size: 'md',
  userSelect: true
};

Text.propTypes = {
  size: _propTypes2.default.string,
  userSelect: _propTypes2.default.bool
};

exports.default = Text;