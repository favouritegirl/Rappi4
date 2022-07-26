import React from "react";
import { CardDiv, DataCard, SubTotal, TituloCard } from "./styled";
import moment from "moment";

const CardOrderHistory = ({ request }) => {
  return (
    <CardDiv>
      <TituloCard>{request.restaurantName}</TituloCard>
      <DataCard>{moment(request.createdAt).format("DD/MM/YYYY")}</DataCard>
      <SubTotal>
        SUBTOTAL
        {new Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(request.totalPrice)}
      </SubTotal>
    </CardDiv>
  );
};

export default CardOrderHistory;
