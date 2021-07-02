import React from "react";
import bemCssModules from 'bem-css-modules';
import {default as BasketStyles} from '../Basket.module.scss';

const block = bemCssModules(BasketStyles)

const isSomethingOnBasket = ({basketPrice}) => {
  return ( 
    <div className={block('right-info')}>
        <h3>Do zapłaty</h3>
        <p>Wartośc zamówienia: <span>{ basketPrice}</span></p>
        <p>Przesyłak: <span>online</span></p>
        <button>Przedź do kasy</button>
      </div>
   );
}
 
export default isSomethingOnBasket;