import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;

`;

export const Restaurants = styled.div``;

export const InputSearch = styled.input`
  width: 328px;
  height: 25px;
  /* padding: 16px 8px 16px 17px; */
  padding: 16px 0;
  font-size: 24px;

  border-radius: 2px;
  border: solid 1px #b8b8b8;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  height: 42px;
  /* padding: 12px 0 12px 16px; */
  overflow-x: auto;
`;

export const MenuItem = styled.button`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0 1rem;
  color: ${(p) => (p.select ? "#e86e5a" : "black")};
`;
