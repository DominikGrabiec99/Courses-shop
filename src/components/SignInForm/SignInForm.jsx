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
  const [userBudget, setUserBudget] = useState(1000);
  const [nameSignIn, setNameSignIn] = useState('');
  const [surnameSignIn, setSurnameSignIn] = useState('');
  const [validateMesssageSignIn, setValidateMesssageSignIn] = useState('');

  const { setUser } = useContext(StoreContext)


  const handleonChangeLogin = (e) => setLoginSignIn(e.target.value)
  const handleonChangePassword = (e) => setPasswordSignIn(e.target.value)
  const handleonChangeBudget = (e) => setUserBudget(e.target.value)
  const handleonChangeName = (e) => setNameSignIn(e.target.value)
  const handleonChangeSurname = (e) => setSurnameSignIn(e.target.value)

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
      password: passwordSignIn,
      name: nameSignIn,
      surname: surnameSignIn,
      basket: []
    }

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
      
      <form className={block()} method="put" onSubmit={handleOnSubmitSignIn}>
        <h4  className={block('titleFotmSignin')}>Zarejestruj się i rozpocznij naukę!</h4>
        {validateMessageSignInComponent}
        <div>
          <label className={block('row')}>
            <input type="text" className={block('inputValue')} placeholder="Nazwa używtkownika" onChange={handleonChangeLogin} value={loginSignIn} />
          </label>
        </div>
        <div>
          <label className={block('row')}>
            <input type="text" className={block('inputValue')} placeholder="Imię" onChange={handleonChangeName} value={nameSignIn}/>
          </label>
        </div>
        <div>
          <label className={block('row')}>
            <input type="text" className={block('inputValue')} placeholder="Nazwisko" onChange={handleonChangeSurname} value={surnameSignIn}/>
          </label>
        </div>
        <div>
          <label className={block('row')}>
            <input type="password" className={block('inputValue')} placeholder="Hasło" onChange={handleonChangePassword} value={passwordSignIn}/>
          </label>
        </div>
        {/* <div>
          <label className={block('row')}>
            <input type="number" className={block('inputValue')} placeholder="Dudżet" onChange={handleonChangeBudget} value={userBudget}/>
          </label>
        </div> */}
        <div className={block('btn-box')}>
          <button type="submit" >Zarejestruj się</button>
          <button type="button" onClick={handleOnCloseSignIModal}>Anuluj</button>
        </div>
      </form>
    </Modal>
   );
}
 
export default SignInForm;