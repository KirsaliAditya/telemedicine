import './App.css';
import NavBar from './Components/NavBar';
import backgroundImage from './Background.jpeg'; // Import the image
import Features from './Components/Features';

function App() {
  return (
    <>
      <NavBar/>
      <style>{`
          body {
            background-image: url(${backgroundImage});
          }
        `}</style>
        <div className="container">
          <Features/>
        </div>
        <button type="button" className="btn btn-primary" style={{marginLeft:"200px",marginTop:"40px",marginBottom:"20px"}}>Get Started</button>
        <button type="button" className="btn btn-primary" style={{marginLeft:"800px",marginTop:"40px",marginBottom:"20px"}}>Book Appointment</button>
        {/*<div className="container" style={{marginTop:"150px"}}>
        <Login/>
        </div>*/}
    </>  
  );
}

export default App;
