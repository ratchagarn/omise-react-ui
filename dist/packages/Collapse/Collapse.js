'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: ', ';\n'], ['\n  display: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                  * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                  * UI - Collapse
                                                                                                                                                  * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                                                                                                                                  */


var Collapse = function Collapse(_ref) {
  var open = _ref.open,
      children = _ref.children;
  return _react2.default.createElement(
    Container,
    { open: open },
    children
  );
};

Collapse.defaultProps = {
  open: false
};

exports.default = Collapse;


var Container = _styledComponents2.default.div(_templateObject, function (props) {
  return props.open ? 'block' : 'none';
});