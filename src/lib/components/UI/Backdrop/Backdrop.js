import React from 'react';
import styles from './Backdrop.module.css';
import PropTypes from 'prop-types';

const Backdrop = (props) => {
    return (
        <div onClick={props.onClick} className={styles.backdrop}>
            {props.children}
        </div>
    )
}

Backdrop.propTypes = {
    onClick: PropTypes.func
}

export { Backdrop };
