import React from "react";
import { useHistory } from "react-router";
import bemCssModules from 'bem-css-modules';
import {default as BasketStyles} from '../Basket.module.scss';

const block = bemCssModules(BasketStyles)

const EmptyBasket = () => {
  const history = useHistory();

  const handleOnClickBaskToMaiPage = () => {
    history.push('/')
  }
  return ( 
    <div className={block('empty-div')}>
      <p className={block('empty-title')}>Twój koszyk jest pusty :( <button onClick={handleOnClickBaskToMaiPage} className={block('empty-btn')}> Wróć do strony głównej</button></p>
      
    </div>
   );
}
 
export default EmptyBasket;