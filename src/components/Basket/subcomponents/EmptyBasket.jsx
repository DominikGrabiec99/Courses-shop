import React from "react";
import { useHistory } from "react-router";
import bemCssModules from 'bem-css-modules';
import {default as BasketStyles} from '../Basket.module.scss';

const block = bemCssModules(BasketStyles)

const EmptyBasket = ({isBought}) => {
  const history = useHistory();

  const handleOnClickBaskToMainPage = () => {
    history.push('/')
  }

  const handleOnClickBaskToMyCourse = () => {
    history.push('/my-courses')
  }
  return ( 
    <div className={block('empty-div')}>
      {!isBought && <p className={block('empty-title')}>Twój koszyk jest pusty :( <button onClick={handleOnClickBaskToMainPage} className={block('empty-btn')}> Wróć do strony głównej</button></p>}
      {isBought && <p className={block('empty-title')}>Dziękujemy za zakupy :) <button onClick={handleOnClickBaskToMyCourse} className={block('empty-btn')}> Przejdź do swoichn kursów</button></p>}
    </div>
   );
}
 
export default EmptyBasket;