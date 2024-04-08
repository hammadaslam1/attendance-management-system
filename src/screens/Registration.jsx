/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import LoginInput from "../components/LoginInputs";
import { Link } from "react-router-dom";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "../firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signinSuccess } from "../redux/userReducer/userReducer";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    if (
      name &&
      email &&
      password &&
      name != "" &&
      email != "" &&
      password != ""
    ) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: name,
            // photoURL: profilePicture,
          })
            .then(() => {
              dispatch(
                signinSuccess({
                  name: name,
                  email: email,
                  userId: auth.currentUser.uid,
                })
              );
            })
            .then(() => {
              navigate("/");
              // alert("ok");
            });
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Please fill all the fields");
    }
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
        sx={{
          backgroundColor: "#555",
          m: 2,
          textTransform: "capitalize",
          "&:hover": { backgroundColor: "#444" },
        }}
        onClick={handleRegister}
      >
        Register
      </Button>
      <div className="w-[90%] h-1 bg-gray-500 mx-auto mb-4 rounded-full"></div>
      <Typography variant="body2" fontFamily={"Roboto"}>
        Already registered? <Link to={"/login"}>Login Here</Link>
      </Typography>
    </div>
  );
};

export default Registration;
