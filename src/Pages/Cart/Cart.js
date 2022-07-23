import React, { useState } from "react";
import {
  BoxAdress,
  Button,
  ContainerH5,
  ContainerPrice,
  ContainerTotal,
  FormOfPayment,
  FormPayment,
  H5Styled,
  InputStyled,
  Main,
  PAddress,
  ProfileAdress,
} from "./styled";
import Header from "../../Components/Header/Header";
import { useRequestData } from "../../Hooks/useRequestData";
import { BASE_URL } from "../../Constants/url";
import { useProtectedPage } from "../../Hooks/UseProtectedPage";
import CardProduct from "../../Components/CardProduct/CardProduct";

const Cart = () => {
  useProtectedPage();
  const profile = useRequestData({}, `${BASE_URL}/profile`);


  const [paymentMethod, setPaymentMethod] = useState("");
  // console.log(paymentMethod);

  return (
    <Main>
      <Header title={"Meu Carrinho"} />
      <BoxAdress>
        <PAddress>Endereço de entrega</PAddress>
        <ProfileAdress>
          {profile[0].user && profile[0].user.address}
        </ProfileAdress>
      </BoxAdress>
      <div>
        <p>Carrinho</p>
        {/* <CardProduct /> */}
      </div>
      <ContainerTotal>
        <ContainerH5>
          <H5Styled>subtotal</H5Styled>
        </ContainerH5>
        <ContainerPrice>
          <p>frete</p>
          <p>valor total 00,00</p>
        </ContainerPrice>
      </ContainerTotal>
      <FormOfPayment>Forma de pagamento</FormOfPayment>
      <FormPayment action="">
        <div>
          <InputStyled
            type="radio"
            name="pagamento"
            value="money"
            onChange={() => setPaymentMethod("money")}
          />
          Dinheiro
        </div>
        <div>
          <InputStyled
            type="radio"
            name="pagamento"
            value="creditcard"
            onChange={() => setPaymentMethod("creditcard")}
          />
          Cartão
        </div>
        <Button>Confirmar</Button>
      </FormPayment>
    </Main>
  );
};

export default Cart;
