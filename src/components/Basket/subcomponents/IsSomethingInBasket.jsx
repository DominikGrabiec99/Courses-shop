import React from "react";
import bemCssModules from 'bem-css-modules';
import {default as BasketStyles} from '../Basket.module.scss';

const block = bemCssModules(BasketStyles)

const isSomethingOnBasket = ({basketPrice, handleOnClick}) => {
  return ( 
    <div className={block('right-info')}>
        <h3 className={block('right-info__title')}>Do zapłaty</h3>
        <p className={block('right-info__p')}>Wartośc zamówienia: <span className={block('right-info__span--bold')}>{ basketPrice}</span></p>
        <p className={block('right-info__p')}>Przesyłak: <span className={block('right-info__span--bold')}>online</span></p>
        <button className={block('right-info__button')} onClick={handleOnClick}>Przedź do kasy</button>
      </div>
   );
}
 
export default isSomethingOnBasket;