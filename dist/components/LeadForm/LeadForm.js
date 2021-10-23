"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeadForm = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./LeadForm.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LeadForm = function LeadForm(props) {
  var submitHandler = function submitHandler(event) {
    event.preventDefault();
    props.onSubmit(event);
  };

  var defaultFormFields = function defaultFormFields() {
    var firstName = props.firstName ? /*#__PURE__*/_react.default.createElement("div", {
      className: "LeadForm__formControl"
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "first-name-input"
    }, props.firstName.label ? props.firstName.label : 'First Name', props.firstName.required ? /*#__PURE__*/_react.default.createElement("span", {
      className: "LeadForm__isRequired"
    }, "*") : ''), props.firstName.error ? /*#__PURE__*/_react.default.createElement("span", {
      className: "error-msg"
    }, props.firstName.error) : '', /*#__PURE__*/_react.default.createElement("input", {
      id: "first-name-input",
      type: "text",
      name: "first-name"
    })) : '';
    var lastName = props.lastName ? /*#__PURE__*/_react.default.createElement("div", {
      className: "LeadForm__formControl"
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "last-name-input"
    }, props.lastName.label ? props.lastName.label : 'Last Name', props.lastName.required ? /*#__PURE__*/_react.default.createElement("span", {
      className: "LeadForm__isRequired"
    }, "*") : ''), props.lastName.error ? /*#__PURE__*/_react.default.createElement("span", {
      className: "error-msg"
    }, props.lastName.error) : '', /*#__PURE__*/_react.default.createElement("input", {
      id: "last-name-input",
      type: "text",
      name: "last-name"
    })) : '';
    var generalPhone = props.generalPhone ? /*#__PURE__*/_react.default.createElement("div", {
      className: "LeadForm__formControl"
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "general-phone-input"
    }, props.generalPhone.label ? props.generalPhone.label : 'Phone', props.generalPhone.required ? /*#__PURE__*/_react.default.createElement("span", {
      className: "LeadForm__isRequired"
    }, "*") : ''), props.generalPhone.error ? /*#__PURE__*/_react.default.createElement("span", {
      className: "error-msg"
    }, props.generalPhone.error) : '', /*#__PURE__*/_react.default.createElement("input", {
      id: "general-phone-input",
      type: "text",
      name: "general-phone"
    })) : '';
    var mobilePhone = props.mobilePhone ? /*#__PURE__*/_react.default.createElement("div", {
      className: "LeadForm__formControl"
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "mobile-phone-input"
    }, props.mobilePhone.label ? props.mobilePhone.label : 'Mobile Phone', props.mobilePhone.required ? /*#__PURE__*/_react.default.createElement("span", {
      className: "LeadForm__isRequired"
    }, "*") : ''), props.mobilePhone.error ? /*#__PURE__*/_react.default.createElement("span", {
      className: "error-msg"
    }, props.mobilePhone.error) : '', /*#__PURE__*/_react.default.createElement("input", {
      id: "mobile-phone-input",
      type: "text",
      name: "mobile-phone"
    })) : '';
    var workPhone = props.workPhone ? /*#__PURE__*/_react.default.createElement("div", {
      className: "LeadForm__formControl"
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "work-phone-input"
    }, props.workPhone.label ? props.workPhone.label : 'Work Phone', props.workPhone.required ? /*#__PURE__*/_react.default.createElement("span", {
      className: "LeadForm__isRequired"
    }, "*") : ''), props.workPhone.error ? /*#__PURE__*/_react.default.createElement("span", {
      className: "error-msg"
    }, props.workPhone.error) : '', /*#__PURE__*/_react.default.createElement("input", {
      id: "work-phone-input",
      type: "text",
      name: "work-phone"
    })) : '';
    var email = props.email ? /*#__PURE__*/_react.default.createElement("div", {
      className: "LeadForm__formControl"
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "email-input"
    }, props.email.label ? props.email.label : 'Email', props.email.required ? /*#__PURE__*/_react.default.createElement("span", {
      className: "LeadForm__isRequired"
    }, "*") : ''), props.email.error ? /*#__PURE__*/_react.default.createElement("span", {
      className: "error-msg"
    }, props.email.error) : '', /*#__PURE__*/_react.default.createElement("input", {
      id: "email-input",
      type: "text",
      name: "email"
    })) : '';
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "LeadForm__formGroup defaultFields"
    }, firstName, lastName, generalPhone, mobilePhone, workPhone, email);
  };

  return /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: submitHandler,
    className: "LeadForm"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "LeadForm__heading"
  }, /*#__PURE__*/_react.default.createElement("h1", null, props.formH1 ? props.formH1 : 'Contact Us'), /*#__PURE__*/_react.default.createElement("p", null, props.formDescription ? props.formDescription : '')), defaultFormFields(), props.children, /*#__PURE__*/_react.default.createElement("div", {
    className: "LeadForm__btnRow"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, "Submit")));
};

exports.LeadForm = LeadForm;
var defaultInputPropTypes = [_propTypes.default.exact({
  label: _propTypes.default.string,
  required: _propTypes.default.bool,
  error: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool])
}), _propTypes.default.bool];
LeadForm.propTypes = {
  onSubmit: _propTypes.default.func,
  formH1: _propTypes.default.string,
  formDescription: _propTypes.default.string,
  firstName: _propTypes.default.oneOfType(defaultInputPropTypes),
  lastName: _propTypes.default.oneOfType(defaultInputPropTypes),
  generalPhone: _propTypes.default.oneOfType(defaultInputPropTypes),
  mobilePhone: _propTypes.default.oneOfType(defaultInputPropTypes),
  workPhone: _propTypes.default.oneOfType(defaultInputPropTypes),
  email: _propTypes.default.oneOfType(defaultInputPropTypes)
};