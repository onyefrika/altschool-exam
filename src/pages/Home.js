import { Link } from "react-router-dom";
import React from "react";
import '../styles/Home.css'

function Home() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="profile">
        <Link to="/profile" className="btn">
       Click  to view my Github Profile and Repository
          </Link>
          </div> 
        </div>
        
      <div className="container">
        <div className="profile">
        <Link to="/error" className="btn">
        Click to view ErrorBoundary
           </Link>
        </div>
        </div>
        
        
    </div>
  );
}
export default Home;
