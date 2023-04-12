import React from "react";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { Link } from "react-router-dom";
import GridItem from "./GridItem";

import "./DefenseMatrix.scss";

export default function DefenseMatrix() {
  const gridVal = {
    1: {
      title: "General Blue",
      icon: <DescriptionOutlinedIcon style={{ fontSize: "100px" }} />,
      link_To: "GENERAL",
    },
    2: {
      title: "Docker Logs",
      icon: <DescriptionOutlinedIcon style={{ fontSize: "100px" }} />,
      link_To: "DOCKER_LOGS",
    },
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
              to={"/blue/Defense_Matrix/" + gridVal[key].link_To}
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
