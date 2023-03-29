import React from "react";
import GridItem from "./GridItem";

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { Link } from "react-router-dom";

import "./AttackMatrix.scss";

export default function AttackMatrix() {
  const gridVal = {
    1: {
      title: "Persistance",
      icon: <DescriptionOutlinedIcon style={{ fontSize: "100px" }} />,
      link_To: "PERSISTANCE",
    },
    2: {
      title: "Initial Access",
    },
  };

  return (
    <div className="attack-matrix">
      <div className="">
        <h1>Attack Matrix</h1>
      </div>
      <div className="grid-container">
        {Object.keys(gridVal).map((key) => (
          <div className="grid-item">
            <Link className="text-link" to={gridVal[key].link_To}>
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

  // return (
  //   <div className="attack-matrix">
  //     <div className="">
  //       <h1>Attack Matrix</h1>
  //     </div>
  //     <div className="grid-container">
  //       <div className="grid-item">
  //         <GridItem title="Persistance" />
  //       </div>
  //       <div className="grid-item">
  //         {" "}
  //         <GridItem />
  //       </div>
  //       <div className="grid-item">1</div>
  //       <div className="grid-item">1</div> <div className="grid-item">1</div>
  //     </div>
  //   </div>
  // );
}
