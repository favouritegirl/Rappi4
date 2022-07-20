import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constants/url";
import { useForm } from "../../Hooks/useForm";
import { goToSingUpAdress } from "../../Routes/coordinator";
import { ButtonStyled, Form, Main, Title } from "./styled";

const SingUp = () => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkErrPass, SetCheckErrPass] = useState(false);

  const navigate = useNavigate();

  const { form, onChange, clean } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (form.password !== confirmPassword) {
      SetCheckErrPass(true);
    } else {
      SetCheckErrPass(false);
      registerUser();
    }
  };

  const registerUser = async () => {
    await axios
      .post(`${BASE_URL}/signup`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clean();
        alert("Usuário cadastrado com sucesso.");
        goToSingUpAdress(navigate);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <Main>
      <Title>Cadastrar</Title>
      <Form onSubmit={onSubmitForm}>
        <TextField
          id="outlined-basic"
          name="name"
          label={"Nome"}
          type={"text"}
          variant="outlined"
          placeholder="Nome completo"
          value={form.name}
          onChange={onChange}
          required
        />
        <TextField
          id="outlined-basic"
          name="email"
          label={"E-mail"}
          type={"email"}
          variant="outlined"
          placeholder="email@email.com"
          value={form.email}
          onChange={onChange}
          required
        />
        <TextField
          id="outlined-basic"
          name="cpf"
          label={"CPF"}
          type={"text"}
          variant="outlined"
          placeholder="000.000.000-00"
          value={cpfMask(form.cpf)}
          onChange={onChange}
          required
        />
        <TextField
          id="outlined-password-input"
          name="password"
          label={"Senha"}
          type={"password"}
          autoComplete="current-password"
          placeholder="Mínimo 6 caracteres"
          value={form.password}
          onChange={onChange}
          inputProps={{ minLength: 6, title: "Senha mínima 6 caracteres" }}
          required
        />
        <TextField
          error={checkErrPass}
          helperText={checkErrPass ? "Senhas não correspondem" : ""}
          id="outlined-password-input"
          label={"Confirmar"}
          type={"password"}
          autoComplete="current-password"
          placeholder="Confirmar senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          inputProps={{ minLength: 6, title: "Senha mínima 6 caracteres" }}
          required
        />
        <ButtonStyled type="submit"> Entrar</ButtonStyled>
      </Form>
    </Main>
  );
};

export default SingUp;
