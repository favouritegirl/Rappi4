import React from "react";
import * as S from "./styled";
import { useNavigate, useLocation } from "react-router-dom";
import { goToFeed, goTocart, goToprofile } from "../../Routes/coordinator";
import home from "../../Assets/img/footer/homepage.png";
import homeColor from "../../Assets/img/footer/homepage-color.png";
import shopping from "../../Assets/img/footer/shopping-cart.png";
import shoppingColor from "../../Assets/img/footer/shopping-cart-color.png";
import perfil from "../../Assets/img/footer/avatar.png";
import perfilColor from "../../Assets/img/footer/avatar-color.png";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <S.Main>
      {location.pathname === "/feed" ? (
        <S.MainContainer>
          <S.Imagem
            onClick={() => goToFeed(navigate)}
            src={homeColor}
            alt="home"
          />
          <S.Imagem
            onClick={() => goTocart(navigate)}
            src={shopping}
            alt="carrinho"
          />
          <S.Imagem
            onClick={() => goToprofile(navigate)}
            src={perfil}
            alt="perfil"
          />
        </S.MainContainer>
      ) : (
        ""
      )}

      {location.pathname === "/cart" ? (
        <S.MainContainer>
          <S.Imagem onClick={() => goToFeed(navigate)} src={home} alt="home" />
          <S.Imagem
            onClick={() => goTocart(navigate)}
            src={shoppingColor}
            alt="carrinho"
          />
          <S.Imagem
            onClick={() => goToprofile(navigate)}
            src={perfil}
            alt="perfil"
          />
        </S.MainContainer>
      ) : (
        ""
      )}

      {location.pathname === "/profile" ? (
        <S.MainContainer>
          <S.Imagem onClick={() => goToFeed(navigate)} src={home} alt="home" />
          <S.Imagem
            onClick={() => goTocart(navigate)}
            src={shopping}
            alt="carrinho"
          />
          <S.Imagem
            onClick={() => goToprofile(navigate)}
            src={perfilColor}
            alt="perfil"
          />
        </S.MainContainer>
      ) : (
        ""
      )}
    </S.Main>
  );
};
