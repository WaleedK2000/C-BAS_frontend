import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Grid } from "@mui/material";
import AddNodePresentation from "./AddNodePresentation";

export default function AddNode() {
  const [name, setName] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [portNumber, setPortNumber] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    // validate form fields before submitting
    const isValid = validateForm();
    if (!isValid) return;

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
      setErrors({});
    } catch (error) {
      console.error(error);
    }
  };

  // custom hook or library for form validation
  const validateForm = () => {
    // reset errors object
    setErrors({});

    // define validation rules
    const rules = {
      name: (value) => value.trim() !== "",
      ipAddress: (value) => /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(value),
      portNumber: (value) =>
        /^\d+$/.test(value) && value >= 0 && value <= 65535,
    };

    // define error messages
    const messages = {
      name: "Node name is required",
      ipAddress: "IP address must be a valid IPv4 address",
      portNumber: "Port must be an integer between 0 and 65535",
    };

    // loop through each field and check if it passes the validation rule
    let isValid = true;
    for (const field in rules) {
      const value =
        field === "name"
          ? name
          : field === "ipAddress"
          ? ipAddress
          : portNumber;
      if (!rules[field](value)) {
        // if not, set the error message for that field
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: messages[field],
        }));
        isValid = false;
      }
    }

    // return true if all fields are valid, false otherwise
    return isValid;
  };

  return (
    <AddNodePresentation
      handleSubmit={handleSubmit}
      setName={setName}
      name={name}
      setIpAddress={setIpAddress}
      ipAddress={ipAddress}
      setPortNumber={setPortNumber}
      portNumber={portNumber}
      errors={errors}
    />
  );
}
