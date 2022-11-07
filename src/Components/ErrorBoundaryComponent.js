import React from "react";

function ErrorBoundaryComponent({ petName }) {
  if (petName === "sophia") {
    throw new Error("Not  my pet!");
  }
  

  return (<div>{petName}</div>)
}

export default ErrorBoundaryComponent;
