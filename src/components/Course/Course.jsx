import React from "react";
import bemCssModules from 'bem-css-modules'
import {default as CurseStyles} from './Course.module.scss';

const block = bemCssModules(CurseStyles)

const Course = ({price, title, authors, img}) => {

  const allAuthors = authors.join(', ')
  return ( 
    <li>
      <article className={block()}>
      <h3 className={block('title')}>{title}</h3>
      <img src={img} alt={title}  className={block('image')}/>
      <p className={block('authors')}>{`Autorzy kursu: ${allAuthors}`}</p>
      <p className={block('price')}> {`Cena kursu wynosi: ${price} zł`}</p>
    </article>
    </li>
    
   );
}
 
export default Course;