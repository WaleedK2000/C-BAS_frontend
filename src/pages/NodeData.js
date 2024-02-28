import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import axios from "axios";

// import table component and icons from @mui/material
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import PublicIcon from "@mui/icons-material/Public";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
// import one more icon for port number
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import { getBackendLink } from "../helpers/backend_link";

// import the scss file and assign it to a variable
import styles from "./NodeData.module.scss";

export default function NodeData(props) {
  const { nodeId } = useParams();

  const [node, setNode] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${getBackendLink()}/api/nodes`, {
        params: {
          id: nodeId,
        },
      });
      setNode(...result.data);
    };
    fetchData();
  });

  return (
    <div>
      {node ? (
        <div>
          {/* add a heading that says Node Details */}
          {/* use className prop to apply the heading style */}
          <h1 className={styles.heading}>Node Details</h1>
          {/* use a table component to display the node data */}
          {/* use className prop to apply the table container style */}
          <TableContainer className={styles.tableContainer}>
            <Table>
              <TableHead>
                <TableRow>
                  {/* add icons to the table headers */}
                  {/* use className prop to apply the table header style */}
                  <TableCell className={styles.tableHeader}>
                    <ComputerIcon /> Node Name
                  </TableCell>
                  <TableCell className={styles.tableHeader}>
                    <PublicIcon /> IP Address
                  </TableCell>
                  {/* remove the table header for added by */}
                  {/* add one more table header for port number */}
                  <TableCell className={styles.tableHeader}>
                    <SettingsInputComponentIcon /> Port Number
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{node.name}</TableCell>
                  <TableCell>{node.ipAddress}</TableCell>
                  {/* remove the table cell for added by */}
                  {/* add one more table cell for port number */}
                  <TableCell>{node.portNumber}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          {/* add some margin and padding to the button */}
          {/* change the button text and add an icon */}
          {/* use className prop to apply the button style */}
          <Link to={"/" + node._id + "/running_containers"}>
            <button className={styles.button}>
              <PlayCircleIcon /> View Red Team Scripts
            </button>
          </Link>
        </div>
      ) : (
        <h2>loading</h2>
      )}
    </div>
  );
}
