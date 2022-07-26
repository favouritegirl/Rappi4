import React, { useEffect, useState } from "react";
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
import { useGlobal } from "../../Context/Global/GlobalStateContext";
import { Footer } from "../../Components/FooterMenu/FooterMenu";
import axios from "axios";
import { TOKEN } from "../../Constants/token";

const Cart = () => {
  useProtectedPage();
  const profile = useRequestData({}, `${BASE_URL}/profile`);

  const [paymentMethod, setPaymentMethod] = useState("");

  const {states, requests, setters} = useGlobal()
  const {addToCart, removeToCart} = requests
  const { cart, restaurant } = states
  const { setOrder} = setters
  const totalPrice = () => {
    let total = 0
    if(cart.length > 0){
      for(const product of cart){
        total += product.price *product.quantity;
      }
    }else{
      total += total
    }
    return total
  }

  const placeOrder = async (event) => {
    event.preventDefault()
    const body = {
      products: cart.map((item) => {
        return ({
          id: item.id,
          quantity: item.quantity
        })
      }),
      paymentMethod: paymentMethod
    }
    await axios.post(`${BASE_URL}/restaurants/${restaurant.id}/order`, body, TOKEN)
    .then((res) => {
      console.log(res.data)
      setOrder(res.data.order)
    })
    .catch((err) => {
      console.log(err.response)
      alert("algo deu errado")
    })
  }
  
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
          <p>{restaurant.name}</p>
          <p>{restaurant.address}</p>
          <p>{restaurant.deliveryTime} min</p>
        </div>
      <div>
        {cart.length > 0 ? (
          cart.map((item) => {
            return (
              <CardProduct
                key={item.id}
                product={item}
                restaurant={restaurant}
              />
            );
          })
        ) : (
          <p>Carrinho Vazio</p>
        )}
      </div>
      <ContainerTotal>
        <ContainerH5>
          <H5Styled>Subtotal</H5Styled>
        </ContainerH5>
        <ContainerPrice>
          <p>Frete 
            {new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(restaurant.shipping)}{" "}
            </p>
          <p>valor total {new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(totalPrice() + restaurant.shipping)}</p>
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
        <Button onClick={placeOrder}>Confirmar</Button>
      </FormPayment>
      <Footer />
    </Main>
  );
};

export default Cart;
