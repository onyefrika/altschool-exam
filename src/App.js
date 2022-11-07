import React from "react";
import { Route, Routes } from "react-router-dom";
import CurrentRepo from "./pages/CurrentRepo";
import GithubProfile from "./pages/GithubProfile";
import GithubRepoPage from "./pages/GithubRepoPage";
import PageNotFound from "./pages/PageNotFound";
import './styles/App.css'
import ErrorBoundaryDisplay from "./pages/ErrorBoundaryDisplay";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<GithubProfile />} />
      <Route path="repos/:id" element={<GithubRepoPage />} />
      <Route path="repos/repo/:name" element={< CurrentRepo/>}/>
      <Route path="/error" element={<ErrorBoundaryDisplay />}/>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;