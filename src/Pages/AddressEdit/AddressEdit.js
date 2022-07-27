import { TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { BASE_URL } from "../../Constants/url";
import { useForm } from "../../Hooks/useForm";
import { useProtectedPage } from "../../Hooks/UseProtectedPage";
import { useRequestData } from "../../Hooks/useRequestData";
import { goToprofile } from "../../Routes/coordinator";
import { ButtonStyled, Form, Main } from "./styled";


const AddressEdit = () => {
  useProtectedPage();
  const navigate = useNavigate();

  const data = useRequestData({}, `${BASE_URL}/profile/address`);
  const address = data[0].address;

  const { form, onChange} = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    updateAddress();
  };

  const updateAddress = async () => {
    const token = localStorage.getItem('token')
    await axios
      .put(`${BASE_URL}/address`, form, { headers: { auth: token } })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Informações atualizadas com sucesso");
        goToprofile(navigate);
      })
      .catch((err) => {
        alert(err.response);
        console.log(err.response);
      });
  };

  return (
    <Main>
      <Header title={"Endereço"} back={true} />
      <Form onSubmit={onSubmitForm}>
        <TextField
          id="outlined-basic"
          name="street"
          label={"Logradouro"}
          type={"text"}
          variant="outlined"
          placeholder={address && address.street}
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
          placeholder={address && address.number}
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
          placeholder={address && address.complement}
          value={form.complement}
          onChange={onChange}
        />

        <TextField
          id="outlined-basic"
          name="neighbourhood"
          label={"Bairro"}
          type={"text"}
          variant="outlined"
          placeholder={address && address.neighbourhood}
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
          placeholder={address && address.city}
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
          placeholder={address && address.state}
          value={form.state}
          onChange={onChange}
          required
        />

        <ButtonStyled type="submit"> Salvar</ButtonStyled>
      </Form>
    </Main>
  );
};

export default AddressEdit;
