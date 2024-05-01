'use client'
import Image from "next/image";
import profile from '../../../public/Testlify.jpg';
import googlee from '../../../public/google.svg';
import metaa from '../../../public/meta.svg';
import microo from '../../../public/microsoft.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faUser, faBell } from '@fortawesome/free-solid-svg-icons'; // Import faBell icon
import { useState } from "react";
import styles from './jobs.module.css';
import React from 'react';
import SearchBar from './components/searchbar';

import Dropdown from "./components/Dropdown";
import JobsDiv from "./components/JobsDiv";

function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <main>
      <nav className={styles.navbar}>
        <div>
          <Image
            src={profile}
            height={80}
            width={120}
          />
        </div>
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
            
            <li className="dropdown">
              <div onClick={toggleDropdown}>
                <FontAwesomeIcon icon={faUser} />
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
      {isDropdownOpen && (
        <div className={styles.overlay} onClick={closeDropdown}>
        </div>
      )}



  <hr className={styles.separator} />{""}
<div>
    <h3>Jobs</h3>
</div>
 <div className={styles.contentContainer}>
    <div className={styles.srtbar}>
      <SearchBar />
      <input type="text" placeholder="Job roles" />
    </div>
    <div className={styles.dropdownContainer}>
      <Dropdown options={options} name="Skills" />
      </div>
      <div className={styles.dropdownContainer}>
      <Dropdown options={options} name="Work Preference" />
      </div>
      <div className={styles.dropdownContainer}>
      <Dropdown options={options} name="Company" />
      </div>
      <div className={styles.dropdownContainer}>
      <Dropdown options={options} name="Location" />
    </div>
  </div>

 <div className={styles.jobsdiv1}>
  <div className={styles.jobsdiv4}>
   <div className={styles.jobsdiv2}>
      <div className={styles.jobsdiv3} >
        <JobsDiv
        imageSrc={require(`../../../public/microsoft.svg`)}
        role={"Full Stack Developer"}
        skills={"Data structures , Java , JavaScript , Node.js, Python , Sql "}
        location={"Mumbai,India-Onsite"}
       />
      </div>
     <div className={styles.jobsdiv3}>
     <JobsDiv
        imageSrc={require(`../../../public/google.svg`)}
        role={"Frontend Developer"}
        skills={"Data structures , Java , JavaScript , Node.js, Python , Sql "}
        location={"Dubai-UAE -Remote"}
      />
    </div>
    <div className={styles.jobsdiv3}>
    <JobsDiv
        imageSrc={require(`../../../public/google.svg`)}
        role={"Frontend Developer"}
        skills={"Data structures , Java , JavaScript , Node.js, Python , Sql "}
        location={"Dubai-UAE -Remote"}
      />
    </div>
    <div className={styles.jobsdiv3}>
    <JobsDiv
        imageSrc={require(`../../../public/google.svg`)}
        role={"Frontend Developer"}
        skills={"Data structures , Java , JavaScript , Node.js, Python , Sql "}
        location={"Dubai-UAE -Remote"}
      />
    </div>
    </div>
    <div className={styles.jobsdiv2}>
    <div className={styles.jobsdiv3}>
    <JobsDiv
        imageSrc={require(`../../../public/google.svg`)}
        role={"Frontend Developer"}
        skills={"Data structures , Java , JavaScript , Node.js, Python , Sql "}
        location={"Dubai-UAE -Remote"}
      />
    </div>
    <div className={styles.jobsdiv3}>
    <JobsDiv
        imageSrc={require(`../../../public/google.svg`)}
        role={"Frontend Developer"}
        skills={"Data structures , Java , JavaScript , Node.js, Python , Sql "}
        location={"Dubai-UAE -Remote"}
      />
    </div>
    <div className={styles.jobsdiv3}>
    <JobsDiv
        imageSrc={require(`../../../public/google.svg`)}
        role={"Frontend Developer"}
        skills={"Data structures , Java , JavaScript , Node.js, Python , Sql "}
        location={"Dubai-UAE -Remote"}
      />
    </div>
    <div className={styles.jobsdiv3}>
      <JobsDiv
        imageSrc={"googlee"}
        role={"Frontend Developer"}
        skills={"Data structures , Java , JavaScript , Node.js, Python , Sql "}
        location={"Dubai-UAE -Remote"}
      />
    </div>
   </div>
   </div>
  </div>










    </main>
  );
}

export default Home;
