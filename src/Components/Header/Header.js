import React from "react";
import { Main, Title } from "./styled";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import { goToBack, goToLogin } from "../../Routes/coordinator";


const Header = ({ title, back, exit }) => {
  const navigate = useNavigate()

  const logout = (event) => {
    event.preventDefault()
    window.localStorage.removeItem("token")
    goToLogin(navigate)
  }

  return (
    <Main>
      { back && <ArrowBackIosNewIcon onClick={() => goToBack(navigate)}/>}
      <Title>{title}</Title>
      {exit && <LogoutIcon onClick={logout} /> }
    </Main>
  );
};

export default Header;
