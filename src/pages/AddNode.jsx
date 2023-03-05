import React, { useState } from "react";
import axios from "axios";

export default function AddNode() {
  const [name, setName] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [portNumber, setPortNumber] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://127.0.0.1:3000/api/nodes/", {
        name: name,
        ipAddress: ipAddress,
        portNumber: portNumber,
      });
      // reset form fields after successful submission
      setName("");
      setIpAddress("");
      setPortNumber("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Enter Node Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Node Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          IP Address:
          <input
            type="text"
            value={ipAddress}
            onChange={(event) => setIpAddress(event.target.value)}
          />
        </label>
        <br />
        <label>
          Port Number:
          <input
            type="number"
            value={portNumber}
            onChange={(event) => setPortNumber(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
