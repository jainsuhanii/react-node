import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

const AuthPage = () => {
  const [authMode, setAuthMode] = useState("login");
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAuthModeChange = (event, newMode) => {
    if (newMode) setAuthMode(newMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authMode === "register" && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
    } else {
      console.log("Form Submitted:", formData);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box textAlign="center" mb={3}>
        <ToggleButtonGroup
          value={authMode}
          exclusive
          onChange={handleAuthModeChange}
          aria-label="auth mode"
          sx={{ mb: 3 }}
        >
          <ToggleButton value="login" aria-label="login">
            Login
          </ToggleButton>
          <ToggleButton value="register" aria-label="register">
            Register
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography variant="h4">{authMode === "login" ? "Login" : "Register"}</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          margin="normal"
          value={formData.password}
          onChange={handleChange}
        />
        {authMode === "register" && (
          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            variant="outlined"
            margin="normal"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        )}
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          {authMode === "login" ? "Login" : "Register"}
        </Button>
      </form>
    </Container>
  );
};

export default AuthPage;
