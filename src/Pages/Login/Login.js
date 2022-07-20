import React, { useState } from "react";
import { ButtonStyled, Form, Main, Title } from "./styled";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import {useNavigate} from "react-router-dom"
import { goToFeed } from "../../Routes/coordinator";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const onSubmitLogin = (event) => {
    event.preventDefault();

    const userLogin = {
      email,
      password,
    };
    loginApi(userLogin);
  };

  const loginApi = async (body) => {
    await axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token)
        goToFeed(navigate)
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <Main>
      <Title>Entrar</Title>
      <Form onSubmit={onSubmitLogin}>
        <TextField
          id="outlined-basic"
          label="E-mail"
          type={"email"}
          variant="outlined"
          placeholder="email@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <TextField
          id="outlined-password-input"
          label={"Senha"}
          type={"password"}
          autoComplete="current-password"
          placeholder="Mínimo 6 caracteres"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          inputProps={{ minLength: 6, title: "Senha mínima 6 caracteres" }}
          required
        />
        <ButtonStyled type="submit"> Entrar</ButtonStyled>
      </Form>
    </Main>
  );
};

export default Login;
