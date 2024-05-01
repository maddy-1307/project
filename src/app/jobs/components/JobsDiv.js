'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import styles from './JobsDiv.modular.css';
import Image from "next/image";



const JobsDiv = ({ imageSrc, role, skills, location }) => {
   
  return (
    <div className={styles.jobs1}>
      <div className={styles.jobsimg}> 
        <img src={imageSrc} alt="Company Logo" width={100} height={100} />
      </div>
      <p className={styles.jobrole}>{role}</p>
      <p className={styles.skillrole}>{skills}</p>
      <div className={styles.jobloc}>
        <FontAwesomeIcon icon={faMapMarker} />
        <span>{location}</span>
      </div>
    </div>
  );
};

export default JobsDiv;