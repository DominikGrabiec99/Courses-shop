import React from "react";
import bemCssModules from 'bem-css-modules';
import { Link } from 'react-router-dom';
import { default as HeaderStyles } from "../Header.module.scss";

const block = bemCssModules(HeaderStyles)

const UserMenu = ({isUserLogged}) => {
  return ( 
    <>
      <nav>
        <ul>
          {isUserLogged && 
           <li className={block('link')}>
            <Link to='/my-courses'>Moje zakupione kursy</Link>
          </li>
          }
        </ul>
      </nav>
    </>
   );
}
 
export default UserMenu;