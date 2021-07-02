import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import bemCssModules from 'bem-css-modules';

import { StoreContext } from '../../store/StoreProvider';

import {default as HeaderStyles} from './Header.module.scss';
import LoginForm from '../LoginForm/LoginFrom';
import SignInForm from '../SignInForm/SignInForm';

import UserMenu from './subcomponents/UserMenu';
import AdminMenu from './subcomponents/AdminMenu';

const block = bemCssModules(HeaderStyles)

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalSignInOpen, setIsModalSignInOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const {user, setUser} = useContext(StoreContext);

  const handleOnClose = () => setIsModalOpen(false)
  const handleOnCloseSignIn = () => setIsModalSignInOpen(false)

  const handleOnClick = () => {
    if(Boolean(user)){
      setUser(null)
    } else {
      setIsModalOpen(true)
    }
  }

  const handleOnClickSignIn = () => {
    setIsModalSignInOpen(true)
  }

  const handleOnClickOpenMenu = () => {
    const boxButton = document.querySelector('.header__box-button')
    setIsMenuOpen(prev => !prev)
    if(isMenuOpen) {
      boxButton.classList.add('header__box-button__isOpen')
    } else {
      boxButton.classList.remove('header__box-button__isOpen')
    }
  }

  const setProperlyLabel = Boolean(user) ? 'Wyloguj się' : 'Zaloguj się';
  const setProperlyLabelSignIn = Boolean(user) ? null : <button onClick={handleOnClickSignIn}>Zarejestruj się</button>;
  const adminMenuComponent = user && user.accessLevel === 1 ? <AdminMenu />: null;
  const basketSapn =  Boolean(user) && user.basket.length > 0 ? <span className={block("basket-span") }>{user.basket.length}</span> : null
  const setVisibilitybBasket = Boolean(user) ? <Link to='/basket'><i className={"fas fa-shopping-cart " + block("basket") }>{basketSapn}</i></Link> : null;


  return (
    <header className={block()}>
      <Link to='/'><h1 className={block('title')}>Świat kursów</h1></Link>
      <div className={block('container-allBox')}>
        {setVisibilitybBasket}
      <div className={block('box-button')}>
        <div className={block('box-options-users')}>
          <UserMenu isUserLogged={Boolean(user)}/>
          {adminMenuComponent}
        </div>
        <div className={block('login-box')}>
          <button onClick={handleOnClick}>{setProperlyLabel}</button>
          {setProperlyLabelSignIn}
        </div>
      </div>
      <div className={block('hamburger-menu')} onClick={handleOnClickOpenMenu}>
        <div className={block('line')}></div>
        <div className={block('line')}></div>
        <div className={block('line')}></div>
      </div>
      </div>
      <LoginForm handleOnClose={handleOnClose} isModalOpen={isModalOpen}/>
      <SignInForm handleOnCloseSignIn={handleOnCloseSignIn} isModalSignInOpen={isModalSignInOpen}/>
    </header>
  )
}

export default Header;