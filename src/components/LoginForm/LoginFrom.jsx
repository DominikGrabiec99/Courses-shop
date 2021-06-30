import React, {useState, useContext}from 'react';
import bemCssModules from 'bem-css-modules'

import {default as LoginFormStyles} from './LoginForm.module.scss'
import Modal from '../Modal/Modal';
import request from '../../helpers/request';
import { StoreContext } from '../../store/StoreProvider';

const block = bemCssModules(LoginFormStyles);

const LoginForm = ({handleOnClose, isModalOpen}) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [validateMesssage, setValidateMesssage] = useState('')

  const { setUser } = useContext(StoreContext)

  const validateMessageComponent = validateMesssage.length ? <p className={block('validate-message')}>{validateMesssage}</p> : null;

  const handleOnChangeLogin = e => setLogin(e.target.value)
  const handleOnChangePassword = e => setPassword(e.target.value)
  const handleOnCloseModal = e => {
    e.preventDefault();
    resetStateInputs()
    handleOnClose();
  }

  const resetStateInputs = () => {
    setLogin('');
    setPassword('')
    setValidateMesssage('')
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    
    const {data, status} = await request.post('/users', {login , password})

    if(status === 200){
      setUser(data.user);
      resetStateInputs();
      handleOnClose();
    } else {
      setValidateMesssage(data.message)
    }
  }

  return ( 
    <Modal handleOnClose={handleOnClose} isOpen={isModalOpen} shouldBeCloseOnOutsideClick={true}>
      
      <form className={block()} method="post" onSubmit={handleOnSubmit}>
        <div className={block('wrapperForm')}>
          <h4  className={block('titleFotmSignin')}>Zaloguj się</h4>
          {validateMessageComponent}
          <div >
            <label className={block('row')}>
              <input className={block('inputValue')} placeholder="Login" type="text" value={login} onChange={handleOnChangeLogin}/>
            </label>
          </div>
          <div >
            <label className={block('row')}>
              <input className={block('inputValue')} placeholder="Hasło" type="password" value={password} onChange={handleOnChangePassword}/>
            </label>
          </div>
          <div className={block('btn-box')}>
            <button type="submit">Zaloguj</button>
            <button type="button" onClick={handleOnCloseModal}>Anuluj</button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default LoginForm