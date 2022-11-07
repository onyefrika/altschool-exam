import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios";
import { Results } from '../Components/Profile';
import '../styles/GithubProfile.css'

function GithubProfile() {
  const [profiles, setProfiles] = useState([]);
  const [users] = useState("onyefrika")
    const [loading, setLoading] = useState(false);

  useEffect(() => {
      const fetchProfile = async () => {
            setLoading(true);
      const res = await axios.get(
        `https://api.github.com/users/${users}`
      );
      setProfiles(res.data);
    //   console.log(res.data);
      setLoading(false);
};
    fetchProfile();
    // eslint-disable-next-line
}, []);
//   console.log(profiles);
  return (
    <>
      <div className="button-section">
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
      <h2>Currently Viewing {users}'s Profile</h2>
      <div className="main">
        <div className="profile-container">
          <Results profiles={profiles} loading={loading} />
        </div>
      </div>
    </>
  );
}

export default GithubProfile