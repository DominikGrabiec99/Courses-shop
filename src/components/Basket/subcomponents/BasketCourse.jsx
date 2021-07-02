import React from "react";
import bemCssModules from 'bem-css-modules';
import {default as BasketStyles} from '../Basket.module.scss';
import { Link } from "react-router-dom";

const block = bemCssModules(BasketStyles)

const BasketCourse = ({price, title, img, id,authors,  level, lectures, hours, handleClickDeleteCours}) => {

  const allAuthors = authors.join(', ')

  return ( 
    <div >
     
        <article className={block('article')}>
          <Link to={`/${id}`}>
          <div className={block('img-box')}>
            <img src={img} alt={title}  className={block('image')}/>
          </div>
          </Link>
          <div className={block('information-box')}>
            <h3 className={block('title')}>{title}</h3>
            <p className={block('authors')}><span className={block('span--bold')}>Autorzy kursu:</span> {allAuthors}</p>
            <p className={block('info')}><span className={block('span--bold')}>Łacznie:</span> {hours} h, <span>{lectures} wykładów,</span> poziom: <span>{level}</span></p>
            <div>
              <button data-courseid={id} onClick={handleClickDeleteCours} className={block('btn-delete')}>Usuń</button>
            </div>
            <div className={block('price-box')}>
              <p className={block('price')}> {price} zł</ p>
            </div>
            
          </div>
          
         
        </article>
      
    </div>
   );
}
 
export default BasketCourse;