import React from "react";
import * as S from "./styled";
import moment from "moment";

const CardOrderHistory = ({ request }) => {
  return (
    <S.CardDiv>
      <S.TituloCard>{request.restaurantName}</S.TituloCard>
      <S.DataCard>{moment(request.createdAt).format("DD/MM/YYYY")}</S.DataCard>
      <S.SubTotal>
        SUBTOTAL
        {new Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(request.totalPrice)}
      </S.SubTotal>
    </S.CardDiv>
  );
};

export default CardOrderHistory;
