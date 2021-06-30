import React from "react";
import bemCssModules from 'bem-css-modules';
import { Link } from "react-router-dom";
import { default as HeaderStyles } from "../Header.module.scss";

const block = bemCssModules(HeaderStyles)

const AdminMenu = () => {
  return ( 
    <div>
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