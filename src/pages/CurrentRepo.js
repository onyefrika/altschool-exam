import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/CurrentRepo.css";

function CurrentRepo() {
  const [currentRepo, setCurrentRepo] = useState([]);
  //   const [repoTitle, setRepoTitle] = useState([])
  //   const [loading, setLoading] = useState(false);

  const params = useParams();
  const name = params.name;

  useEffect(() => {
    const fetchCurrentRepo = async () => {
      //   setLoading(true);
      const res = await axios.get(
        `https://api.github.com/repos/onyefrika/${name}/contents`
      );
      setCurrentRepo(res.data);
      console.log(res.data);
      //   setLoading(false);
    };
    fetchCurrentRepo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="button-section">
        <Link to="/" className="btn">
          Back to Home
        </Link>
        <Link to="/repos/1" className="btn">
          Back to Repos
        </Link>
      </div>
      <div className="content-header">
        <h1 className="content-title">Contents</h1>
      </div>
      <div className="content-body">
        {currentRepo.map((item, index) => (
          <div className="content" key={index}>
            <p>File name: {item.name}</p>
            <p>File size: {item.size}(kb)</p>
            <p>File type: {item.type}</p>
          </div>
        ))}
        <div></div>
      </div>
    </>
  );
}

export default CurrentRepo;
