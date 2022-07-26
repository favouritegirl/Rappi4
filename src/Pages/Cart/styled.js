import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxAdress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 4.75rem;
  font-size: 1.2rem;
  background-color: #eeeeee;
`;
export const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

export const ContainerAddress = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: center;
  background-color: #b8b8b8;
  width: 100vw;
  height: 10vh;
`;
export const PAddress = styled.p`
  margin: 0.125rem;
  color: lightgrey;
  font-size: 16px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.063rem;
  padding-left: 1em;
  gap: 0.313rem;
`;
export const ProfileAdress = styled.p`
  margin: 0.125rem;
  font-weight: bold;
  padding-left: 1em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen;
`;

export const Address = styled.p`
  color: black;
  font-size: 1rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  margin-left: 0.625rem;
`;

export const ContainerTotal = styled.div`
  display: flex;

  align-items: flex-start;
  justify-content: space-between;
  margin-top: 0.938rem;
  width: 90%;
`;
export const ContainerH5 = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
`;

export const H5Styled = styled.h5`
  font-size: 1rem;
  color: grey;
`;

export const ContainerPrice = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  margin-right: 1.25rem;
  p {
    margin: 0;
    align-self: flex-start;
  }
`;

export const TotalPrice = styled.p`
  font-size: 1.125rem;
  font-weight: bold;
  color: #e86e5a;
`;
export const FormOfPayment = styled.p`
  width: 96%;
  border-bottom: 2px solid grey;
  font-weight: bold;
`;
export const FormPayment = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 96%;
  gap: 0.313rem;
`;
export const InputStyled = styled.input`
  margin-right: 0.313rem;
`;
export const LabelStyled = styled.label`
  font-weight: bold;
  gap: 0.625rem;
`;
export const Button = styled.button`
  outline: none;
  width: 100%;
  height: 5vh;
  text-decoration: none;
  color: black;
  background-color: #e86e5a;
  border: none;
  font-weight: bold;
  font-size: 0.875rem;
  margin-top: 1.875rem;
  margin-bottom: 3.75rem;
  padding: 0.313rem;
`;
