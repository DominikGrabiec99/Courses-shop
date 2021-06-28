import React, { useContext} from "react";
import bemCssModules from 'bem-css-modules'

import {default as CursesStyles} from './Courses.module.scss';
import { StoreContext } from "../../store/StoreProvider";

import Course from "../Course/Course";

const block = bemCssModules(CursesStyles)

const Courses = () => {
  const {courses} = useContext(StoreContext)

  const coursesElements = courses.map(course => (
    <Course key={course.id} {...course}/>
  ))
  
  return ( 
    <section className={block()}>
      <h2 className={block('title')}></h2>
      <ul className={block('list')}>
        {coursesElements}
      </ul>
    </section>
   );
}
 
export default Courses;