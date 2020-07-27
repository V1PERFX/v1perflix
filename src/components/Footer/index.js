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
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
