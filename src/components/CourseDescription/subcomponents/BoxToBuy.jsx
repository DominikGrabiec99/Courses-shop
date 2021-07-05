import React, {useContext, useState, useEffect} from "react";
import bemCssModules from 'bem-css-modules'
import { default as CourseDescriptionStyles } from '../CourseDescription.module.scss';
import { useHistory } from "react-router";

import { StoreContext } from "../../../store/StoreProvider";
import request from "../../../helpers/request";

import AddToBasketconfirmation from "./AddToBasketconfirmation";

const block = bemCssModules(CourseDescriptionStyles)

const BoxToBuy = ({course, allAuthors}) => {

  const history = useHistory()

  const {user, setUser} = useContext(StoreContext);
  const [validataMessageNoUser, setValidataMessageNoUser] = useState(null);
  const [isModalAddToBasketOpen, setIsModalAddToBasketOpen] = useState(false)

  const handleOnClose = () => setIsModalAddToBasketOpen(false)
  let timout = null;
  
  const handleOnClick = async () => {
    try {

      if(!user){
        setValidataMessageNoUser('Musisz być zalogowanym')
        return
      }

      const {data, status} = await request.patch(
        `/users`,
        {
          login: user.login,
          courseId: course.id,
          isAddToBasket: "toBasket"
        }
      );

      if(status === 202){
        setUser(data.user);
        setIsModalAddToBasketOpen(true)
      }

      if(status === 200){
        setValidataMessageNoUser('Posiadasz juz ten kurs w koszyku')
        setTimeout( () => setValidataMessageNoUser(null) ,3000)
      }

      if(status === 201){
        setValidataMessageNoUser('Posiadasz juz ten kurs')
        setTimeout( () => setValidataMessageNoUser(null) ,3000)
      }

    } catch (error) {
      console.warn(error)
    }
  }

  useEffect(() => {
    timout =setTimeout( () => setValidataMessageNoUser(null) ,3000)
    return () => {
      clearTimeout(timout)
    }
  }, [timout])

  return ( 
    <React.Fragment>
     <div className={block('container-toBuy')}>
        <div>
          <img className={block('image')} src={course.img} alt={course.title} />
        </div>
        <h2 className={block('title')}>{course.title}</h2>
        <div>
          <p className={block('small-description')}>{course.shortDiscription}</p>
        </div>
        <div>
          <p className={block('authors')}>Autorzy: { allAuthors}</p>
          <p className={block('language')}>Język: { course.language }</p>
          <p className={block('last-update')}>Ostania aktualizacja: { course.date }</p>
        </div>
        <div>
          <p className={block('price')}> { course.price} zł</p>
        </div>
        <p className={block('validataMessage')}>{validataMessageNoUser}</p>
        <button className={block('btn-addToBasket')} onClick={handleOnClick}>Dodaj do koszyka</button>
      </div>
      { user &&<AddToBasketconfirmation handleOnClose={handleOnClose} isModalAddToBasketOpen={isModalAddToBasketOpen} {...course}/>}
    </React.Fragment>
   );
}
 
export default BoxToBuy;