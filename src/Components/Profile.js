import React from 'react'
import '../styles/Profile.css'
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const Results = ({profiles, loading}) => {
   if (loading) {
     return (
       <div>
        {/*added spinner effect to the loading state*/}
         <Backdrop
           sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
           open
         >
           <CircularProgress color="inherit" />
         </Backdrop>
       </div>
     );
   }

    // const {profiles} = props;
    console.log('Profile is: ', profiles);
    return (
      <div className="profile-box">
        <div className="profile-picture">
          <img src={profiles.avatar_url} alt={profiles.name} />
        </div>
        <div className="profile-text">
          <h3>Hi! I'm {profiles.name}</h3>
          <p>
            I'm a frontend developer, currently studying in Altschool Africa,
            i'm skilled in HTML, CSS and Javascript with a Basic Knowledge in Python and Mysql. Here's a quick summary
            about me: <br/>  I'm currently studying at AltSchool Africa School of Software Engineering Class of 2022. 
           learning to be a frontend developer. <br/>im interested in internships, and
            entry-level opportunities. <br/> Job interests: Software Engineer,
            Front developer. <br/> Email: jennyfaazubuko@gmail.com <br/>Phone number: 08065413025
            <br/> Click Below to view my Github Repo
          </p>
          <div className="button-section">
            <Link to="/repos/1" className="btn">
              View Repositories
            </Link>
          </div>
        </div>
      </div>
    );
}