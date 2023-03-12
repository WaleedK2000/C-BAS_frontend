// Returns list of containers running in a table, by sending post request to API Server

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RotateLoader from "react-spinners/RotateLoader";
import ContainerListTable from "./ContainerListTable";

import "../scss/components/containerList.scss";

const axios = require("axios");

export default function ContainerList(props) {
  const [dockerList, setdockerList] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleClick = (event) => {
    // print(this);
  };

  const controller = new AbortController();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/container/running_containers", {
        // Abort Signal Cancels Request if no response or other kind of error occur
        signal: AbortSignal.timeout(18000),
        // params: {
        //     facultyId: `'AV189'`
        // },
      })
      .then(function (response) {
        return response.data;
      })
      .then((res) => {
        setdockerList(res);
        setLoading(false);

        // console.log("------------------------------------");
        // console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);

        setdockerList({
          data: {
            con1: {
              Name: "Test",
              Config: {
                Image: "Ubuntu Test",
              },
              State: {
                Status: "Good",
              },
            },
          },
        });
      });
  }, []);

  // Condition To check if data is loaded

  // if (dockerList === 0) {
  //   return <div className="load">Loading</div>;
  // } else if (dockerList.running === 0) {
  //   return <div className="load">No Running</div>;
  // } else {
  //   const containerNames = Object.keys(dockerList.data);

  //   var i = 0;
  //   const list = containerNames.map((key) => (
  //     <tr key={dockerList.data[key].Name}>
  //       <th scope="row">{(i += 1)}</th>
  //       <td>{dockerList.data[key].Name}</td>
  //       <td>{dockerList.data[key].Config.Image}</td>
  //       <td>{dockerList.data[key].State.Status}</td>
  //       <td>
  //         <Link to={"/running_containers/" + key}>Click Here</Link>
  //       </td>
  //     </tr>
  //   ));

  //   // console.log("heifhrfhrffrfrfrff");
  //   // console.log(list);

  //   return (
  //     <table className="table">
  //       <thead>
  //         <tr>
  //           <th scope="col">#</th>
  //           <th scope="col">Container Name</th>
  //           <th scope="col">Type</th>
  //           <th scope="col">Status</th>

  //           <th scope="col"></th>
  //         </tr>
  //       </thead>
  //       <tbody>{list}</tbody>
  //     </table>
  //   );
  // }

  return (
    <div>
      <button onClick={() => props.selection("hello")}></button>
      {loading ? (
        <div className="nice">
          <RotateLoader />
        </div>
      ) : dockerList ? (
        <ContainerListTable dockerList={dockerList} />
      ) : (
        <></>
      )}
    </div>
  );
}
