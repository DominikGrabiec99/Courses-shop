import React, {useState, useContext} from "react";
import bemCssModules from 'bem-css-modules'

import {default as SignInFormStyles} from './SignInForm.module.scss'
import { StoreContext } from "../../store/StoreProvider";
import Modal from "../Modal/Modal";
import request from "../../helpers/request";

const block = bemCssModules(SignInFormStyles);

const SignInForm = ({handleOnCloseSignIn, isModalSignInOpen}) => {
  const [loginSignIn, setLoginSignIn] = useState('');
  const [passwordSignIn, setPasswordSignIn] = useState('');
  const [userBudget, setUserBudget] = useState(0);
  const [validateMesssageSignIn, setValidateMesssageSignIn] = useState('');

  const { setUser } = useContext(StoreContext)


  const handleonChangeLogin = (e) => setLoginSignIn(e.target.value)
  const handleonChangePassword = (e) => setPasswordSignIn(e.target.value)
  const handleonChangeBudget = (e) => setUserBudget(e.target.value)

  const resetStateSignInInputs = () => {
    setPasswordSignIn('')
    setLoginSignIn('')
    setUserBudget(0)
    setValidateMesssageSignIn('')
  }

  const handleOnCloseSignIModal = e => {
    e.preventDefault();
    resetStateSignInInputs()
    handleOnCloseSignIn();
    handleOnCloseSignIn();
  }

  const handleOnSubmitSignIn = async (e) => {
    e.preventDefault();

    const userObejct = {
      accessLevel: Number(0),
      budget: Number(userBudget),
      courses: [],
      login: loginSignIn,
      password: passwordSignIn 
    }
    console.log('aaa')
    const {data, status} = await request.put('/users', userObejct)

    if (status === 201) {
      setUser(data.user)
      resetStateSignInInputs();
      handleOnCloseSignIn();
    } else {
      setValidateMesssageSignIn(data.message)
    }

  }

  const validateMessageSignInComponent = validateMesssageSignIn.length ? <p className={block('validate-message')}>{validateMesssageSignIn}</p> : null;

  return ( 
    <Modal handleOnClose={handleOnCloseSignIn} isOpen={isModalSignInOpen} shouldBeCloseOnOutsideClick={false}>
      {validateMessageSignInComponent}
      <form onSubmit={handleOnSubmitSignIn}>
        <div>
          <label>
            Nazwa używtkownika: <input type="text" onChange={handleonChangeLogin} value={loginSignIn}/>
          </label>
        </div>
        <div>
          <label>
            Hasło: <input type="password" onChange={handleonChangePassword} value={passwordSignIn}/>
          </label>
        </div>
        <div>
          <label>
            Dudżet: <input type="number" onChange={handleonChangeBudget} value={userBudget}/>
          </label>
        </div>
        <button type="submit">Zarejestruj się</button>
          <button type="button" onClick={handleOnCloseSignIModal}>Anuluj</button>
      </form>
    </Modal>
   );
}
 
export default SignInForm;