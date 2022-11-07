import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import "../styles/Repository.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
// import Loading from "./Loading";

function Repository({ repos, loading }) {
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
  //   const { repos } = props;
  console.log("your Repo is: ", repos);
  return (
    <div className="repo-container">
      {repos.map((repo) => (
        <div className="repo-box" key={repo.id}>
          <h3 className="repo-title">{repo.name}</h3>
          {repo.private ? (
            <p className="private">Private</p>
          ) : (
            <p className="public">Public</p>
          )}
          <p className="repo-date">
            This Repository was created at{" "}
            {format(new Date(repo.created_at), "dd MMMM yyyy")} by{" "}
            {repo.owner.login}
          </p>
          <div className="repo-lang">
            {repo.language ? (
              <p>Language: {repo.language}</p>
            ) : (
              <p>Language: null</p>
            )}
          </div>
          <div className="repo-button">
            <Link to={`/repos/repo/${repo.name}`} className="repo-btn">
             Click to view
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Repository;
