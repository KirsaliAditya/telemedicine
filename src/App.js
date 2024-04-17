import './App.css';
import NavBar from './Components/NavBar';
import backgroundImage from './Background.jpeg'; 
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './Components/Signup';
import SignIn from './Components/Signin';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import { useState } from 'react';
import Alert from './Components/Alert';


function App() {
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>
  {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <style>{`
          body {
            background-image: url(${backgroundImage});
          }
        `}</style>
    <Router>
      <NavBar/>
      <Alert alert={alert}/>
        <div className="container">
          <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/signin" element={<SignIn showAlert={showAlert}/>}/>
          <Route exact path="/signup" element={<SignUp showAlert={showAlert}/>}/>
          </Routes>
        </div>
      </Router>
    </>  
  );
}

export default App;
