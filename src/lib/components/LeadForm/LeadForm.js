import React from 'react';
import PropTypes from 'prop-types';
import './LeadForm.css';

const LeadForm = (props) => {
    const submitHandler = (event) => {
        event.preventDefault();
        // validate form

        const formErrors = props.onSubmit(event);

        if(formErrors) {
            // Show errors
        }
    }

    const defaultFormFields = () => {
        const firstName = (
            props.firstName ?
            <div className="LeadForm__formControl">
                <label for="first-name-input">
                    { props.firstName.label ? props.firstName.label : 'First Name' }
                    { props.firstName.required ? <span className="LeadForm__isRequired">*</span> : '' }
                </label>
                <input id="first-name-input" type="text" name="first-name" />
            </div>
            : ''
        )
        const lastName = (
            props.lastName ?
            <div className="LeadForm__formControl">
                <label for="last-name-input">
                    { props.lastName.label ? props.lastName.label : 'Last Name' }
                    { props.lastName.required ? <span className="LeadForm__isRequired">*</span> : '' }
                </label>
                <input id="last-name-input" type="text" name="last-name" />
            </div>
            : ''
        )
        const generalPhone = (
            props.generalPhone ?
            <div className="LeadForm__formControl">
                <label for="general-phone-input">
                    { props.generalPhone.label ? props.generalPhone.label : 'Phone' }
                    { props.generalPhone.required ? <span className="LeadForm__isRequired">*</span> : '' }
                </label>
                <input id="general-phone-input" type="text" name="general-phone" />
            </div>
            : ''
        )
        const mobilePhone = (
            props.mobilePhone ?
            <div className="LeadForm__formControl">
                <label for="mobile-phone-input">
                    { props.mobilePhone.label ? props.mobilePhone.label : 'Mobile Phone' }
                    { props.mobilePhone.required ? <span className="LeadForm__isRequired">*</span> : '' }
                </label>
                <input id="mobile-phone-input" type="text" name="mobile-phone" />
            </div>
            : ''
        )
        const workPhone = (
            props.workPhone ?
            <div className="LeadForm__formControl">
                <label for="work-phone-input">
                    { props.workPhone.label ? props.workPhone.label : 'Work Phone' }
                    { props.workPhone.required ? <span className="LeadForm__isRequired">*</span> : '' }
                </label>
                <input id="work-phone-input" type="text" name="work-phone" />
            </div>
            : ''
        )
        const email = (
            props.email ?
            <div className="LeadForm__formControl">
                <label for="email-input">
                    { props.email.label ? props.email.label : 'Email' }
                    { props.email.required ? <span className="LeadForm__isRequired">*</span> : '' }
                </label>
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
            {defaultFormFields()}
            {props.children}
        </form>
    )
}

LeadForm.propTypes = {
    onSubmit: PropTypes.func,
    firstName: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    lastName: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    generalPhone: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    mobilePhone: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    workPhone: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    email: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
}

export { LeadForm };
