import React from "react";
import ModalSelect from "../ModalSelect/ModalSelect";
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
  BoxInfPriceButton,
} from "./styled";

const CardProduct = ({ product }) => {
  const [showModal, setShowModal] = React.useState(false);

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
          <InfButton onClick={() => setShowModal(true)}>Adicionar</InfButton>
        </QuantityProduct>
        <ModalSelect open={showModal} setOpen={setShowModal}>

        </ModalSelect>
      </BoxInf>
    </Main>
  );
};

export default CardProduct;
