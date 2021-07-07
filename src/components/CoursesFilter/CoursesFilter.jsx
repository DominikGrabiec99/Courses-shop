import React, { useContext, useEffect, useState} from "react";
import bemCssModules from 'bem-css-modules'

import {default as CoursesFilterStyles} from './CoursesFilter.module.scss';
import { StoreContext } from "../../store/StoreProvider";

import Course from "../Course/Course";
import { useHistory } from "react-router-dom";

const block = bemCssModules(CoursesFilterStyles)

const CoursesFilter = () => {
  const histroy = useHistory()
  let coursesElements = null;

  // console.log(filresCourses)
  // console.log(histroy.location.state.filtreCourses)
  const { filtreCourses } = histroy.location.state ? histroy.location.state : []

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  console.log(filtreCourses)
  if(filtreCourses){
    if(filtreCourses.length){
      coursesElements= filtreCourses.map(course => (
        <Course key={course.id} {...course}/>
      ))
    }else {
      coursesElements = <h3 className={block('emptyFilters-message')}>Brak produktów o podanym filtrze</h3>
    }
      
  }else {
    console.log('aa')
    coursesElements = <h3 className={block('emptyFilters-message')}>Brak produktów o podanym filtrze</h3>
  }
  
  return ( 
    <section className={block()}>
      <h2 className={block('title')}>Kursy</h2>
      {filtreCourses && <ul className={block('list')}>
        {coursesElements}
      </ul>}
      {!filtreCourses && coursesElements}
    </section>
   );
}
 
export default CoursesFilter;