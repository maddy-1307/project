'use client'
import React from 'react';
import Image from "next/image";
import profile from '../../../public/Testlify.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faUser, faBell,faPencil,faDownload } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import {useState} from "react";
import styles from './profile.module.css';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';



function Profile() {
    // Define state for dropdown menu
    const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [linkedinProfile, setLinkedinProfile] = useState('');
  const [resume, setResume] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Perform save operation
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Reset fields if needed
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };
  const handleDownloadResume = () => {
    // Check if a resume file is uploaded
    if (resumeFile) {
      // Create a URL for the resume file
      const url = URL.createObjectURL(resumeFile);
      // Trigger download of the resume file
      window.open(url);
    } else {
      // If no resume file is uploaded, display an error message or handle it as per your application logic
      console.log("No resume file uploaded.");
    }
  };

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
            <div className={styles.ases}></div>

 <div>
   <div className={styles.outindiv}>
            <div className={styles.sidenavoutdiv}>
      <h4 className={styles.h4}>Profile</h4>
       <nav id="side-nav" className={styles.sidenav}>
          <div className={styles.sidediv}>
            <ul className="nav-links">
               <li><a href="#basic details">Basic Details</a></li>
               <li><a href="#skills">Skills</a></li>
               <li><a href="#availability">Availability</a></li>
               <li><a href="#roles">Roles & current earnings</a></li>
            </ul>
        </div>
        </nav>

            </div>

            <div className={styles.profileoutdiv}>
               <div  >
                <section id="basic details">
                    <div className="styles.basicin">
                    <div><p> Basic Details</p> </div>
                    <div><FontAwesomeIcon icon={faPencil} ></FontAwesomeIcon></div>

                    </div>
                  <div className={styles.profileoutindiv}>

      {isEditing ? (
        <form className={styles.form1}>
            <div>
            <label htmlFor="profileImage">Profile Picture:</label>
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            onChange={handleImageChange}
          />

          {profileImage && (
            <img src={URL.createObjectURL(profileImage)} alt="Profile" />
          )}
</div>
<div>

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
         </div>
         <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
         </div>
         <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
         </div>
         <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          </div>
          <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="text"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          </div>
          <div>
          <label htmlFor="linkedinProfile">LinkedIn Profile:</label>
          <input
            type="text"
            id="linkedinProfile"
            value={linkedinProfile}
            onChange={(e) => setLinkedinProfile(e.target.value)}
          />
         </div>
         <div>
          <label htmlFor="resume">Upload Resume:</label>
          <input
            type="file"
            id="resume"
            onChange={(e) => setResume(e.target.files[0])}
          />
          </div>
          <div>
          <button type="button" onClick={handleSaveClick}>
            Save
          </button>
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
          </div>
        </form>

      ) : (


        <div>
            {profileImage && <img src={URL.createObjectURL(profileImage)} alt="Profile" />}
          <div className={styles.div1}> 
          <div>{name} {lastName}</div>
          <div>
  <a href={linkedinProfile} >
    <FontAwesomeIcon icon={faLinkedin} />
  </a>
</div>          </div>
          <div className={styles.div1}> 
            <div> Email</div>
            <div> Country</div>
          </div>
          <div className={styles.div1}> 
            <div> {email}</div>
            <div> {country}</div>
          </div>
          <div className={styles.down}>
            <div>
            <div> Mobile Number</div>
            <div> {mobileNumber}</div>

            </div>
            <div>
            <button className={styles.resumeButton} onClick={handleDownloadResume}>
            Resume
  <FontAwesomeIcon icon={faDownload} />
 
</button>
                </div>
            </div>
          
          
          {/* Display other profile information here */}
          <button type="button" onClick={handleEditClick}>
            Edit Profile
          </button>
        </div>
      )}
    </div>
    





                </section>
      </div>

          





                <section id="skill">
                  <h1>hello</h1>
                </section>
                <section id="availability">
                  
                </section>
                <section id="roles">
                  
                </section>






            </div>






        </div>




  </div>





            </main>
             );
            }

            export default Profile;