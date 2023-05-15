import React, { useState } from "react";

import SelectionNode from "../selection_node/SelectionNode";
import ContainerPresentation from "./ContainerPresentation";

export default function SelectionNodePresentationContainer() {
  const { selectedNode, setSelectedNode } = useState(false);
  return (
    <>
      <SelectionNode
        selectedNode={selectedNode}
        setSelectedNode={setSelectedNode}
      />

      <ContainerPresentation />
    </>
  );
}
