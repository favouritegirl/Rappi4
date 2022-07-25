import React from 'react'
import {MainContainer, Main, BoxInform, Title, IMG, InfTotal} from './styled';
import clock from '../../Assets/img/clock.png'

export const Order = ({totalPrice, restaurant}) => {

  return (
    <Main>
      <MainContainer>
        <IMG src={clock} alt="clock" />
        <BoxInform>
          <div>
            <Title>Pedido em andamento</Title>
          </div>
          <p>{restaurant}</p>
          <InfTotal>Subtotal R$ {totalPrice},00</InfTotal>
        </BoxInform>
      </MainContainer>
    </Main>
  );
}