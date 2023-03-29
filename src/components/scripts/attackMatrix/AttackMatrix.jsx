import React from "react";
import GridItem from "./GridItem";

export default function AttackMatrix() {
  return (
    <div>
      <div className="">
        <h1>Attack Matrix</h1>
      </div>
      <div>
        <div className="grid">
          <div className="grid-container">
            <GridItem />
          </div>
          <div className="grid-container">
            <GridItem />
          </div>
        </div>
      </div>
    </div>
  );
}
