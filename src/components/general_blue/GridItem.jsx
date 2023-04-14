import React from "react";
// import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import "./GridItem.scss";

export default function GridItem(props) {
  return (
    <div className="box">
      <div className="grid-logo">{props.icon}</div>
      <h2>{props.title}</h2>
    </div>
  );
}
