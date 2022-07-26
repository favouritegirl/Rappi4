import React from "react";
import { Footer } from "../../Components/FooterMenu/FooterMenu";
import Header from "../../Components/Header/Header";
import {
  CardDiv,
  DataCard,
  Endereco,
  H1,
  Historico,
  MainContainer,
  ParagradoHistorico,
  Paragrafo,
  ParagrafoEndereco,
  SubTotal,
  TituloCard,
  Usuario,
} from "./styled";
import edit from '../../Assets/img/edit.png'
import { useProtectedPage } from "../../Hooks/UseProtectedPage";
import { useRequestData } from "../../Hooks/useRequestData";
import { BASE_URL } from "../../Constants/url";


const Profile = () => {
  useProtectedPage();

  const data = useRequestData({}, `${BASE_URL}/profile`)
  const person = data[0].user
  const orderHistory = useRequestData({}, `${BASE_URL}/orders/history`)

console.log(orderHistory)
  return (
    <MainContainer>
      <Header title={"Meu Perfil"} />
      <Usuario>
        <div>
          <Paragrafo>{person && person.name}</Paragrafo>
          <Paragrafo>{person && person.email}</Paragrafo>
          <Paragrafo>{person && person.cpf}</Paragrafo>
        </div>
        <div>
          <img src={edit} alt="editar dados pessoais" />
        </div>
      </Usuario>

      <Endereco>
        <div>
          <ParagrafoEndereco>Endereço cadastrado</ParagrafoEndereco>
          <Paragrafo>{person && person.address}</Paragrafo>
        </div>
        <div>
          <img src={edit} alt="editar endereço" />
        </div>
      </Endereco>

      <Historico>
        <ParagradoHistorico>Historico de pedidos</ParagradoHistorico>
        <CardDiv>
          <TituloCard>Bulguer vila Madalena</TituloCard>
          <DataCard>23 outrobro 2020</DataCard>
          <SubTotal>SUBTOTAL R$ 67,00</SubTotal>
        </CardDiv>
        <CardDiv>
          <TituloCard>Bulguer vila Madalena</TituloCard>
          <DataCard>23 outrobro 2020</DataCard>
          <SubTotal>SUBTOTAL R$ 67,00</SubTotal>
        </CardDiv>
        <CardDiv>
          <TituloCard>Bulguer vila Madalena</TituloCard>
          <DataCard>23 outrobro 2020</DataCard>
          <SubTotal>SUBTOTAL R$ 67,00</SubTotal>
        </CardDiv>
      </Historico>
      <Footer />
    </MainContainer>
  );
};

export default Profile;
