import styled from "styled-components";

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1.5rem 1fr 2.5rem;
  justify-items: center;
  align-items: center;
  height: 2.75rem;
  margin-bottom: 0.5rem;
  width: 100%;
  border-bottom: solid 1px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h1`
  height: 1.188rem;
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  grid-column-start: 2;
`;
