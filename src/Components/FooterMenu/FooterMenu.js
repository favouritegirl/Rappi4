import React from 'react'
import {MainContainer, Imagem, Main} from './styled';
import { useNavigate, useLocation } from 'react-router-dom';
import { goToFeed, goTocart, goToprofile} from '../../Routes/coordinator';
import home from '../../Assets/img/footer/homepage.png'
import homeColor from '../../Assets/img/footer/homepage-color.png'
import shopping from '../../Assets/img/footer/shopping-cart.png'
import shoppingColor from '../../Assets/img/footer/shopping-cart-color.png'
import perfil from '../../Assets/img/footer/avatar.png'
import perfilColor from '../../Assets/img/footer/avatar-color.png'


export const Footer = () => {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Main>
      {location.pathname === '/feed' ?
        <MainContainer>
          <Imagem onClick={() => goToFeed(navigate)} src={homeColor} alt="home" />
          <Imagem onClick={() => goTocart(navigate)} src={shopping} alt="carrinho" />
          <Imagem onClick={() => goToprofile(navigate)} src={perfil} alt="perfil" />
        </MainContainer> : '' } 

      {location.pathname === '/cart' ?
        <MainContainer>
          <Imagem onClick={() => goToFeed(navigate)} src={home} alt="home" />
          <Imagem onClick={() => goTocart(navigate)} src={shoppingColor} alt="carrinho" />
          <Imagem onClick={() => goToprofile(navigate)} src={perfil} alt="perfil" />
        </MainContainer> : '' } 
      

      {location.pathname === '/profile' ?
        <MainContainer>
          <Imagem onClick={() => goToFeed(navigate)} src={home} alt="home" />
          <Imagem onClick={() => goTocart(navigate)} src={shopping} alt="carrinho" />
          <Imagem onClick={() => goToprofile(navigate)} src={perfilColor} alt="perfil" />
        </MainContainer> : '' } 
    </Main>
  )
}