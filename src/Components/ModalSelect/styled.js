import styled from "styled-components";

export const BoxModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem 0 1rem;
  margin: 60% 1rem 50% 1rem;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  background-color: whitesmoke;
  color: black;
  margin: auto;
  padding: 0.625rem 0;
`;

export const SelectQuantity = styled.select`
  width: 80%;
  padding: 0.625rem;
  margin: 0.625rem;
  border-radius: 8px;
`;

export const Button = styled.button`
  align-self: end;
  padding: 0px 0.625rem;
  margin: 0.625rem;
  border: none;
  background-color: inherit;
  font-family: "Roboto", sans-serif;
  color: #5ac8fa;
`;
