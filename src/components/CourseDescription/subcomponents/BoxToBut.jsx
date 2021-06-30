import React from "react";
import bemCssModules from 'bem-css-modules'
import { default as CourseDescriptionStyles } from '../CourseDescription.module.scss';

const block = bemCssModules(CourseDescriptionStyles)

const BoxToBuy = ({course, allAuthors}) => {
  return ( 
     <div className={block('container-toBuy')}>
        <div>
          <img className={block('image')} src={course.img} alt={course.title} />
        </div>
        <h2 className={block('title')}>{course.title}</h2>
        <div>
          <p className={block('small-description')}>{course.shortDiscription}</p>
        </div>
        <div>
          <p className={block('authors')}>Autorzy: { allAuthors}</p>
          <p className={block('language')}>Język: { course.language }</p>
          <p className={block('last-update')}>Ostania aktualizacja: { course.data }</p>
        </div>
        <div>
          <p className={block('price')}> { course.price} zł</p>
        </div>
        <button className={block('btn-addToBasket')}>Dodaj do koszyka</button>
      </div>
   );
}
 
export default BoxToBuy;