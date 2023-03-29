import React from "react";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import "./GridItem.scss";

export default function GridItem() {
  return (
    <div className="box">
      <div className="grid-logo">
        <DescriptionOutlinedIcon style={{ fontSize: "100px" }} />
      </div>
      <h2>Persistance</h2>
    </div>
  );
}
