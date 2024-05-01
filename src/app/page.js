'use client'

import Image from "next/image";
import pagestyles from "./page.module.css";
import styles from './styless.module.css'
import profile from '../../public/Testlify.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faUser ,faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import { useState} from "react";
import { useRouter } from "next/navigation";



export default function LandPage() {
  const router= useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const DragDropFiles = () => {
    const [files, setFiles] = useState(null);
    const handleDragOver=(event)=>{
      event.preventDefault();

    };
    const handleDrop=(event)=>{
      event.preventDefault();
      console.log(event.dataTransfer.files)
    }
    const handleUpload=()=>{}
    if(files) return(
      <div>
        <ul>
          {
            Array.from(files).map((file,idx)=><li key={idx}>{file.name}</li>)
          }
        </ul>
       
      </div>
    )
    return (
      <>
        {!files && (
          <div 
          onDragOver={handleDragOver}
          onDrop={handleDrop}>
            <div>
              <FontAwesomeIcon icon={faCloudUpload} />
            </div>
            <h4>Upload Resume</h4>
            <br />
            <h8>Max. file size: 4MB (only .pdf, .doc files are supported)</h8>
          </div>
        )}
      </>
    );
  };


  return (
    <main >
    <nav id="desktop-nav" className={styles.navbar}> {/* Apply navbar class */}
        <div className={styles.logo}> {/* Apply logo class */}
          <Image
            src={profile}
            height={100}
            width={100}
          />
        </div>
        <div className={styles.navLinks}> {/* Apply navLinks class */}
          <ul > {/* Remove dots by default */}
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faChild} />
              </a>
            </li>
            <li className="dropdown">
              <div onClick={toggleDropdown}>
                <FontAwesomeIcon icon={faUser} />
                {isDropdownOpen && (
                  <div className={styles.dropdownContent}> {/* Apply dropdownContent class */}
                    <div> {/* Wrap each link in its own div */}
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
      {/* Close dropdown when clicking outside */}
      {isDropdownOpen && (
        <div className={styles.overlay} onClick={closeDropdown}>

        </div>
      )}
         
         <div className={styles.divbodyContainer}>
  <div className={styles.divbody}>
    <h3>Hi Abhishek!</h3>
    <h5>Welcome to Testlify! Let's get started</h5>
    <h6>LinkedIn Profile Url</h6>
    <input type="text"></input>
    <h6>Resume</h6>
   
        <div className={styles.dropzone}>
         < DragDropFiles/>
        

    </div>
    <br></br>
    <button className={styles.btncont} onClick={()=>{router.push("/home"), handleUpload} }> Continue</button>
  </div>
</div>
    </main>
  );
}
