import styled from "styled-components";

export const Main = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  justify-items: center;
  /* justify-content: center; */
  align-items: center;
  /* width: 175px; */
  height: 44px;
  margin-bottom: 8px;
  /* padding: 13px 63.5px 12px; */
  width: 100%;
  border-bottom: solid 1px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h1`
  /* width: 48px; */
  height: 19px;
  /* font-family: Roboto; */
  font-size: 16px;
  font-weight: bold;
  color: #000;
  grid-column-start: 2;
`;
