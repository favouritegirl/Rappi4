import { TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'
import Header from '../../Components/Header/Header'
import { TOKEN } from '../../Constants/token'
import { BASE_URL } from '../../Constants/url'
import { useForm } from '../../Hooks/useForm'
import { useProtectedPage } from '../../Hooks/UseProtectedPage'
import { useRequestData } from '../../Hooks/useRequestData'
import { ButtonStyled, Form, Main } from './styled'

const ProfileEdit = () => {
  useProtectedPage();

  const data = useRequestData({}, `${BASE_URL}/profile`)
  const person = data[0].user
  
  const { form, onChange, clean } = useForm({
    name: "",
    email: "",
    cpf: "",
  });
  
  const onSubmitForm = (event) => {
    event.preventDefault();
    updatePerfil()
  }

  const updatePerfil = async() => {
    await axios.put(`${BASE_URL}/profile`, form, TOKEN)
    .then((res)=> {
      alert("Informações atualizadas com sucesso")
    })
    .catch((err)=>{
      alert(err.response)
    })
  }

  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  return (
    <Main>
      <Header title={"Editar"} back={true}/>
      <Form onSubmit={onSubmitForm}>
        <TextField
          id="outlined-basic"
          name="name"
          label={"Nome"}
          type={"text"}
          variant="outlined"
          placeholder={person && person.name}
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
          placeholder={person && person.email}
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
          placeholder={person && person.cpf}
          value={cpfMask(form.cpf)}
          onChange={onChange}
          required
        />
        
        <ButtonStyled type="submit"> Salvar</ButtonStyled>
      </Form>
    </Main>
  )
}

export default ProfileEdit