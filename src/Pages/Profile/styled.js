import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-size: 16px;
  margin: 13px 0;
  text-align: center;
  border-bottom: solid 1px rgba(0, 0, 0, 0.25);
  padding-bottom: 12px;
`;
export const Usuario = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px;
`;

export const Paragrafo = styled.div`
  margin: 4px;
`;

export const Endereco = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: #eeeeee;
`;

export const ParagrafoEndereco = styled.div`
  margin: 4px;
  color: #b8b8b8;
`;

export const Historico = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px;
`;
export const ParagradoHistorico = styled.p`
  border-bottom: solid 1px black;
  padding-bottom: 8px;
`;
export const CardDiv = styled.div`
  border: solid 1px #b8b8b8;
  margin-bottom: 8px;
  padding: 16px;
  border-radius: 8px;
`;

export const TituloCard = styled.p`
  font-size: 16px;
  color: #e86e5a;
  margin: 0 0 9px 0;
`;

export const DataCard = styled.p`
  font-size: 12px;
  margin: 9px 0 7px;
`;

export const SubTotal = styled.p`
  font-weight: bold;
  margin: 7px 0 0;
`;