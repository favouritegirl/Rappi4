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
      <InfRestaurant>{restaurant.category}</InfRestaurant>
      <BoxInf>
        <InfRestaurant>{restaurant.deliveryTime} min</InfRestaurant>
        <InfRestaurant>Frete R${restaurant.shipping},00</InfRestaurant>
      </BoxInf>
      <InfRestaurant>{restaurant.address}</InfRestaurant>
    </Main>
  );
};

export default CardRestaurant;
