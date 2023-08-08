import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "./avatar.svg";

const Card = styled.div`
  max-width: 300px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 20px;
  margin: auto;
`;

const FormInput = styled.input`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #1877f2;
    box-shadow: 0 0 5px rgba(24, 119, 242, 0.5);
  }
`;

const FormButton = styled.button`
  padding: 10px;
  margin: 5px;
  background-color: #1877f2;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #166fe5;
  }

  &:focus {
    outline: none;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  height: 120px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ForgotPasswordLink = styled.a`
  color: #1877f2;
  text-decoration: none;
  font-size: 14px;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // You can perform login/authentication logic here with 'username' and 'password'
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <ImageContainer>
          <Image src={Avatar} alt="Avatar" />
          <Title>Sign in Here</Title>
        </ImageContainer>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <FormInput
            type="text"
            placeholder="Enter Username"
            name="uname"
            value={username}
            onChange={handleUsernameChange}
            required
          />

          <FormInput
            type="password"
            placeholder="Enter Password"
            name="psw"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <FormButton type="submit">Login</FormButton>

          <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
