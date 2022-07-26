import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`;

export const Restaurants = styled.div``;

export const InputSearch = styled.input`
  width: 80%;
  height: 1.563rem;
  padding: 0.625rem 1.563rem;
  font-size: 1rem;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.625rem;
  overflow-x: auto;
`;

export const MenuItem = styled.button`
  font-family: Roboto;
  font-size: 1rem;
  text-align: center;
  background-color: transparent;
  border: none;
  padding: 0 1rem;
`;
