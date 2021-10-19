import React from 'react';
import PropTypes from 'prop-types';
import './LeadForm.css';

const LeadForm = (props) => {
    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmit(event);
    }

    const defaultFormFields = () => {
        const firstName = (
            props.firstName ?
            <div className='LeadForm__formControl'>
                <label htmlFor="first-name-input">
                    { props.firstName.label ? props.firstName.label : 'First Name' }
                    { props.firstName.required ? <span className="LeadForm__isRequired">*</span> : '' }
                </label>
                {
                    props.firstName.error ?
                    <span className="error-msg">{props.firstName.error}</span>
                    : ''
                }
                <input id="first-name-input" type="text" name="first-name" />
            </div>
            : ''
        )
        const lastName = (
            props.lastName ?
            <div className="LeadForm__formControl">
                <label htmlFor="last-name-input">
                    { props.lastName.label ? props.lastName.label : 'Last Name' }
                    { props.lastName.required ? <span className="LeadForm__isRequired">*</span> : '' }
                </label>
                {
                    props.lastName.error ?
                    <span className="error-msg">{props.lastName.error}</span>
                    : ''
                }
                <input id="last-name-input" type="text" name="last-name" />
            </div>
            : ''
        )
        const generalPhone = (
            props.generalPhone ?
            <div className="LeadForm__formControl">
                <label htmlFor="general-phone-input">
                    { props.generalPhone.label ? props.generalPhone.label : 'Phone' }
                    { props.generalPhone.required ? <span className="LeadForm__isRequired">*</span> : '' }
                </label>
                {
                    props.generalPhone.error ?
                    <span className="error-msg">{props.generalPhone.error}</span>
                    : ''
                }
                <input id="general-phone-input" type="text" name="general-phone" />
            </div>
            : ''
        )
        const mobilePhone = (
            props.mobilePhone ?
            <div className="LeadForm__formControl">
                <label htmlFor="mobile-phone-input">
                    { props.mobilePhone.label ? props.mobilePhone.label : 'Mobile Phone' }
                    { props.mobilePhone.required ? <span className="LeadForm__isRequired">*</span> : '' }
                </label>
                {
                    props.mobilePhone.error ?
                    <span className="error-msg">{props.mobilePhone.error}</span>
                    : ''
                }
                <input id="mobile-phone-input" type="text" name="mobile-phone" />
            </div>
            : ''
        )
        const workPhone = (
            props.workPhone ?
            <div className="LeadForm__formControl">
                <label htmlFor="work-phone-input">
                    { props.workPhone.label ? props.workPhone.label : 'Work Phone' }
                    { props.workPhone.required ? <span className="LeadForm__isRequired">*</span> : '' }
                </label>
                {
                    props.workPhone.error ?
                    <span className="error-msg">{props.workPhone.error}</span>
                    : ''
                }
                <input id="work-phone-input" type="text" name="work-phone" />
            </div>
            : ''
        )
        const email = (
            props.email ?
            <div className="LeadForm__formControl">
                <label htmlFor="email-input">
                    { props.email.label ? props.email.label : 'Email' }
                    { props.email.required ? <span className="LeadForm__isRequired">*</span> : '' }
                </label>
                {
                    props.email.error ?
                    <span className="error-msg">{props.email.error}</span>
                    : ''
                }
                <input id="email-input" type="text" name="email" />
            </div>
            : ''
        )

        return (
            <div className='LeadForm__formGroup defaultFields'>
                {firstName}
                {lastName}
                {generalPhone}
                {mobilePhone}
                {workPhone}
                {email}
            </div>
        )
    }

    return (
        <form onSubmit={submitHandler} className="LeadForm">
            <div className="LeadForm__heading">
                <h1>{props.formH1 ? props.formH1 : 'Contact Us'}</h1>
                <p>{props.formDescription ? props.formDescription : ''}</p>
            </div>
            {defaultFormFields()}
            {props.children}
        </form>
    )
}

const defaultInputPropTypes = [
    PropTypes.exact({ 
        label: PropTypes.string,
        required: PropTypes.bool,
        error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    }),
    PropTypes.bool
]

LeadForm.propTypes = {
    onSubmit: PropTypes.func,
    formH1: PropTypes.string,
    formDescription: PropTypes.string,
    firstName: PropTypes.oneOfType(defaultInputPropTypes),
    lastName: PropTypes.oneOfType(defaultInputPropTypes),
    generalPhone: PropTypes.oneOfType(defaultInputPropTypes),
    mobilePhone: PropTypes.oneOfType(defaultInputPropTypes),
    workPhone: PropTypes.oneOfType(defaultInputPropTypes),
    email: PropTypes.oneOfType(defaultInputPropTypes),
}

export { LeadForm };
