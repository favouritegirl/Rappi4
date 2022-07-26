import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-size: 1rem;
  margin: 0.813rem 0;
  text-align: center;
  border-bottom: solid 1px rgba(0, 0, 0, 0.25);
  padding-bottom: 0.75rem;
`;
export const Usuario = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
`;

export const Paragrafo = styled.div`
  margin: 0.25rem;
`;

export const Endereco = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #eeeeee;
`;

export const ParagrafoEndereco = styled.div`
  margin: 0.25rem;
  color: #b8b8b8;
`;

export const Historico = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;
export const ParagradoHistorico = styled.p`
  border-bottom: solid 1px black;
  padding-bottom: 0.5rem;
`;
export const PCart = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 0.75rem;
`;
