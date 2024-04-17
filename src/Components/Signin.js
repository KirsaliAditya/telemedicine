import React,{useState}from 'react'
import { useNavigate } from 'react-router-dom';

function Signin(props) {
  const [credentials, setCredentials] = useState({email:"", password:""});
  let navigate = useNavigate();
  const handleSubmit = async (e)=>{
          e.preventDefault();
   const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },body: JSON.stringify({email:credentials.email, password:credentials.password})
      });
          const json = await response.json();
          if(json.success){
              // Save the auth token and redirect
              localStorage.setItem('token', json.authToken);
              console.log(json);
              props.showAlert("Logged in Successfully", "success")
              navigate("/");
          } else {
              props.showAlert("Invalid Credentials", "danger")
          }
  }

  const onChange = (e) => {
      setCredentials({...credentials, [e.target.name]: e.target.value})
  } 
  return (
    <div>
      <div className="container" style={{marginTop:"120px",width:"500px",background:"lightblue",padding:"10px",borderRadius:"10px"}}>
        <h2>Log in Account </h2>
        <div className="container" style={{}}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              value={credentials.email} onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              value={credentials.password} onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Signin
