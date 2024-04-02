import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import LoginInput from "../components/LoginInputs";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send registration request to server
  };

  return (
    <div className="w-[400px] p-12 h-[fit-content] flex flex-col items-center bg-slate-300 rounded-xl">
      <Typography variant="h4">Registration</Typography>
      <LoginInput
        type="text"
        value={name}
        label="Full Name"
        onChange={(e) => setName(e.target.value)}
        sx={{ width: "100%" }}
      />
      <LoginInput
        type="email"
        value={email}
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
        sx={{ width: "100%" }}
      />
      <LoginInput
        type="password"
        value={password}
        label="Password"
        onChange={(e) => setPassword(e.target.value)}
        sx={{ width: "100%" }}
      />
      <Button
        variant="contained"
        sx={{ backgroundColor: "#555", "&:hover": { backgroundColor: "#444" } }}
      >
        Register
      </Button>
    </div>
  );
};

export default Registration;
