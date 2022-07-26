import React from "react";
import { Main, Title } from "./styled";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { goToBack } from "../../Routes/coordinator";


const Header = ({ title, back }) => {
  const navigate = useNavigate()
  return (
    <Main>
      { back && <ArrowBackIosNewIcon onClick={() => goToBack(navigate)}/>}
      <Title>{title}</Title>
    </Main>
  );
};

export default Header;
