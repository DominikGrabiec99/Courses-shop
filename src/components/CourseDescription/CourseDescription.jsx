import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";
import request from "../../helpers/request";
import bemCssModules from 'bem-css-modules'
import { default as CourseDescriptionStyles } from './CourseDescription.module.scss';

import BoxToBuy from "./subcomponents/BoxToBut";
import MainContainer from "./subcomponents/MainContainer";

const block = bemCssModules(CourseDescriptionStyles)

const CourseDescription = () => {
  const [course, setCourse] = useState('');

  const histroy = useHistory()
  const id = histroy.location.pathname.slice(1, histroy.location.pathname.length)

  const fetchDataId = async () => {
    try {
      const {data, status} = await request.get(`/courses/${id}`)

      if(status === 200){
        setCourse(data.course)
      }
    } catch (error) {
      console.warn(error)
    }  
  }

  useEffect(() => {
    fetchDataId()
    
  }, [])  

  let allAuthors = null;

  if(course) allAuthors = course.authors.join(', ')
  return ( 
    <section className={block()}>
      <MainContainer {...course} />
      <BoxToBuy course={course} allAuthors={allAuthors} />
    </section>
   );
}
 
export default CourseDescription;