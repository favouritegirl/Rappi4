import React from "react";
import {
  BoxInf,
  ImgRestaurant,
  InfRestaurant,
  Main,
  NameRstaurant,
} from "./styled";

const CardRestaurant = ({ restaurant }) => {
  return (
    <Main>
      <ImgRestaurant src={restaurant.logoUrl} />
      <NameRstaurant>{restaurant.name}</NameRstaurant>
      <BoxInf>
        <InfRestaurant>{restaurant.deliveryTime} min</InfRestaurant>
        <InfRestaurant>Frete R${restaurant.shipping},00</InfRestaurant>
      </BoxInf>
    </Main>
  );
};

export default CardRestaurant;
