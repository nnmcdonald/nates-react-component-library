import React from 'react';
import styles from './Backdrop.module.css';
import PropTypes from 'prop-types';

const Backdrop = (props) => {
    const darkTheme = props.darkTheme ? styles.darkTheme : '';

    return (
        <div onClick={props.onClick} className={`${styles.backdrop} ${darkTheme}`}>
            {props.children}
        </div>
    )
}

Backdrop.propTypes = {
    onClick: PropTypes.func,
    darkTheme: PropTypes.bool
}

export { Backdrop };
