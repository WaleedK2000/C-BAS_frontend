import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import GridItem from "./attackMatrix/GridItem";

export default function RunScripts(props) {
  const attacks_list = {
    PERSISTANCE: {
      DOCKER_SOCKET: {
        something: "me",
        desc: "",
      },
      RECONNAISSANCE: {
        PID: {
          title: "PID Attack",
          exp: "pid_sh",
          desc: "Command: docker run --rm -it --pid=host ubuntu bash -c 'for e in ls /proc/*/environ; do echo; echo $e; xargs -0 -L1 -a $e; done'\nDescription: This command runs a Docker container based on the Ubuntu image with the --pid=host flag, allowing the container to share the host system's process namespace. It executes a bash command inside the container to retrieve and display the environment variables of all running processes on the host system.\nThe --rm flag ensures that the container is automatically removed after executing the command, preventing any unnecessary accumulation of containers.\nThe -it flag enables interactive access to the container's shell, providing a terminal interface to execute commands and view their output.\nThe command uses a for loop to iterate over the environment files located in the /proc/*/environ directories of each running process. It then prints the path to the environment file, followed by the environment variables contained within that file. The xargs command is used to read and display the contents of each environment file.\nThis command is helpful for inspecting the environment variables of running processes on the host system, providing insights into their configuration and settings.",
        },
        EXPOSE_HOST_FILEPATH: {
          title: "Expose Host File Path",
          exp: "expose_host_file",
          desc: "Command: docker run --rm --privileged alpine:latest sh -c 'head -1 /etc/mtab && sed -n 's/.*perdir=([^,]*).*/\1/p' /etc/mtab' > output.txt \n Description: This command runs a Docker container based on the alpine:latest image with privileged access. It executes a shell command within the container to extract specific information from the /etc/mtab file and redirects the output to a file named output.txt.\nThe --rm flag ensures that the container is automatically removed after it finishes running, helping to keep your system clean.\nThe --privileged flag grants the container full access to the host system's resources, allowing it to perform privileged operations that are otherwise restricted.\nWithin the container, the sh -c command launches a shell and executes a series of commands enclosed in double quotes.\nThe head -1 /etc/mtab command retrieves the first line of the /etc/mtab file, which contains information about mounted file systems.\nThe sed -n 's/.*perdir=([^,]*).*/\1/p' /etc/mtab command uses the Stream Editor (sed) to search for a specific pattern within the /etc/mtab file. It captures the value of the perdir parameter in each line and prints it (\1) to extract the desired information.\nThe > operator redirects the output of the entire Docker command to a file named output.txt, saving the extracted information for further use or analysis.\nExecuting this command allows you to extract and store relevant details from the /etc/mtab file using a Docker container, providing an isolated environment for running privileged operations and preserving the host system's integrity.",
        },
        SHOW_HASH: {
          title: "Show Hash",
          exp: "executeShowHashes",
          desc: "Command: docker run -v /:/host -it hysnsec/makemeroot sh -c 'cat /host/etc/shadow'\nDescription: This command runs a Docker container based on the hysnsec/makemeroot image and enables root access to the host system's file system. It then executes the command cat /host/etc/shadow inside the container, which reads and displays the contents of the /etc/shadow file on the host system.\nThe -v /:/host flag mounts the root directory of the host system as /host within the container, allowing the container to access and manipulate the host's file system.\nThe -it flag enables interactive access to the container's shell, providing a terminal interface to execute commands.\nThe hysnsec/makemeroot image is a custom Docker image that is designed to provide root access to the host system's file system when executed with the appropriate command.\nBy running this command, you gain access to the /etc/shadow file on the host system, which contains the hashed passwords of user accounts. However, it's important to exercise caution when working with sensitive system files, as unauthorized access or modification can lead to security risks.",
        },
        Shared_NAME_SPACE: {
          title: "Get Shared Namespace",
          exp: "executesharedNamespaces",
          desc: "Command: docker run --rm -it --pid=host alpine sh -c 'ps aux'\nDescription: This command runs a Docker container based on the alpine image with the --pid=host flag, allowing the container to share the host system's process namespace. It executes the command ps aux inside the container to display a snapshot of the current processes running on the host system.\nThe --rm flag ensures that the container is automatically removed after it finishes executing the command, preventing any unnecessary accumulation of containers.\nThe -it flag enables interactive access to the container's shell, providing a terminal interface to execute commands and view their output.\nThe --pid=host flag grants the container access to the host system's process namespace, which means that the container can see and retrieve information about the processes running on the host.\nInside the container, the sh -c command launches a shell and executes the ps aux command enclosed in single quotes.\nThe ps aux command is a common Unix command that displays detailed information about all processes running on the system. It provides a snapshot of the currently running processes, including their process IDs, resource usage, and other details.\nBy running this command, you can inspect the running processes on the host system from within the Docker container. It allows you to get insights into the system's process activity, such as identifying running services or monitoring resource usage.",
        },
      },
      INITIAL_ACCESS: {
        DOCKER_SOCKET: {
          title: "Docker Socket",
          exp: "exploit1",
          desc: "Command: docker run -it -v /var/run/docker.sock:/var/run/docker.sock ubuntu:latest sh -c 'apt-get update && apt-get install docker.io -y'\nDescription: This command runs a Docker container based on the ubuntu:latest image and enables interaction with the host system's Docker daemon. It installs the docker.io package inside the container by executing a series of commands within the container's shell.\nThe -it flag enables interactive access to the container's shell, providing a terminal interface to execute commands and view their output.\nThe -v /var/run/docker.sock:/var/run/docker.sock flag mounts the Docker daemon's Unix socket from the host system (/var/run/docker.sock) to the same location within the container. This allows the container to communicate with the host system's Docker daemon and perform Docker-related operations.\nInside the container, the sh -c command launches a shell and executes a series of commands enclosed in single quotes.\nThe apt-get update command updates the package repository within the container, ensuring it has the latest package information.\nThe apt-get install docker.io -y command installs the docker.io package from the repository. The -y flag is used to automatically answer 'yes' to any prompts during the installation process, ensuring a non-interactive installation.\nBy running this command, you set up a Docker environment inside the container, allowing you to interact with the host system's Docker daemon and perform Docker operations within the container. It installs the docker.io package, which provides the Docker command-line tools and necessary dependencies, facilitating the management of Docker containers and images from within the container.",
        },
      },
      DOS: {
        STRESS_ATTACK: {
          title: "Stress Attack",
          exp: "executeStressTest",
          desc: "Command: docker run --rm -it ubuntu sh -c 'apt-get update && apt-get install stress -y && stress --vm 2 --vm-bytes 2G --timeout 30'\nDescription: This command runs a Docker container based on the Ubuntu image and performs a series of operations inside the container. It starts by updating the package list using the apt-get update command. Then, it installs the stress tool using apt-get install stress -y. Finally, it utilizes the stress command to apply CPU stress on the system. It creates two virtual machines, each consuming 2 GB of memory, and runs them for a duration of 30 seconds.\nThe --rm flag ensures that the container is automatically removed after executing the command, preventing any unnecessary accumulation of containers.\nThe -it flag enables interactive access to the container's shell, providing a terminal interface to execute commands and observe their output.\nNote: This command is useful for generating artificial CPU load and testing system performance under stress conditions. Please exercise caution when running stress tests on production systems.",
        },
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
