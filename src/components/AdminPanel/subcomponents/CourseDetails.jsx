import React, {useState, useContext} from "react";

import request from "../../../helpers/request";
import { StoreContext } from "../../../store/StoreProvider";
import CoursePopup from "./CoursePopup";

const CourseDetails = (props) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const { title, id } = props;

  const { setCourses } = useContext(StoreContext)

  const handleshowPopup = () => setIsOpenPopup(true)
  console.log(id)
  const hidePopup = (e) => {
    e.preventDefault();

    setIsOpenPopup(false)
  }

  const handleDeleteCourse = async () => {
    
    try {
      
      const {status} = await request.delete(`/courses/${id}`)

      console.log(status)
      if(status === 200){
        setCourses(prev => prev.filter(course => course.id !== id ))
        
      }
    } catch (error) {
      console.warn(error)
    }
  }
  
  return ( 
    <details>
      <summary>
        {title}
      </summary>
      <button onClick={handleshowPopup}>Edytuj</button>
      <button onClick={handleDeleteCourse}>Usuń</button>
      <CoursePopup {...props} hidePopup={hidePopup} isOpenPopup={isOpenPopup}/>
    </details>
   );
}
 
export default CourseDetails;