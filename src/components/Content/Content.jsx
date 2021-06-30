import React, {useContext} from "react";
import bemCssModules from 'bem-css-modules'
import { Switch, Redirect, Route } from "react-router-dom";

import {default as ContentStyles} from './Content.module.scss'
import { StoreContext } from "../../store/StoreProvider";

import Courses from "../Courses/Courses";
import UserCourses from "../UserCourses/UserCourses";
import AdminPanel from "../AdminPanel/AdminPanel";
import CourseDescription from "../CourseDescription/CourseDescription";

const block = bemCssModules(ContentStyles)

const Content = () => {

  const {user} = useContext(StoreContext)
  const isUsaerLogged = Boolean(user)
  const isAdmin = user && user.accessLevel === 1;

  return ( 
    <main className={block()}>
      <Switch>
        <Route exact path="/" render={() => <Courses />}/>
        {isUsaerLogged && <Route exact path="/my-courses" render={() => <UserCourses />}/>}
        {isAdmin && <Route exact path="/manage-courses" render={() => <AdminPanel />}/>}
        <Route exact path='/:id' render={() => <CourseDescription />}/>
      </Switch>
    </main>
   );
}
 
export default Content;