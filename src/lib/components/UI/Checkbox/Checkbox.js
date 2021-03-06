import React from 'react';
import styles from './Checkbox.module.css';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
    const labelText = props.label ? props.label : '';
    const checkIcon = props.checkIcon ? props.checkIcon : 'fas fa-check';

    return (
        <div className={`${styles.checkbox} form-control`}>
            <label onChange={props.onChange}>
                {labelText}
                <input type="checkbox" defaultChecked={props.checked} />
                <span className={styles.checkmark}>
                    <i className={`${styles.icon} ${checkIcon}`}></i>
                </span>
            </label>
        </div>
    )
}

Checkbox.propTypes = {
    label: PropTypes.string,
    checkIcon: PropTypes.string,
    defaultChecked: PropTypes.bool,
    onChange: PropTypes.func
}

export { Checkbox };
