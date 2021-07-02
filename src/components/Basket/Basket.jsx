import React, {useContext, useState} from "react";
import bemCssModules from 'bem-css-modules';
import {default as BasketStyles} from './Basket.module.scss';
import { StoreContext } from "../../store/StoreProvider";

import Mastercard from '../../img/mastercard.png'
import PayPal from '../../img/paypal.jpg';
import Visa from '../../img/visa.png'
import Przelewy from '../../img/przelewy24.png'

import BasketCourse from "./subcomponents/BasketCourse";
import IsSomethingOnBasket from "./subcomponents/IsSomethingInBasket";

const block = bemCssModules(BasketStyles)

const Basket = () => {
  const {user,setUser,  courses} = useContext(StoreContext)
  const userBasket = courses.filter(course =>user.basket.includes(course.id))
  const [userBasketCourses, setUserBasketCourses] = useState(userBasket);

  const coursePrice = (course) => {
    return course.price;
  }

  const sum = (prev, next) => {
    return prev + next;
  }

  const sumPrice = userBasketCourses.map(coursePrice).reduce(sum);
  console.log(sumPrice)

  const handleClickDeleteCours = (e) => {
    const courseId = e.target.dataset.courseid
    setUserBasketCourses(prev => prev.filter(course => course.id !== courseId))
  }

  console.log(user.basket)

  const elementsOnBasket = userBasketCourses.map(course => <BasketCourse {...course} key={course.id} handleClickDeleteCours={handleClickDeleteCours}/>)

  return ( 
    <div className={block()}>
      <div className={block('wrapper')}>
        <div className={block('container-articel')}>
          <h2>{`Koszyk (${userBasketCourses.length}) art.`}</h2>
          {elementsOnBasket}
        </div>
        <div className={block('paymnets')}>
            <h2>Akceptujemy</h2>
            <div className={block('img-box')}>
              <img src={Mastercard} alt="" className={block('imageBaskte')}/>
              <img src={PayPal} alt="" className={block('imageBaskte')}/>
              <img src={Visa} alt="" className={block('imageBaskte')}/>
              <img src={Przelewy} alt="" className={block('imageBaskte')}/>
            </div>
        </div>
      </div>
      <div className={block('right-box')}>
        {userBasketCourses.length && <IsSomethingOnBasket basketPrice={sumPrice}/>}
        <div className={block('right-code')}>
          <h2>Poda kod rabatowy (opcjonalnie)</h2>
          <input type="text" />
        </div>
      </div>
    </div>
   );
}
 
export default Basket;