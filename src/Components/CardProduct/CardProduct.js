import React from "react";
import {
  BoxInf,
  BoxNameQuantity,
  ImgProduct,
  Main,
  NameProduct,
  QuantityProduct,
  InfButton,
  Price,
  DescriptionProduct,
} from "./styled";

const CardProduct = ({ product }) => {
  return (
    <Main>
      <ImgProduct src={product.photoUrl} />
      <BoxInf>
        <BoxNameQuantity>
          <NameProduct>{product.name}</NameProduct>
        </BoxNameQuantity>
        <DescriptionProduct>{product.description}</DescriptionProduct>
        <QuantityProduct>
          <Price>R$ {product.price} </Price>
          <InfButton>Adicionar</InfButton>
        </QuantityProduct>
      </BoxInf>
    </Main>
  );
};

export default CardProduct;
