import React from "react";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { Link } from "react-router-dom";
import GridItem from "./GridItem";

import "./GeneralBlue.scss";

export default function GeneralBlue() {
  const gridVal = {
    1: {
      title: "Container Vulnerability Scan",
      icon: <DescriptionOutlinedIcon style={{ fontSize: "100px" }} />,
      link_To: "CONTAINER_SCAN",
    },
    // 2: {
    //   title: "Docker Logs",
    //   icon: <DescriptionOutlinedIcon style={{ fontSize: "100px" }} />,
    //   link_To: "DOCKER_LOGS",
    // },
  };
  return (
    <div className="defence-matrix">
      <div className="">
        <h1>Defense Matrix</h1>
      </div>
      <div className="grid-container">
        {Object.keys(gridVal).map((key) => (
          <div className="grid-item">
            <Link
              className="text-link"
              to={"/blue/Defense_Matrix/GENERAL/" + gridVal[key].link_To}
            >
              <GridItem
                key={key}
                title={gridVal[key].title}
                icon={gridVal[key].icon}
              />
            </Link>
          </div>
        ))}
        {/* <div className="grid-item">
          <GridItem title="Persistance" />
        </div> */}
      </div>
    </div>
  );
}
