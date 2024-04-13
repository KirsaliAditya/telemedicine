import React from "react";

const Item = (props) => {
  return (
    <div>
      <div className="card my-3" style={{ width: "300px", height: "450px", backgroundColor: "lightcyan" }}>
        <img src={props.url} className="card-img-top" alt="" style={{ width: "100%", height: "150px" }} />
        <div className="card-body" style={{ marginBottom: "10px" }}>
          <h5 className="card-title" style={{ fontSize: "20px",color:"darkblue", fontFamily:"TimesNewRoman",fontWeight:"bold" }}>{props.title}</h5>
          <p className="card-text" style={{ fontSize: "16px",fontFamily:"TimesNewRoman",fontWeight:"normal"}}>
            {props.description}
          </p>
          <a href="/" className="btn btn-primary" style={{ fontSize: "16px", position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)" }}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;
