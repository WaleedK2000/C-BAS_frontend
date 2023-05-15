import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import GridItem from "./attackMatrix/GridItem";

import LoopIcon from "@mui/icons-material/Loop";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SearchIcon from "@mui/icons-material/Search";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import GroupWorkIcon from "@mui/icons-material/GroupWork";

export default function RunScripts(props) {
  const ICON_STYLE = { fontSize: "100px" };
  const attacks_list = {
    PERSISTANCE: {
      Place_holder: {
        title: "check",
        exp: "me",
        icon: <CheckCircleIcon style={ICON_STYLE} />, // Add the icon style
      },
    },
    RECONNAISSANCE: {
      PID: {
        title: "PID Attack",
        exp: "pid_sh",
        icon: <SettingsIcon style={ICON_STYLE} />, // Add the icon style
      },
      EXPOSE_HOST_FILEPATH: {
        title: "Expose Host File Path",
        exp: "expose_host_file",
        icon: <FolderOpenIcon style={ICON_STYLE} />, // Add the icon style
      },
      SHOW_HASH: {
        title: "Show Hash",
        exp: "executeShowHashes",
        icon: <VpnKeyIcon style={ICON_STYLE} />, // Add the icon style
      },
      Shared_NAME_SPACE: {
        title: "Get Shared Namespace",
        exp: "executesharedNamespaces",
        icon: <GroupWorkIcon style={ICON_STYLE} />, // Add the icon style
      },
    },
    INITIAL_ACCESS: {
      DOCKER_SOCKET: {
        title: "Docker Socket",
        exp: "exploit1",
        icon: <LockOpenIcon style={ICON_STYLE} />,
      },
      CONTAINER_CREDENTIAL_SCANNER: {
        title: "Container Credential Scanner",
        exp: "executeContainerCredentialScanner",
      },
    },
    DOS: {
      STRESS_ATTACK: {
        title: "Stress Attack",
        exp: "executeStressTest",
        icon: <WarningIcon style={ICON_STYLE} />, // Add the icon style
      },
    },
  };

  const { attack, conId } = useParams();

  const choosenAttackList = attacks_list[attack];

  return (
    <div className="attack-matrix">
      <div className="">
        <h1>Select Script</h1>
      </div>
      <div className="grid-container">
        {Object.keys(choosenAttackList).map((key) => (
          <div className="grid-item">
            <Link
              className="text-link"
              to={
                "/red/attack_matrix/" +
                attack +
                "/" +
                conId +
                "/" +
                choosenAttackList[key].exp
              }
            >
              <GridItem
                key={key}
                title={choosenAttackList[key].title}
                icon={choosenAttackList[key].icon}
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
