import React, {useState, useContext} from "react";
import bemCssModules from 'bem-css-modules'

import {default as AdminPanelStyles} from '../AdminPanel.module.scss'

import request from "../../../helpers/request";
import { StoreContext } from "../../../store/StoreProvider";
import CoursePopup from "./CoursePopup";

const block = bemCssModules(AdminPanelStyles)

const CourseDetails = (props) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const { title, id, img, shortDiscription} = props;

  const { setCourses } = useContext(StoreContext)

  const handleshowPopup = () => setIsOpenPopup(true)
  const hidePopup = (e) => {
    e.preventDefault();

    setIsOpenPopup(false)
  }

  const handleDeleteCourse = async () => {
    
    try {
      
      const {status} = await request.delete(`/courses/${id}`)

      if(status === 200){
        setCourses(prev => prev.filter(course => course.id !== id ))
      }
    } catch (error) {
      console.warn(error)
    }
  }
  
  return ( 
    <details>
      <summary className={block('box-summray')}>
        <img src={img} alt={title} />
        <p className={block('box-summray-title')}>{title}</p>
      </summary>
      <p className={block('shortDiscription')}>{shortDiscription}</p>
      <div className={block('box-button')}>
        <button onClick={handleshowPopup} >Edytuj</button>
        <button onClick={handleDeleteCourse} c>Usuń</button>
      </div>
      

      <CoursePopup {...props} hidePopup={hidePopup} isOpenPopup={isOpenPopup}/>
    </details>
   );
}
 
export default CourseDetails;