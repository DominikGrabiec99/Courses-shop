import React, {useState, useContext} from "react";
import bemCssModules from 'bem-css-modules'

import Modal from "../../Modal/Modal";
import {default as CoursePopupStyles} from './CoursePopup.module.scss';
import { StoreContext } from "../../../store/StoreProvider";
import request from "../../../helpers/request";

const block = bemCssModules(CoursePopupStyles)

const CoursePopup = ({authors = [], hidePopup, isEditMode = true, isOpenPopup, id, img='', price = 0, title =''}) => {

  const [formAuthors, setFormAuthors] = useState(authors);
  const [formAuthor, setFormAuthor] = useState('');
  const [formImg, setFormImg] = useState(img);
  const [formPrice, setFormPrice] = useState(price);
  const [formTitle, setFormTitle] = useState(title);

  const {setCourses} = useContext(StoreContext)

  const handleOnChangeAuthor = e => setFormAuthor(e.target.value)
  const handleOnChangeImg = e => setFormImg(e.target.value)
  const handleOnChangePrice = e => setFormPrice(e.target.value)
  const handleOnChangeTitle = e => setFormTitle(e.target.value)

  const handleClickAddAuthor = (e) => {
    e.preventDefault();

    setFormAuthors(prev => [...prev, formAuthor])
    setFormAuthor('')
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const courseObejct = {
      authors: formAuthors,
      id,
      img: formImg,
      price: Number(formPrice),
      title: formTitle
    }

    if (isEditMode) { 
      const {data, status} = await request.put('/courses', courseObejct)

      if (status === 202) {
        setCourses(data.courses)
      }
    } else {
      const {data, status} = await request.post('/courses', courseObejct)

      if (status === 201) {
        setCourses(data.courses)
      }
    }

    hidePopup(e);
  }

  const handleClickDeleteAuthor = (e) => {
    const authorToDelete = e.target.dataset.author;
    setFormAuthors(prev => prev.filter(author => author !== authorToDelete))
  }

  const authorsElements = formAuthors.map( author => (
    <li key={author}>
      <p>{author}</p>
      <button data-author={author} onClick={handleClickDeleteAuthor}>Usuń</button>
    </li>
  ))

  const correctButtonText = isEditMode ? 'Aktualizuj Kurs' : 'Utwórz kurs';

  return ( 
    <Modal handleOnClose={hidePopup} isOpen={isOpenPopup}>
      <div className={block()}>
        <form className={block('form')} method="submit" onSubmit={handleOnSubmit}>
          <div className={block('form-row')}>
            <label >
              Author: <input type="text" className={block('input')} value={formAuthor} onChange={handleOnChangeAuthor}/>
              <button type="button" onClick={handleClickAddAuthor}>Dodaj autora</button>
            </label>
          </div>
          <div className={block('form-row')}>
            <label >
              Adres obrazka: <input type="text" className={block('input')} value={formImg} onChange={handleOnChangeImg}/>
            </label>
          </div>
          <div className={block('form-row')}>
            <label >
              Cena: <input type="number" className={block('input')} value={formPrice} onChange={handleOnChangePrice}/>
            </label>
          </div>
          <div className={block('form-row')}>
            <label >
              Tytuł: <input type="text" className={block('input')} value={formTitle} onChange={handleOnChangeTitle}/>
            </label>
          </div>
          <button type="submitt">{correctButtonText}</button>
          <button type="button" onClick={hidePopup}>Anuluj</button>
        </form>
        <p>Lista autorów</p>
        <ul>
          {authorsElements}
        </ul>
      </div>
    </Modal>
   );
}
 
export default CoursePopup;