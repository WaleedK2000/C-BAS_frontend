import React from "react";

// TODO Need to pass variable/prop from previous page

export default function containerData(props) {
  console.log(props);

  return (
    <>
      <h1>Vulnerability page</h1>
      <p>
        Click Button to test Docker Socket Vulnerability Container {props.key}
      </p>
      <button type="button" className="btn btn-primary">
        Test Docker Socket
      </button>
    </>
  );
}
