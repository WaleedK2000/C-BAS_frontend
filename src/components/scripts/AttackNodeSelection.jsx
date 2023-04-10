import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import GridItem from "./attackMatrix/GridItem";

export default function AttackNodeSelection() {
  const { attack } = useParams();

  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://127.0.0.1:3000/api/nodes");
      setNodes(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="attack-matrix">
      <div className="">
        <h1>Select Node</h1>
      </div>
      <div className="grid-container">
        {Object.keys(nodes).map((key) => (
          <div className="grid-item">
            <Link
              className="text-link"
              to={"/red/attack_matrix/" + attack + "/" + nodes[key]._id}
            >
              <GridItem
                key={key}
                title={nodes[key].name}
                // icon={gridVal[key].icon}
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
