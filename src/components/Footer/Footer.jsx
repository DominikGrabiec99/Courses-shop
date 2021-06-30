import React from "react";

import bemCssModules from 'bem-css-modules'
import { default as FooterStyles } from './Footer.module.scss';

const block = bemCssModules(FooterStyles);

const Footer = () => {
  return (
    <footer className={block()}>

    </footer>
  )
}

export default Footer;