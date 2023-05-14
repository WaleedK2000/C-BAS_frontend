import React, { useState, useEffect } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export default function SelectionContainerPresentation(props) {
  const dockerList = props.dockerList;
  const containerNames = Object.keys(dockerList.data);
  const [selectedKey, setSelectedKey] = useState(null);
  var i = 0;
  return (
    <>
      <div>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="container-select-label">Select Container</InputLabel>
          <Select
            labelId="container-select-label"
            id="container-select"
            value={selectedKey}
            label="Select Container"
            onChange={(e) => {
              setSelectedKey(e.target.value);
              props.selectedContainer(e.target.value);
            }}
          >
            {containerNames.map((key) => (
              <MenuItem key={key} value={key}>
                {dockerList.data[key].Name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
}
