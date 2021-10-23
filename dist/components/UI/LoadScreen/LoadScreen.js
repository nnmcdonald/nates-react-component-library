"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadScreen = void 0;

var _react = _interopRequireDefault(require("react"));

var _LoadScreenModule = _interopRequireDefault(require("./LoadScreen.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadScreen = function LoadScreen() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _LoadScreenModule.default.overlay
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _LoadScreenModule.default.loadingText
  }, "Loading", /*#__PURE__*/_react.default.createElement("span", {
    className: _LoadScreenModule.default.dotOne
  }, "."), /*#__PURE__*/_react.default.createElement("span", {
    className: _LoadScreenModule.default.dotTwo
  }, "."), /*#__PURE__*/_react.default.createElement("span", {
    className: _LoadScreenModule.default.dotThree
  }, ".")));
};

exports.LoadScreen = LoadScreen;