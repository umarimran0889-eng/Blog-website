import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { signupUser } from "../auth";
import { useNavigate } from "react-router-dom";

const ADMIN_EMAIL = "umarimran0889@gmail.com"; // replace with your email

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const result = await signupUser(email, password);

      localStorage.setItem("username", result.user.email);
      localStorage.setItem("isLoggedIn", true);

      alert("Signup Successful");

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
        <h2 className="text-center mb-4">Signup</h2>

        <Form onSubmit={handleSignup}>

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

          <Button type="submit" className="w-100">
            Signup
          </Button>

        </Form>
      </Card>
    </Container>
  );
};

export default Signup;