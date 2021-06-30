import React, {useContext} from 'react';
import { StoreContext } from '../../store/StoreProvider';

import bemCssModules from 'bem-css-modules'
import { default as AsideMenuStyles } from './AsideMenu.module.scss';

const block = bemCssModules(AsideMenuStyles)

const AsideMenu = () => {
  const {user} = useContext(StoreContext)
  
  
  return ( 
    <section className={block()}>
      tu będą filty
    </section>
   );
}
 
export default AsideMenu;