import React, {useContext, useState} from 'react';
import bemCssModules from 'bem-css-modules';

import { StoreContext } from '../../store/StoreProvider';

import {default as HeaderStyles} from './Header.module.scss';
import LoginForm from '../LoginForm/LoginFrom';
import SignInForm from '../SignInForm/SignInForm';

const block = bemCssModules(HeaderStyles)

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalSignInOpen, setIsModalSignInOpen] = useState(false)
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

  const setProperlyLabel = Boolean(user) ? 'Wyloguj się' : 'Zaloguj się';
  const setProperlyLabelSignIn = Boolean(user) ? null : <button onClick={handleOnClickSignIn}>Zarejestruj się</button>;

  return (
    <header className={block()}>
      <div className={block('logo-wrapper')}></div>
      <h1 className={block('title')}>Super kursy dla programistów</h1>
      <button onClick={handleOnClick}>{setProperlyLabel}</button>
      {setProperlyLabelSignIn}
      <LoginForm handleOnClose={handleOnClose} isModalOpen={isModalOpen}/>
      <SignInForm handleOnCloseSignIn={handleOnCloseSignIn} isModalSignInOpen={isModalSignInOpen}/>
    </header>
  )
}

export default Header;