import React from 'react'
import {Link} from "react-router-dom"
import '../styles/PageNotFound.css'

function PageNotFound() {
  return (
    <div className='PNF-container'>
      <div className="PNF">
        <div className="PNF-Header">
          <h1>Oops!</h1>
          <h3>We can't seem to find the page <br/> you're looking for.</h3>
          <p>Error code: 404</p>
          <div className="button-section">
            <Link to="/" className="btn">
              Back to Home
            </Link>
          </div>
        </div>
        <div className="404-emo">
          <p className='PNF-emoji'>😕</p>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound
