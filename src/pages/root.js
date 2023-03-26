// import { createDockerDesktopClient } from '@docker/extension-api-client';
// import React, { useState } from 'react';

// const ddClient = createDockerDesktopClient();

// export default async function Root() {
//     const [dockerInfo, setDockerInfo] = useState(null);
//     const result = await ddClient.docker.cli.exec("info", [
//         "--format",
//         '"{{json .}}"',
//     ]);
//     setDockerInfo(result.parseJsonObject());

//     console.log(dockerInfo);

//     return (
//         dockerInfo
//     )
// }

import React from "react";
import ContainerList from "../components/ContainerList";
import Navbar from "../components/Navbar";
export default function root() {
  return (
    <>
      <Navbar />
      <ContainerList />
    </>
  );
}
