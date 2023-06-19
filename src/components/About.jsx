import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const About = () => {
  // const params = useParams();
  const nav = useNavigate();
  const location = useLocation();
  const hundleAbout = () => {
    nav(-1);
    // console.log(params);
  };
  return (
    <div className="container">
      <h1>About</h1>
      <p>{location.state?.text}</p>
      <button onClick={hundleAbout}>Back to Home</button>
    </div>
  );
};

export default About;
