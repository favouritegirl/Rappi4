import React from "react";
import { useGlobal } from "../../Context/Global/GlobalStateContext";
import ModalSelect from "../ModalSelect/ModalSelect";
import {
  BoxInf,
  BoxNameQuantity,
  ImgProduct,
  Main,
  NameProduct,
  QuantityProduct,
  Price,
  BoxInfPriceButton,
  InfButtonRemoveItem,
  InfButtonAddItem,
  DescriptionProduct,
} from "./styled";

const CardProduct = ({ product, restaurant }) => {
  const [showModal, setShowModal] = React.useState(false);
  const { requests, states } = useGlobal();
  const { addToCart, removeToCart } = requests;
  const { cart } = states;

  const choiceQuantity = (quantity) => {
    addToCart(product, quantity, restaurant);
    setShowModal(false);
  };

  const productInCart = cart.find((pCart) => pCart.id === product.id);

  return (
    <Main>
      <ImgProduct src={product.photoUrl} />
      <BoxInf>
        <BoxNameQuantity>
          <NameProduct>{product.name}</NameProduct>
          {productInCart && (
            <QuantityProduct>{productInCart.quantity}</QuantityProduct>
          )}
        </BoxNameQuantity>
        <DescriptionProduct>{product.description}</DescriptionProduct>
        <BoxInfPriceButton>
          <Price>
            {new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)}{" "}
          </Price>
          {productInCart ? (
            <InfButtonRemoveItem onClick={() => removeToCart(product.id)}>
              Remove
            </InfButtonRemoveItem>
          ) : (
            <InfButtonAddItem onClick={() => setShowModal(true)}>
              Adicionar
            </InfButtonAddItem>
          )}
        </BoxInfPriceButton>
        <ModalSelect
          choiceQuantity={choiceQuantity}
          open={showModal}
          setOpen={setShowModal}
        ></ModalSelect>
      </BoxInf>
    </Main>
  );
};

export default CardProduct;
