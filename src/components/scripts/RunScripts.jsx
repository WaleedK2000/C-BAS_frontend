import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import GridItem from "./attackMatrix/GridItem";

export default function RunScripts(props) {
  const attacks_list = {
    PERSISTANCE: {
      DOCKER_SOCKET: {
        something: "me",
      },
    },
    RECONNAISSANCE: {
      PID: {
        title: "PID Attack",
        exp: "pid_sh",
      },
      EXPOSE_HOST_FILEPATH: {
        title: "Expose Host File Path",
        exp: "expose_host_file",
      },
      SHOW_HASH: {
        title: "Show Hash",
        exp: "executeShowHashes",
      },
      Shared_NAME_SPACE: {
        title: "Get Shared Namespace",
        exp: "executesharedNamespaces",
      },
    },
    INITIAL_ACCESS: {
      DOCKER_SOCKET: { title: "Docker Socket", exp: "exploit1" },
    },
    DOS: {
      STRESS_ATTACK: {
        title: "Stress Attack",
        exp: "executeStressTest",
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
