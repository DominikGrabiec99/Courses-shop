import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";
import request from "../../helpers/request";

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

  return ( 
    <div>
      {course.title}
      <br />
      {course.img}
     <br />
     {course.price}
    </div>
   );
}
 
export default CourseDescription;