import React, {useContext} from "react";
import bemCssModules from 'bem-css-modules'
import {default as CurseStyles} from './Course.module.scss';
import request from "../../helpers/request";
import { StoreContext } from "../../store/StoreProvider";
import { useHistory } from "react-router";

const block = bemCssModules(CurseStyles)

const Course = ({price, title, authors, img, isUserContext = false, id}) => {
  
  const {user, setUser} = useContext(StoreContext);
  const history = useHistory();

  const allAuthors = authors.join(', ')

  const isUserLogged = Boolean(user)

  const handleOnClick = async () => {
    try {
      const {data, status} = await request.patch(
        '/users',
        {
          login: user.login,
          courseId: id
        }
      );

      if(status === 202){
        setUser(data.user);
        console.log(history)
        history.push('/my-courses')
      }

    } catch (error) {
      console.warn(error)
    }
  }

  const isBuyButtonVisible = isUserLogged && !isUserContext

  return ( 
    <li>
      <article className={block()}>
      <h3 className={block('title')}>{title}</h3>
      <img src={img} alt={title}  className={block('image')}/>
      <p className={block('authors')}>{`Autorzy kursu: ${allAuthors}`}</p>
      <p className={block('price')}> {`Cena kursu wynosi: ${price} zł`}</p>
      {isBuyButtonVisible && <button onClick={handleOnClick}>Zakup kurs</button> }
    </article>
    </li>
    
   );
}
 
export default Course;