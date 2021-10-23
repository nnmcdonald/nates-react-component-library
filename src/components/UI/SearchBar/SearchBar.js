import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
    const [query, setQuery] = useState('');

    const queryChangeHandler = (event) => {
        setQuery(event.target.value);
    }

    const searchHandler = () => {
        props.onSearch(query);
    }

    return (
        <div className={styles.searchBar}>
            <div className={`${styles.searchInput} searchInput--custom`}>
                <input onChange={queryChangeHandler} type="text" placeholder="Search..." />
            </div>
            <div>
                <button
                    onClick={searchHandler}
                    className={`${styles.submitSearchBtn} searchButton--custom`}
                >
                    Go
                </button>
            </div>
        </div>
    )
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export { SearchBar };
