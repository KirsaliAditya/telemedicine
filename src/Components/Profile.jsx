import React, { useState, useEffect, useRef } from 'react';
import defaultPhoto from './pro.jpg'; 
import icon1 from './vc-icon.png';
import icon2 from './list-icon.png';
import { useNavigate } from 'react-router-dom';

export const Profile = (props) => {
  let navigate = useNavigate();
  const handleClick = (iconName) => {
    // Handle click event based on the icon clicked
    console.log(`Icon clicked: ${iconName}`);
  };

  const [userPhoto, setUserPhoto] = useState(null); // State for user-uploaded photo
  const [userData, setUserData] = useState({ // Initial state with empty values for each field
    name: '',
    contactnumber: '',
    email: '',
  }); 

  const [loading, setLoading] = useState(true); // State to track loading state
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Fetch user data from the backend API
    const fetchUserData = async () => {
      try {
        const authToken = localStorage.getItem('token');
        console.log(authToken); // Log the token to ensure it's retrieved correctly
        const response = await fetch("http://localhost:5000/api/auth/getuser", {
          method: "GET",
          headers: {
            "Authorization": "Bearer " + authToken // Format the authorization header
          }
        });
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

  const handleLogout = () => {
    // Clear the authentication token from local storage
    localStorage.removeItem('token');
    // Redirect the user to the login page (replace '/login' with the actual login page URL)
    navigate("/signin");
    props.showAlert('Logged out successfully', 'success');
  };

  const styles = {
    gradient: {
      padding: '20px',
      height: '50%',
    },
    back: {
      background: 'linear-gradient(45deg, #CAF0F8, #0096C7)',
    },
    profileRow: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
    profileColumn: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'column', 
    },
    profileColumnImg: {
      marginLeft: '80px', 
    },
    img: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      marginBottom: '20px',
      marginTop: '20px',
      marginLeft: '80px',
      marginRight: '30px',
      objectFit: 'cover',
    },
    userDetails: {
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '5px',
      width: '300px',
      height: '300px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      marginTop: '20px',
      marginLeft: '20px',
      marginRight: '10px',
    },
    userDetailsP: {
      margin: '10px 0',
      textAlign: 'left',
    },
    input: {
      display: 'none',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginLeft: '120px',
    },
    label: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '5px',
      borderColor: '#0096C7',
      cursor: 'pointer',
    },
    labelHover: {
      backgroundColor: '#0056b3',
    },
    iconBut: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10px',
    },
    iconButButton: {
      padding: '5px',
      margin: '0 140px',
      backgroundColor: 'transparent',
      mixBlendMode: 'multiply',
      border: 'none',
      cursor: 'pointer',
      transition: 'box-shadow 0.3s ease',
    },
    iconBut1: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10px',
    },
    iconBut1Button: {
      margin: '20px 100px',
      padding: '20px',
      backgroundColor: 'transparent',
      mixBlendMode: 'multiply',
      border: 'none',
      cursor: 'pointer',
      transition: 'box-shadow 0.3s ease',
    },
    iconImg: {
      width: '200px',
      height: '200px',
      backgroundColor: 'transparent',
      borderRadius: '0px',
    },
    iconImgHover: {
      filter: 'drop-shadow(0 0 40px rgba(3, 4, 94, 0.5))',
    },
  };

  return (
    <div style={styles.gradient}>
      <div style={styles.back}>
        <div style={styles.profileRow}>
          
          <div style={styles.profileColumn}>
            <img src={userPhoto ? userPhoto : defaultPhoto} alt="Profile" style={{ ...styles.img }} /> {/* Display user-uploaded photo if available, otherwise display default photo */}
            {!userPhoto && (
              <div>
                <input type="file" accept="image/*" onChange={handlePhotoChange} ref={fileInputRef} style={{ ...styles.input }} /> {/* File input for photo upload */}
                <button onClick={handleUploadPhotoClick} style={{ ...styles.button }}>Upload Photo</button>
              </div>
            )}
          </div>
          <div style={styles.iconBut}>
            <button onClick={() => handleClick('icon1')} style={{ ...styles.iconButButton }}>
              <img src={icon1} alt="Icon 1" style={{ ...styles.iconImg }} />
            </button>
            <button onClick={() => handleClick('icon2')} style={{ ...styles.iconButButton }}>
              <img src={icon2} alt="Icon 2" style={{ ...styles.iconImg }} />
            </button>
          </div>
        </div>

        <div style={styles.profileRow}>
          <div style={styles.profileColumn}>
            {!loading && ( // Check if user data is loaded and not null
              <div style={styles.userDetails}>
                <p style={styles.userDetailsP}>Name: {userData.name}</p>
                <p style={styles.userDetailsP}>Contact Number: {userData.contactnumber}</p>
                <p style={styles.userDetailsP}>Email: {userData.email}</p>
              </div>
            )}
          </div>
          <div style={styles.iconBut1}>
            <div style={styles.iconBut3}>
              <button onClick={() => handleClick('icon1')} style={{ ...styles.iconBut1Button }}>
                <img src={icon1} alt="Icon 3" style={{ ...styles.iconImg }} />
              </button>
            </div>
            <button onClick={() => handleClick('icon2')} style={{ ...styles.iconBut1Button }}>
              <img src={icon2} alt="Icon 4" style={{ ...styles.iconImg }} />
            </button>
          </div>
        </div>
      </div>
    
      <div className="logout-button">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );  
}

export default Profile;
