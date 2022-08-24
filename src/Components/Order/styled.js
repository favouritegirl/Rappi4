import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  position: fixed;
  background-color: #fc0101;
  z-index: 2;
`;
export const MainContainer = styled.nav`
  display: flex;
  align-items: center;
  border-top: solid 1px black;
  position: fixed;
  bottom: 3rem;
  width: 100%;
  height: 7.375rem;
  background-color: #e86e5a;
`;

export const IMG = styled.img`
  margin: 0 1.5rem;
`;

export const Title = styled.p`
  font-size: 1rem;
  color: white;
`;

export const BoxInform = styled.div``;
export const InfTotal = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;
