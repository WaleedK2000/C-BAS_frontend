// Returns list of containers running in a table, by sending post request to API Server

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const axios = require("axios");

export default function ContainerList() {
  const [dockerList, setdockerList] = useState(0);

  const handleClick = (event) => {
    // print(this);
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/container/running_containers", {
        // params: {
        //     facultyId: `'AV189'`
        // },
      })
      .then(function (response) {
        return response.data;
      })
      .then((res) => {
        setdockerList(res);
        // console.log("------------------------------------");
        // console.log(res.data);
      })
      .catch(function (error) {
        // console.log(error);
      });
  }, []);

  // Condition To check if data is loaded
  if (dockerList === 0) {
    return <div className="load">Loading</div>;
  } else if (dockerList.running === 0) {
    return <div className="load">No Running</div>;
  } else {
    const containerNames = Object.keys(dockerList.data);

    var i = 0;
    const list = containerNames.map((key) => (
      <tr key={dockerList.data[key].Name}>
        <th scope="row">{(i += 1)}</th>
        <td>{dockerList.data[key].Name}</td>
        <td>{dockerList.data[key].Config.Image}</td>
        <td>{dockerList.data[key].State.Status}</td>
        <td>
          <Link to={"/running_containers/" + key}>Click Here</Link>
        </td>
      </tr>
    ));

    // console.log("heifhrfhrffrfrfrff");
    // console.log(list);

    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Container Name</th>
            <th scope="col">Type</th>
            <th scope="col">Status</th>

            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    );
  }
}
