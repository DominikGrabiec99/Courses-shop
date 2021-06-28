import React, {useState, useContext} from "react";
import bemCssModules from 'bem-css-modules'

import {default as AdminPanelStyles} from './AdminPanel.module.scss'
import CourseDetails from "./subcomponents/CourseDetails";
import { StoreContext } from "../../store/StoreProvider";
import CoursePopup from "./subcomponents/CoursePopup";

const block = bemCssModules(AdminPanelStyles)

const AdminPanel = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const { courses } = useContext(StoreContext)

  const handleshowPopup = () => setIsOpenPopup(true)
  const hidePopup = e => {
    console.log('aaa0' , e)
    e.preventDefault()
    setIsOpenPopup(false)
  }

  const coursesElements = courses.map( course => <CourseDetails key={course.id} {...course}/>
  )

  return ( 
    <section>
      {coursesElements}
      <button onClick={handleshowPopup}>Dodaj nowy kurs</button>
      <CoursePopup isOpenPopup={isOpenPopup} hidePopup={hidePopup} isEditMode={false}/>
    </section>
   );
}
 
export default AdminPanel;