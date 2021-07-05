import React, {useContext, useState} from "react";
import bemCssModules from 'bem-css-modules';
import {default as BasketStyles} from './Basket.module.scss';
import { StoreContext } from "../../store/StoreProvider";
import request from "../../helpers/request";

import Mastercard from '../../img/mastercard.png'
import PayPal from '../../img/paypal.jpg';
import Visa from '../../img/visa.png'
import Przelewy from '../../img/przelewy24.png'

import BasketCourse from "./subcomponents/BasketCourse";
import IsSomethingOnBasket from "./subcomponents/IsSomethingInBasket";
import EmptyBasket from "./subcomponents/EmptyBasket";

const block = bemCssModules(BasketStyles)

const Basket = () => {
  const {user, setUser,  courses} = useContext(StoreContext)
  const userBasket = courses.filter(course =>user.basket.includes(course.id))
  const [userBasketCourses, setUserBasketCourses] = useState(userBasket);

  const coursePrice = (course) => {
    return course.price;
  }

  const sum = (prev, next) => {
    return prev + next;
  }

  const sumPrice = userBasketCourses.length ? userBasketCourses.map(coursePrice).reduce(sum) : null;

  const handleClickDeleteCours = async (e) => {
    try {
      const courseId = e.target.dataset.courseid
      const {data, status} = await request.patch(
        `/users`,
        {
          login: user.login,
          courseId: courseId,
          isAddToBasket: "delete"
        }
      );

      if(status === 202){
        setUser(data.user);
        setUserBasketCourses(prev => prev.filter(course => course.id !== courseId))
      }

    } catch (error) {
      console.warn(error)
    }
  }

  const handleOnClick = async () => {
    try {

      const {data, status} = await request.patch(
        `/users`,
        {
          login: user.login,
          courseId: null,
          isAddToBasket: "buy"
        }
      );

      if(status === 202){
        setUser(data.user);
        userBasket = []
        setUserBasketCourses(userBasket)
      }

    } catch (error) {
      console.warn(error)
    }
  }

  const elementsOnBasket = userBasketCourses.map(course => <BasketCourse {...course} key={course.id} handleClickDeleteCours={handleClickDeleteCours}/>)
  const emptyBasket = !userBasketCourses.length && <EmptyBasket />

  const fullbasket = userBasketCourses.length ? ( 
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
        <IsSomethingOnBasket basketPrice={sumPrice} handleOnClick={handleOnClick}/>
        <div className={block('right-code')}>
          <h4 className={block('right-code__title')}>Poda kod rabatowy (opcjonalnie)</h4>
          <input type="text" className={block('right-code__input')} placeholder="kod rabatowy..."/>
        </div>
      </div>
    </div>
  ) : null

  return ( 
    <div>
    {emptyBasket}
    {fullbasket}
    </div>
   );
}
 
export default Basket;