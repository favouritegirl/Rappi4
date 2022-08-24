import { TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constants/url";
import { useForm } from "../../Hooks/useForm";
import { useProtectedPage } from "../../Hooks/UseProtectedPage";
import { goToFeed } from "../../Routes/coordinator";
import * as S from "./styled";
import Header from "../../Components/Header/Header";

const SingUpAdress = () => {
  useProtectedPage();
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
    const token = localStorage.getItem("token");
    await axios
      .put(`${BASE_URL}/address`, form, { headers: { auth: token } })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Endereço cadastrado com sucesso.");
        goToFeed(navigate);
        clean();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <S.Main>
      <Header back={true} />
      <S.Title>Meu Endereço</S.Title>

      <S.Form onSubmit={onSubmitAdress}>
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

        <S.ButtonStyled type="submit"> Salvar</S.ButtonStyled>
      </S.Form>
    </S.Main>
  );
};

export default SingUpAdress;
