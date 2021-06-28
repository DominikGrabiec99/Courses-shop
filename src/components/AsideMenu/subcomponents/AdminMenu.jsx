import React from "react";
import bemCssModules from 'bem-css-modules';
import { Link } from "react-router-dom";
import { default as AsideMenuStyles } from "../AsideMenu.module.scss";

const block = bemCssModules(AsideMenuStyles)

const AdminMenu = () => {
  return ( 
    <div>
      <p className={block('title')}>Panel administratora</p>
      <nav>
        <ul>
          <li className={block('link')}>
            <Link to='/manage-courses'>Zarządzanie kursami</Link>
          </li>
        </ul>
      </nav>
    </div>
   );
}
 
export default AdminMenu;