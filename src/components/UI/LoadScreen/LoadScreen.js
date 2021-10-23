import React from 'react';
import styles from './LoadScreen.module.css';

const LoadScreen = () => {
    return (
        <div className={styles.overlay}>
            <span className={styles.loadingText}>
                Loading
                <span className={styles.dotOne}>.</span>
                <span className={styles.dotTwo}>.</span>
                <span className={styles.dotThree}>.</span>
            </span>
        </div>
    )
}

export { LoadScreen };
