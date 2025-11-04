

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getAllRegisterAPI } from "../service/allAPI";
import Swal from 'sweetalert2'

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    const { email, password } = loginData;

    if (!email || !password) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const response = await getAllRegisterAPI();
      const users = response.data;

      const existingUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (existingUser) {
        // Save user info to localStorage
        localStorage.setItem("loggedInUser", JSON.stringify(existingUser));

        if (existingUser.role === "admin") {
        //   alert("Admin Login Successful!");
         Swal.fire({
                title: "Success!",
                text: "Login successfully 🎉",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
              });
          navigate("/adminhome");
        } else {
        //   alert("User Login Successful!");
         Swal.fire({
                title: "Success!",
                text: "Login  successfully 🎉",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
              });
          navigate("/userhome");
        }
      } else {
        alert("Invalid email or password!");
      }
    } catch (error) {
      console.error("Login error:", error);
    //   alert("Something went wrong during login.");
    Swal.fire({
            icon: "error",
            title: "Something went wrong during login",
          });
    }
  };

  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/94/6e/c5/946ec553a81d1c5675ede79af7aa974a.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: 400,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.11)",
          borderRadius: "16px",
          color: "white",
          boxShadow: "0 8px 32px rgba(31,38,135,0.37)",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Login
        </Typography>

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          InputLabelProps={{ style: { color: "white" } }}
          InputProps={{ style: { color: "white" } }}
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          variant="outlined"
          margin="normal"
          InputLabelProps={{ style: { color: "white" } }}
          InputProps={{ style: { color: "white" } }}
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            backgroundColor: "#7a2a06",
            fontWeight: "bold",
            borderRadius: "8px",
          }}
          onClick={handleLogin}
        >
          Login
        </Button>

        <Typography variant="body2" sx={{ textAlign: "center", mt: 2,color:"red" ,fontSize:"19px",fontWeight:"bold"}}>
          Don’t have an account?{" "}
          <Link
            underline="hover"
            color="inherit"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Register
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Login;


