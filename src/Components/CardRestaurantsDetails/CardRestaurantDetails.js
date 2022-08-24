import React from "react";
import * as S from "./styled";

const CardRestaurant = ({ restaurant }) => {
  return (
    <S.Main>
      <S.ImgRestaurant src={restaurant.logoUrl} />
      <S.NameRstaurant>{restaurant.name}</S.NameRstaurant>
      <S.InfRestaurant>{restaurant.category}</S.InfRestaurant>
      <S.BoxInf>
        <S.InfRestaurant>{restaurant.deliveryTime} min</S.InfRestaurant>
        <S.InfRestaurant>Frete R${restaurant.shipping},00</S.InfRestaurant>
      </S.BoxInf>
      <S.InfRestaurant>{restaurant.address}</S.InfRestaurant>
    </S.Main>
  );
};

export default CardRestaurant;
