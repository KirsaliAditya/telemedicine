import React, { useState, useEffect, useRef } from 'react';
import './Profile.css';
import defaultPhoto from 'pro.jpg'; 
import icon1 from 'vc-icon.png';
import icon2 from 'list-icon.png';

export const Profile = () => {
  const handleClick = (iconName) => {
    // Handle click event based on the icon clicked
    console.log(`Icon clicked: ${iconName}`);
  };

  const [userPhoto, setUserPhoto] = useState(null); // State for user-uploaded photo
  const [userData, setUserData] = useState( { // Initial state with empty values for each field
    name: 'kanishka chauhan',
    age: '19 years',
    gender: 'female',
    phoneNumber: '',
    email: '',
    emergencyContact: ''
  }); 

  const [loading, setLoading] = useState(true); // State to track loading state
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Fetch user data from the backend API
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user'); // Adjust the endpoint URL as per your backend setup
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserData(data); // Set user data in state
        setLoading(false); // Update loading state
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false); // Update loading state even in case of error
      }
    };

    fetchUserData(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handlePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setUserPhoto(URL.createObjectURL(selectedPhoto)); // Update state with the selected photo
  };
  const handleUploadPhotoClick = () => {
    fileInputRef.current.click(); // Trigger click event on file input
  };

  return (
    <div className="gradient">
      <div className="back">
      <div className='profile-row'>
        <div className="profile-column">
          <img src={userPhoto ? userPhoto : defaultPhoto} alt="Profile" /> {/* Display user-uploaded photo if available, otherwise display default photo */}
          {!userPhoto && (
            <div>
              <input type="file" accept="image/*" onChange={handlePhotoChange} ref={fileInputRef} /> {/* File input for photo upload */}
              <button onClick={handleUploadPhotoClick}>Upload Photo</button>
            </div>
          )}
        </div>
        <div className='icon_but'>
          <button onClick={() => handleClick('icon1')}>
            <img src={icon1} alt="Icon 1"/>
          </button>
          <button onClick={() => handleClick('icon2')}>
            <img src={icon2} alt="Icon 2"/>
          </button>
        
        </div>
      </div>
      
      <div className='profile-row'>
        <div className="profile-column">
          {!loading && ( // Check if user data is loaded and not null
            <div className="user-details">
              <p>Name: {userData.name}</p>
              <p>Age: {userData.age}</p>
              <p>Gender: {userData.gender}</p>
              <p>Phone Number: {userData.phoneNumber}</p>
              <p>Email: {userData.email}</p>
              <p>Emergency Contact: {userData.emergencyContact}</p>
            </div>
          )}
        </div>
        <div className='icon_but1'>
          <div className='icon_but3'>
          <button onClick={() => handleClick('icon1')}>
            <img src={icon1} alt="Icon 3"/>
          </button>
          </div>
          <button onClick={() => handleClick('icon2')}>
            <img src={icon2} alt="Icon 4"/>
            
          </button>
          
        </div>
        </div>
      </div>
    </div>
  );  
          }
export default Profile;
