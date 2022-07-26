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
  PCart,
  SubTotal,
  TituloCard,
  Usuario,
} from "./styled";
import edit from '../../Assets/img/edit.png'
import { useProtectedPage } from "../../Hooks/UseProtectedPage";
import { useRequestData } from "../../Hooks/useRequestData";
import { BASE_URL } from "../../Constants/url";
import { useNavigate } from "react-router-dom";
import { goToAddressEdit, goToProfileEdit } from "../../Routes/coordinator";
import CardOrderHistory from "../../Components/CardOrderHistory/CardOrderHistory";


const Profile = () => {
  useProtectedPage();
  const navigate = useNavigate()

  const data = useRequestData({}, `${BASE_URL}/profile`)
  const person = data[0].user
  const orderHistory = useRequestData([], `${BASE_URL}/orders/history`)
  const history = orderHistory[0].orders

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
          <img
            onClick={() => goToProfileEdit(navigate, person.id)}
            src={edit}
            alt="editar dados pessoais"
          />
        </div>
      </Usuario>

      <Endereco>
        <div>
          <ParagrafoEndereco>Endereço cadastrado</ParagrafoEndereco>
          <Paragrafo>{person && person.address}</Paragrafo>
        </div>
        <div>
          <img
            onClick={() => goToAddressEdit(navigate, person.id)}
            src={edit}
            alt="editar endereço"
          />
        </div>
      </Endereco>
      <Historico>
        <ParagradoHistorico>Historico de pedidos</ParagradoHistorico>
        {history && history.length > 0 ? history.map((request) => {
          return <CardOrderHistory key={request.index} request={request} />;
        }) : <PCart>Você não realizou nenhum pedido</PCart>}
      </Historico>
      <Footer />
    </MainContainer>
  );
};

export default Profile;
