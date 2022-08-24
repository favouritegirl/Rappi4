import React from "react";
import * as S from "./styled";
import clock from "../../Assets/img/clock.png";

export const Order = ({ totalPrice, restaurant }) => {
  return (
    <S.Main>
      <S.MainContainer>
        <S.IMG src={clock} alt="clock" />
        <S.BoxInform>
          <div>
            <S.Title>Pedido em andamento</S.Title>
          </div>
          <p>{restaurant}</p>
          <S.InfTotal>Subtotal R$ {totalPrice},00</S.InfTotal>
        </S.BoxInform>
      </S.MainContainer>
    </S.Main>
  );
};
