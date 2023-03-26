import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

export default function ContainerListTable(props) {
  const { nodeId } = useParams();
  const dockerList = props.dockerList;
  const containerNames = Object.keys(dockerList.data);
  var i = 0;

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Container Name</th>
            <th scope="col">Type</th>
            <th scope="col">Status</th>

            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {containerNames.map((key) => (
            <tr key={dockerList.data[key].Name}>
              <th scope="row">{(i += 1)}</th>
              <td>{dockerList.data[key].Name}</td>
              <td>{dockerList.data[key].Config.Image}</td>
              <td>{dockerList.data[key].State.Status}</td>
              <td>
                <Link to={"/" + nodeId + "/running_containers/" + key}>
                  Click Here
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
