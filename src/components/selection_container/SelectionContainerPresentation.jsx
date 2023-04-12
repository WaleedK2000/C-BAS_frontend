import React, { useState, useEffect } from "react";

export default function SelectionContainerPresentation(props) {
  const dockerList = props.dockerList;
  const containerNames = Object.keys(dockerList.data);
  const [selectedKey, setSelectedKey] = useState(null);
  var i = 0;
  return (
    <>
      <div>
        <select
          value={selectedKey}
          onChange={(e) => setSelectedKey(e.target.value)}
        >
          {containerNames.map((key) => (
            <option key={key} value={key}>
              {dockerList.data[key].Name}
            </option>
          ))}
        </select>
        {selectedKey && (
          <div>
            <p>Image: {dockerList.data[selectedKey].Config.Image}</p>
            <p>Status: {dockerList.data[selectedKey].State.Status}</p>
          </div>
        )}
      </div>
    </>
  );
}
