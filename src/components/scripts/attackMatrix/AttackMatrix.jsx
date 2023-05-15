import React from "react";
import GridItem from "./GridItem";

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { Link } from "react-router-dom";

import "./AttackMatrix.scss";

import LoopIcon from "@mui/icons-material/Loop";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SearchIcon from "@mui/icons-material/Search";
import WarningIcon from "@mui/icons-material/Warning";

const ICON_STYLE = { fontSize: "100px" };
const PINK_COLOR = "#ffd1dc";
const RED_COLOR = "#ff1b1c";

export default function AttackMatrix() {
  const gridData = [
    {
      title: "Persistence",
      icon: <LoopIcon style={ICON_STYLE} title="Persistence" />,
      linkTo: "PERSISTENCE",
    },
    {
      title: "Initial Access",
      icon: <LockOpenIcon style={ICON_STYLE} title="Initial Access" />,
      linkTo: "INITIAL_ACCESS",
    },
    {
      title: "Reconnaissance",
      icon: <SearchIcon style={ICON_STYLE} title="Reconnaissance" />,
      linkTo: "RECONNAISSANCE",
    },
    {
      title: "Denial of Service",
      icon: <WarningIcon style={ICON_STYLE} title="Denial of Service" />,
      linkTo: "DOS",
    },
  ];

  return (
    <div className="attack-matrix">
      <div className="">
        <h1>Attack Matrix</h1>
      </div>
      <div className="grid-container">
        {gridData.map((item) => (
          <div className="grid-item">
            <Link
              className="text-link"
              to={"/red/attack_matrix/" + item.linkTo}
            >
              <GridItem key={item.title} title={item.title} icon={item.icon} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
