import React from "react";
import { useNavigate } from "react-router-dom";
import { goToRestaurant } from "../../Routes/coordinator";
import * as S from "./styled";

const CardRestaurant = ({ restaurant }) => {
  const navigate = useNavigate();

  return (
    <S.Main onClick={() => goToRestaurant(navigate, restaurant.id)}>
      <S.ImgRestaurant src={restaurant.logoUrl} />
      <S.NameRstaurant>{restaurant.name}</S.NameRstaurant>
      <S.BoxInf>
        <S.InfRestaurant>{restaurant.deliveryTime} min</S.InfRestaurant>
        <S.InfRestaurant>Frete R${restaurant.shipping},00</S.InfRestaurant>
      </S.BoxInf>
    </S.Main>
  );
};

export default CardRestaurant;
