import * as React from "react";
import Modal from "@mui/material/Modal";
import {
  BoxModal,
  Button,
  MainContainer,
  SelectQuantity,
} from "./styled";

const ModalSelect = ({ open, setOpen }) => {
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
        <BoxModal>
          <MainContainer>
            <p>Selecione a quantia desejada</p>
            <SelectQuantity>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </SelectQuantity>
            <Button>ADICIONAR AO CARRINHO</Button>
          </MainContainer>
        </BoxModal>
      </Modal>
    </>
  );
};

export default ModalSelect;
