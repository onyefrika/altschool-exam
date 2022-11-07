import React from "react";
import ErrorBoundaryComponent from "../Components/ErrorBoundaryComponent";
import { ErrorBoundary } from "../Components/ErrorBoundary";
import { Link } from "react-router-dom";

function ErrorBoundaryDisplay() {
  return (
    <>
      <ErrorBoundary>
        <ErrorBoundaryComponent petName="chuchu" />
      </ErrorBoundary>

      <ErrorBoundary>
        <ErrorBoundaryComponent petName="fido" />
      </ErrorBoundary>

      <ErrorBoundary>
        <ErrorBoundaryComponent petName="sophia" />
      </ErrorBoundary>

      <div className="button-section">
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    </>
  );
}

export default ErrorBoundaryDisplay;
