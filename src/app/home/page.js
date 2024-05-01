'use client'
import Image from "next/image";
import profile from '../../../public/Testlify.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faUser, faBell } from '@fortawesome/free-solid-svg-icons'; // Import faBell icon
import { useState } from "react";
import styles from './home.module.css';
import { useRouter } from "next/navigation";


function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown menu
  const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to close dropdown menu
  const closeDropdown = () => {
      setIsDropdownOpen(false);
  };

  // Return JSX for the Assesment component
  return (
      <main>
          {/* Navigation bar */}
          <nav className={styles.navbar}>
              {/* Logo */}
              <div>
                  <Image
                      src={profile}
                      height={80}
                      width={120}
                  />
              </div>
              {/* Navigation links */}
              <div className={styles.navLinks}>
                  <ul>
                      <li><button className={styles.btncom}>DashBord</button></li>
                      <li><button className={styles.btncom}>Assesment</button></li>
                      <li><button className={styles.btncom}>Profile</button></li>
                      <li><button className={styles.btncom}>Personality test</button></li>
                      <li><button className={styles.btncom}>Jobs</button></li>
                      <li><button className={styles.btn}>Complete profile</button></li>
                  </ul>
              </div>
              {/* Navigation icons */}
              <div className={styles.navicons}>
                  <ul>
                      <li>
                          <a href="#">
                              <FontAwesomeIcon icon={faBell} />
                          </a>
                      </li>
                      <li>
                          <a href="#">
                              <FontAwesomeIcon icon={faChild} />
                          </a>
                      </li>
                      {/* Dropdown menu */}
                      <li className="dropdown">
                          <div onClick={toggleDropdown}>
                              <FontAwesomeIcon icon={faUser} />
                              {/* Conditional rendering for dropdown menu */}
                              {isDropdownOpen && (
                                  <div className={styles.dropdownContent}>
                                      <div>
                                          <button>Abhishek</button>
                                      </div>
                                      <div>
                                          <button>LogOut</button>
                                      </div>
                                  </div>
                              )}
                          </div>
                      </li>
                  </ul>
              </div>
          </nav>
          {/* Overlay for closing dropdown */}
          {isDropdownOpen && (
              <div className={styles.overlay} onClick={closeDropdown}></div>
          )}
          {/* Separator line */}
          <hr className={styles.separator} />
<div>
<h3> Dashboard </h3>
</div>











    </main>
  );
}

export default Home;
