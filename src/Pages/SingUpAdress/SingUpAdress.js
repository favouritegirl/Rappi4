import { TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN } from "../../Constants/token";
import { BASE_URL } from "../../Constants/url";
import { useForm } from "../../Hooks/useForm";
import { goToFeed } from "../../Routes/coordinator";
import { ButtonStyled, Form, Main, Title } from "./styled";

const SingUpAdress = () => {
  const navigate = useNavigate();

  const { form, onChange, clean } = useForm({
    street: "",
    number: "",
    complement: "",
    neighbourhood: "",
    city: "",
    state: "",
  });

  const onSubmitAdress = (event) => {
    event.preventDefault();
    addAdress();
  };

  const addAdress = async () => {
    await axios
      .put(`${BASE_URL}/address`, form, TOKEN)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clean();
        alert("Endereço cadastrado com sucesso.");
        goToFeed(navigate);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <Main>
      <Title>Endereço</Title>
      <Form onSubmit={onSubmitAdress}>
        <TextField
          id="outlined-basic"
          name="street"
          label={"Logradouro"}
          type={"text"}
          variant="outlined"
          placeholder="Rua / Av."
          value={form.street}
          onChange={onChange}
          required
        />
        <TextField
          id="outlined-basic"
          name="number"
          label={"Número"}
          type={"number"}
          variant="outlined"
          placeholder="Número"
          value={form.number}
          onChange={onChange}
          required
        />
        <TextField
          id="outlined-basic"
          name="complement"
          label={"Complemento"}
          type={"text"}
          variant="outlined"
          placeholder="Apto. / Bloco"
          value={form.complement}
          onChange={onChange}
        />

        <TextField
          id="outlined-basic"
          name="neighbourhood"
          label={"Bairro"}
          type={"text"}
          variant="outlined"
          placeholder="Bairro"
          value={form.neighbourhood}
          onChange={onChange}
          required
        />
        <TextField
          id="outlined-basic"
          name="city"
          label={"Cidade"}
          type={"text"}
          variant="outlined"
          placeholder="Cidade"
          value={form.city}
          onChange={onChange}
          required
        />
        <TextField
          id="outlined-basic"
          name="state"
          label={"Estado"}
          type={"text"}
          variant="outlined"
          placeholder="Estado"
          value={form.state}
          onChange={onChange}
          required
        />

        <ButtonStyled type="submit"> Salvar</ButtonStyled>
      </Form>
    </Main>
  );
};

export default SingUpAdress;
