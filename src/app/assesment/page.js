// Import necessary modules and components
'use client'
import React from 'react';
import Image from "next/image";
import profile from '../../../public/Testlify.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faUser, faBell } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import {useState} from "react";
import styles from './assesment.module.css';
import SearchBar from './components/searchbar';


// Define the Assesment component
function Assesment() {
    // Define state for dropdown menu
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
            <div className={styles.ases}>
                <div className={styles.heading}>  <h3>Your Assesment </h3> </div>
    <div><h8>(5 assesments)</h8></div>  
</div>
<div className={styles.srtbar}>
      <SearchBar />
</div>
         <div className={styles.outoutdiv}>
            <div className={styles.outindiv}>
            <div className={styles.rowdiv}>
                <div className={styles.assdiv}>Assignment Name</div>
                <div className={styles.invdiv}>Invited By</div>
                <div className={styles.inviondiv}>Invited On</div>
                <div className={styles.sttsdiv}>Status</div>
                <div className={styles.comdiv}>Completed On</div>
                <div className={styles.asdiv}>Average Score</div>

            </div>
            <br></br>

            <div className={styles.rowdiv}>
                <div className={styles.assdiv}>UI/UX Designer</div>
                <div className={styles.invdiv}>Google</div>
                <div className={styles.inviondiv}>Feb 8,8:16PM</div>
                <div className={styles.sttsdiv}>InProgress</div>
                <div className={styles.comdiv}>-</div>
                <div className={styles.asdiv}>50%</div>
                <div className={styles.rowbtns}> 
                    <button className={styles.rowbtn1}>...</button>
                    <button className={styles.rowbtn2}>{
                    '>'}</button>
                </div>

            </div>

            
            <div className={styles.rowdiv}>
                <div className={styles.assdiv}>UX Designer</div>
                <div className={styles.invdiv}>Microsoft</div>
                <div className={styles.inviondiv}>Feb 1,12:00PM</div>
                <div className={styles.sttsdiv}>Invited</div>
                <div className={styles.comdiv}>-</div>
                <div className={styles.asdiv}>64%</div>
                <div className={styles.rowbtns}> 
                    <button className={styles.rowbtn1}>...</button>
                    <button className={styles.rowbtn2}>{
                    '>'}</button>
                </div>


            </div>
           
            <div className={styles.rowdiv}>
                <div className={styles.assdiv}>Android Developer</div>
                <div className={styles.invdiv}>Amazon</div>
                <div className={styles.inviondiv}>Feb 2,8:16PM</div>
                <div className={styles.sttsdiv}>Invited</div>
                <div className={styles.comdiv}>-</div>
                <div className={styles.asdiv}>79%</div>
                <div className={styles.rowbtns}> 
                    <button className={styles.rowbtn1}>...</button>
                    <button className={styles.rowbtn2}>{
                    '>'}</button>
                </div>


            </div>
            
            <div className={styles.rowdiv}>
                <div className={styles.assdiv}>.Net Developer</div>
                <div className={styles.invdiv}>Flipkart</div>
                <div className={styles.inviondiv}>Jan 31, 10:00AM</div>
                <div className={styles.sttsdiv}>Invited</div>
                <div className={styles.comdiv}>-</div>
                <div className={styles.asdiv}>100%</div>
                <div className={styles.rowbtns}> 
                    <button className={styles.rowbtn1}>...</button>
                    <button className={styles.rowbtn2}>{
                    '>'}</button>
                </div>


            </div>
           
            <div className={styles.rowdiv}>
                <div className={styles.assdiv}>HTML & CSS</div>
                <div className={styles.invdiv}>JOHO</div>
                <div className={styles.inviondiv}>Jan 25,1:15PM</div>
                <div className={styles.sttsdiv}>Completed</div>
                <div className={styles.comdiv}>Jan 28,9:00PM</div>
                <div className={styles.asdiv}>82%</div>
                <div className={styles.rowbtns}> 
                    <button className={styles.rowbtn1}>...</button>
                    <button className={styles.rowbtn2}>{
                    '>'}</button>
                </div>


            </div>
            
            <div className={styles.rowdiv}>
                <div className={styles.assdiv}>JavaScript</div>
                <div className={styles.invdiv}>Freshworks</div>
                <div className={styles.inviondiv}>Jan 24,10:36PM</div>
                <div className={styles.sttsdiv}>Completed</div>
                <div className={styles.comdiv}>Jan 25,2:00PM</div>
                <div className={styles.asdiv}>55%</div>
                <div className={styles.rowbtns}> 
                    <button className={styles.rowbtn1}>...</button>
                    <button className={styles.rowbtn2}>{
                    '>'}</button>
                </div>
            </div>
            </div>
        </div>


    











        </main>
    );
}

// Export the Assesment component
export default Assesment;
