import React from "react";
import { useGlobal } from "../../Context/Global/GlobalStateContext";
import ModalSelect from "../ModalSelect/ModalSelect";
import * as S from "./styled";

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
    <S.Main>
      <S.ImgProduct src={product.photoUrl} />
      <S.BoxInf>
        <S.BoxNameQuantity>
          <S.NameProduct>{product.name}</S.NameProduct>
          {productInCart && (
            <S.QuantityProduct>{productInCart.quantity}</S.QuantityProduct>
          )}
        </S.BoxNameQuantity>
        <S.DescriptionProduct>{product.description}</S.DescriptionProduct>
        <S.BoxInfPriceButton>
          <S.Price>
            {new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)}{" "}
          </S.Price>
          {productInCart ? (
            <S.InfButtonRemoveItem onClick={() => removeToCart(product.id)}>
              Remove
            </S.InfButtonRemoveItem>
          ) : (
            <S.InfButtonAddItem onClick={() => setShowModal(true)}>
              Adicionar
            </S.InfButtonAddItem>
          )}
        </S.BoxInfPriceButton>
        <ModalSelect
          choiceQuantity={choiceQuantity}
          open={showModal}
          setOpen={setShowModal}
        ></ModalSelect>
      </S.BoxInf>
    </S.Main>
  );
};

export default CardProduct;
