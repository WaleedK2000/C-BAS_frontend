import React, { useState } from "react";
import SelectionNode from "../selection_node/SelectionNode";
import SelectionContainer from "../selection_container/SelectionContainer";

// This component is used to select a container from a node
// Output is saved in prop selectedContainer
// Output is selected container and selected node

//props is props.selectedNode(state var),  setSelectedNode(update state var)
// and setSelectedContainer (update state var)

export default function SelectionNodeContainer(props) {
  //   const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div>
      <div>
        Choose Node <h1>{props.selectedNode}</h1>
      </div>
      <SelectionNode
        selectedNode={props.selectedNode}
        setSelectedNode={props.setSelectedNode}
      />
      {props.selectedNode && (
        <SelectionContainer
          node={props.selectedNode}
          selectedContainer={props.selectedContainer}
        />
      )}
    </div>
  );
}
