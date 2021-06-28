import React, {useContext} from 'react';
import { StoreContext } from '../../store/StoreProvider';

import bemCssModules from 'bem-css-modules'
import { default as AsideMenuStyles } from './AsideMenu.module.scss';
import UserMenu from './subcomponents/UserMenu';
import AdminMenu from './subcomponents/AdminMenu';

const block = bemCssModules(AsideMenuStyles)

const AsideMenu = () => {
  const {user} = useContext(StoreContext)
  
  const adminMenuComponent = user && user.accessLevel === 1 ? <AdminMenu />: null
  return ( 
    <section className={block()}>
      <div className={block('nav-wrapper')}>
        <UserMenu isUserLogged={Boolean(user)}/>
      {adminMenuComponent}
      </div>
    </section>
   );
}
 
export default AsideMenu;