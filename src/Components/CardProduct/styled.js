import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
  margin: 0.5rem 0;
  border: solid 1px gray;
  border-radius: 8px;
`;

export const ImgProduct = styled.img`
  width: 30%;
  height: 130px;
  border-radius: 8px 0 0 8px;
  /* margin-bottom: 12px; */
`;

export const BoxInf = styled.div`
  display: flex;
  height: 130px;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 0 1rem;
  flex-grow: 1;
`;

export const BoxNameQuantity = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NameProduct = styled.h3`
  color: #e86e5a;
  margin: 0.5rem 0 0 0;
`;


export const QuantityProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px red;
  width: 2rem;
  height: 1.95rem;
  border-radius: 0 8px 0 8px;
  border: 1.5px red solid;
  color: red;
`;

export const DescriptionProduct = styled.div`
color: #b8b8b8;
font-size: 14px;
`;

export const Price = styled.p`
  display: flex;
`;

export const InfButtonAddItem = styled.button`
  width: 5rem;
  height: 2rem;
  border-radius: 8px 0 8px 0;
  background-color: white;
  outline: 0;
  border: 1px black solid;
`;

export const InfButtonRemoveItem = styled(InfButtonAddItem)`
  border: 2px red solid;
  color: red

`

export const BoxInfPriceButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1.90rem;
`;
