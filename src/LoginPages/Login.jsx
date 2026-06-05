import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { loginUser, googleLogin } from "../auth";
import { useNavigate } from "react-router-dom";

const ADMIN_EMAIL = "umarimran0889@gmail.com"; // replace with your email

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await loginUser(email, password);

      localStorage.setItem("username", result.user.email);
      localStorage.setItem("isLoggedIn", true);

      alert("Login Successful");

      // Redirect admin to dashboard, everyone else to home
      if (email === ADMIN_EMAIL) {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }

    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();

      localStorage.setItem(
        "username",
        result.user.displayName || result.user.email
      );
      localStorage.setItem("isLoggedIn", true);

      // Check if google account email is admin
      if (result.user.email === ADMIN_EMAIL) {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{ backgroundColor: "#141414" }}
      fluid
    >
      <Card
        className="p-4 shadow"
        style={{
          width: "400px",
          backgroundColor: "#141414",
          color: "#fff",
          border: "1px solid #333"
        }}
      >
        <h2 className="text-center mb-4">Login</h2>

        <Form onSubmit={handleLogin}>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" className="w-100 mb-3">
            Login
          </Button>

          <Button
            variant="danger"
            className="w-100"
            onClick={handleGoogleLogin}
          >
            Continue With Google
          </Button>

        </Form>
      </Card>
    </Container>
  );
};

export default Login;