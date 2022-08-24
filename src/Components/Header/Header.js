import React from "react";
import * as S from "./styled";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { goToBack, goToLogin } from "../../Routes/coordinator";

const Header = ({ title, back, exit }) => {
  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    window.localStorage.removeItem("token");
    goToLogin(navigate);
  };

  return (
    <S.Main>
      {back && <ArrowBackIosNewIcon onClick={() => goToBack(navigate)} />}
      <S.Title>{title}</S.Title>
      {exit && <LogoutIcon onClick={logout} />}
    </S.Main>
  );
};

export default Header;
