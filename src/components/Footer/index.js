import React from 'react';
import { FooterBase, FooterLogo } from './styles';
import LogoWhite from '../../assests/img/LogoWhite.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <FooterLogo src={LogoWhite} alt="V1PERFLIX logo" />
      </a>
      <p>
        Feito com <span role="img" aria-label="coração">&#128151;</span> por
        {' '}
        <a href="https://v1perfx.github.io/portfolio/">
          V1PERFX
        </a>
        <br />
        Durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
