import React, { useState } from "react";
import * as S from "./styled";
import Header from "../../Components/Header/Header";
import { useRequestData } from "../../Hooks/useRequestData";
import { BASE_URL } from "../../Constants/url";
import { useProtectedPage } from "../../Hooks/UseProtectedPage";
import CardProduct from "../../Components/CardProduct/CardProduct";
import { useGlobal } from "../../Context/Global/GlobalStateContext";
import { Footer } from "../../Components/FooterMenu/FooterMenu";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../Routes/coordinator";

const Cart = () => {
  useProtectedPage();
  const navigate = useNavigate()

  const profile = useRequestData({}, `${BASE_URL}/profile`);
  const [paymentMethod, setPaymentMethod] = useState("");
  const token = localStorage.getItem('token')


  const {states, setters} = useGlobal()
  const { cart, restaurant } = states
  const { setOrder, setCart} = setters
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
    await axios.post(`${BASE_URL}/restaurants/${restaurant.id}/order`, body, {headers:{auth:token}})
    .then((res) => {
      setOrder(res.data.order)
      setCart('')
      goToFeed(navigate)
    })
    .catch((err) => {
      alert("Algo deu errado, tente novamente")
    })
  }
  
  return (
    <S.Main>
      <Header title={"Meu Carrinho"} />
      <S.BoxAdress>
        <S.PAddress>Endereço de entrega</S.PAddress>
        <S.ProfileAdress>
          {profile[0].user && profile[0].user.address}
        </S.ProfileAdress>
      </S.BoxAdress>
      <S.ContainerCart>
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
        <S.ContainerTotal>
          <S.ContainerH5>
            <S.H5Styled>Subtotal</S.H5Styled>
          </S.ContainerH5>
 
          {restaurant && [restaurant].length > 0 ? (
            <S.ContainerPrice>
              <p>
                Frete
                {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(restaurant.shipping)}
              </p>
              <S.TotalPrice>
                {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(totalPrice() + restaurant.shipping)}
              </S.TotalPrice>
            </S.ContainerPrice>
          ) : null}
        </S.ContainerTotal>
        <S.FormOfPayment>Forma de pagamento</S.FormOfPayment>
        <S.FormPayment action="">
          <div>
            <S.InputStyled
              type="radio"
              name="pagamento"
              value="money"
              onChange={() => setPaymentMethod("money")}
            />
            Dinheiro
          </div>
          <div>
            <S.InputStyled
              type="radio"
              name="pagamento"
              value="creditcard"
              onChange={() => setPaymentMethod("creditcard")}
            />
            Cartão
          </div>
          <S.Button onClick={placeOrder}>Confirmar</S.Button>
        </S.FormPayment>
      </S.ContainerCart>
      <Footer />
    </S.Main>
  );
};

export default Cart;
