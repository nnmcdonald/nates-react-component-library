"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;

var _react = _interopRequireDefault(require("react"));

var _CheckboxModule = _interopRequireDefault(require("./Checkbox.module.css"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function Checkbox(props) {
  var labelText = props.label ? props.label : '';
  var checkIcon = props.checkIcon ? props.checkIcon : 'fas fa-check';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_CheckboxModule.default.checkbox, " form-control")
  }, /*#__PURE__*/_react.default.createElement("label", {
    onChange: props.onChange
  }, labelText, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    defaultChecked: props.checked
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: _CheckboxModule.default.checkmark
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "".concat(_CheckboxModule.default.icon, " ").concat(checkIcon)
  }))));
};

exports.Checkbox = Checkbox;
Checkbox.propTypes = {
  label: _propTypes.default.string,
  checkIcon: _propTypes.default.string,
  defaultChecked: _propTypes.default.bool,
  onChange: _propTypes.default.func
};