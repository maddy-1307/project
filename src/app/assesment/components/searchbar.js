import React from 'react';
import styles from './SearchBar.module.css'; // Import the CSS file for styling

function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search..."
        className={styles.searchInput}
      />
    </div>
  );
}

export default SearchBar;