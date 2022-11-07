import React from "react";
import { useState, useEffect } from "react";
import Repository from "../Components/Repository";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/GithubRepoPage.css";
// import { Pagination } from '../Components/Pagination';

function GithubRepoPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 2;
  const totalReposFetched = 11;

  useEffect(() => {
    const fetchRepo = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/users/onyefrika/repos?per_page=${totalReposFetched}`
      );
      setRepos(res.data);
      //   console.log(res.data);
      setLoading(false);
    };
    fetchRepo();
  }, []);
  console.log(repos);
  console.log(repos.length);

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepo = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  // change page
  //   const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const navigate = useNavigate();

  const handleNext = (event) => {
    event.preventDefault();
    const length = repos.length;
    const count = length - 1;
    if (currentPage < count) {
      setCurrentPage(currentPage + 1);
      navigate(`/repos/${currentPage + 1}`);
    } else {
      setCurrentPage(1);
    }
  };

  const handlePrevious = (event) => {
    event.preventDefault();

    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      navigate(`/repos/${currentPage - 1}`);
    } else {
      setCurrentPage(0);
    }
  };
  ///
  ///
  return (
    <>
      <div className="home-button">
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
      <div className="section">
        <h2 className="repo-page-header">Github Repos</h2>
        <Repository repos={currentRepo} loading={loading} />
        <div className="paginate">
          <button
            className="prev"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="next"
            onClick={handleNext}
            disabled={
              currentPage === Math.ceil(totalReposFetched / reposPerPage)
            }
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default GithubRepoPage;
