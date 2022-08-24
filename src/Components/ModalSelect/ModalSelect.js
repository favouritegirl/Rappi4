import * as React from "react";
import Modal from "@mui/material/Modal";
import * as S from "./styled";

const ModalSelect = ({ open, setOpen, choiceQuantity }) => {
  const [quantity, setQuantity] = React.useState("");

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <S.BoxModal>
          <S.MainContainer>
            <p>Selecione a quantia desejada</p>
            <S.SelectQuantity onChange={(e) => setQuantity(e.target.value)}>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </S.SelectQuantity>
            <S.Button onClick={() => choiceQuantity(Number(quantity))}>
              ADICIONAR AO CARRINHO
            </S.Button>
          </S.MainContainer>
        </S.BoxModal>
      </Modal>
    </>
  );
};

export default ModalSelect;
