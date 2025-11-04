
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Link,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useNavigate } from "react-router-dom";
import { addRegisterAPI, getAllRegisterAPI } from "../service/allAPI";

function RegisterPage() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    image: "",
  });

  // 📸 Image Upload Handler
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData({ ...userData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // 🧾 Register Handler
  const handleRegister = async () => {
    const { username, email, password, image } = userData;

    if (!username || !email || !password) {
      alert("Please fill all required fields!");
      return;
    }

    try {
      const response = await getAllRegisterAPI();
      const users = response.data;

      const existingUser = users.find((user) => user.email === email);
      if (existingUser) {
        alert("Email already exists! Please login.");
        return;
      }

      const newUser = {
        username,
        email,
        password,
        image,
        role: "user", // Default role
      };

      await addRegisterAPI(newUser);

      alert("Registration successful! Please login.");
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Something went wrong during registration.");
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
          Sign Up
        </Typography>

        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          margin="normal"
          InputLabelProps={{ style: { color: "white" } }}
          InputProps={{ style: { color: "white" } }}
          value={userData.username}
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        />

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          InputLabelProps={{ style: { color: "white" } }}
          InputProps={{ style: { color: "white" } }}
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          variant="outlined"
          margin="normal"
          InputLabelProps={{ style: { color: "white" } }}
          InputProps={{ style: { color: "white" } }}
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />

        {/* 📸 Upload Image */}
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          fullWidth
          sx={{
            mt: 2,
            mb: 2,
            backgroundColor: "#7a2a06",
            fontWeight: "bold",
            borderRadius: "8px",
          }}
        >
          Upload Profile Image
          <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
        </Button>

        {/* Preview */}
        {userData.image && (
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <img
              src={userData.image}
              alt="preview"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </Box>
        )}

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#7a2a06",
            fontWeight: "bold",
            borderRadius: "8px",
          }}
          onClick={handleRegister}
        >
          Register
        </Button>

        <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
          Already have an account?{" "}
          <Link
            underline="hover"
            color="inherit"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Login
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}

export default RegisterPage;




