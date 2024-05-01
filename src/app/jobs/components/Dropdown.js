import React, { useState } from 'react';
import styles from './Dropdown.module.css'; // Assuming you have a separate CSS module for this component

const Dropdown = ({ options, name }) => { // Accepts 'name' prop
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownToggle} onClick={toggleDropdown}>
        {name} {/* Display the custom name */}
        <span>&#9660;</span> {/* Downward arrow icon */}
      </div>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
