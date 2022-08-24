import React from "react";
import { Footer } from "../../Components/FooterMenu/FooterMenu";
import Header from "../../Components/Header/Header";
import * as S from "./styled";
import edit from "../../Assets/img/edit.png";
import { useProtectedPage } from "../../Hooks/UseProtectedPage";
import { useRequestData } from "../../Hooks/useRequestData";
import { BASE_URL } from "../../Constants/url";
import { useNavigate } from "react-router-dom";
import { goToAddressEdit, goToProfileEdit } from "../../Routes/coordinator";
import CardOrderHistory from "../../Components/CardOrderHistory/CardOrderHistory";

const Profile = () => {
  useProtectedPage();
  const navigate = useNavigate();

  const data = useRequestData({}, `${BASE_URL}/profile`);
  const person = data[0].user;
  const orderHistory = useRequestData([], `${BASE_URL}/orders/history`);
  const history = orderHistory[0].orders;

  return (
    <S.MainContainer>
      <Header title={"Meu Perfil"} exit={true} />
      <S.Usuario>
        <div>
          <S.Paragrafo>{person && person.name}</S.Paragrafo>
          <S.Paragrafo>{person && person.email}</S.Paragrafo>
          <S.Paragrafo>{person && person.cpf}</S.Paragrafo>
        </div>
        <div>
          <img
            onClick={() => goToProfileEdit(navigate, person.id)}
            src={edit}
            alt="editar dados pessoais"
          />
        </div>
      </S.Usuario>

      <S.Endereco>
        <div>
          <S.ParagrafoEndereco>Endereço cadastrado</S.ParagrafoEndereco>
          <S.Paragrafo>{person && person.address}</S.Paragrafo>
        </div>
        <div>
          <img
            onClick={() => goToAddressEdit(navigate, person.id)}
            src={edit}
            alt="editar endereço"
          />
        </div>
      </S.Endereco>
      <S.Historico>
        <S.ParagradoHistorico>Historico de pedidos</S.ParagradoHistorico>
        {history && history.length > 0 ? (
          history.map((request) => {
            return (
              <CardOrderHistory key={request.createdAt} request={request} />
            );
          })
        ) : (
          <S.PCart>Você não realizou nenhum pedido</S.PCart>
        )}
      </S.Historico>
      <Footer />
    </S.MainContainer>
  );
};

export default Profile;
