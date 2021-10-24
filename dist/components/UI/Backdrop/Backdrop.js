"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Backdrop = void 0;

var _react = _interopRequireDefault(require("react"));

var _BackdropModule = _interopRequireDefault(require("./Backdrop.module.css"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Backdrop = function Backdrop(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    onClick: props.onClick,
    className: _BackdropModule.default.backdrop
  }, props.children);
};

exports.Backdrop = Backdrop;
Backdrop.propTypes = {
  onClick: _propTypes.default.func
};