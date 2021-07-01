import React, {useContext} from "react";
import bemCssModules from 'bem-css-modules'
import {default as CurseStyles} from './Course.module.scss';
import request from "../../helpers/request";
import { StoreContext } from "../../store/StoreProvider";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const block = bemCssModules(CurseStyles)

const Course = ({price, title, authors, img, isUserContext = false, id, shortDiscription, level, lectures, hours }) => {
  
  const {user, setUser} = useContext(StoreContext);
  const history = useHistory();

  const allAuthors = authors.join(', ')

  const isUserLogged = Boolean(user)

  // const handleOnClick = async () => {
  //   try {
  //     const {data, status} = await request.patch(
  //       '/users',
  //       {
  //         login: user.login,
  //         courseId: id
  //       }
  //     );

  //     if(status === 202){
  //       setUser(data.user);
  //       history.push('/my-courses')
  //     }

  //   } catch (error) {
  //     console.warn(error)
  //   }
  // }

  const isBuyButtonVisible = isUserLogged && !isUserContext

  return ( 
    <li className={block()}>
      <Link to={`/${id}`}>
        <article className={block('article')}>
          <div className={block('img-box')}>
            <img src={img} alt={title}  className={block('image')}/>
          </div>
          <div className={block('information-box')}>
            <h3 className={block('title')}>{title}</h3>
            <p className={block('description')}>{shortDiscription}</p>
            <p className={block('authors')}><span className={block('span--bold')}>Autorzy kursu:</span>  {allAuthors}</p>
            <p className={block('info')}><span className={block('span--bold')}>Łacznie:</span> {hours} h, <span>{lectures} wykładów,</span> poziom: <span>{level}</span></p>
          </div>
          <div className={block('price-box')}>
            <p className={block('price')}> {price} zł</ p>
          </div>
          
          
          
          
          {/* {isBuyButtonVisible && <button onClick={handleOnClick}>Zakup kurs</button> } */}
        </article>
      </Link>
    </li>
    
   );
}
 
export default Course;