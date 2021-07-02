import React, {useState, useContext} from "react";
import bemCssModules from 'bem-css-modules'

import Modal from "../../Modal/Modal";
import {default as CoursePopupStyles} from './CoursePopup.module.scss';
import { StoreContext } from "../../../store/StoreProvider";
import request from "../../../helpers/request";

const block = bemCssModules(CoursePopupStyles)

const CoursePopup = ({authors = [], hidePopup, isEditMode = true, isOpenPopup, id, img='', price = 0, title ='', shortDiscription = '', description = [], knowledge = [], language = '', date = '', hours = 0, level='', lectures = 0}) => {

  const [formAuthors, setFormAuthors] = useState(authors);
  const [descriptionsForm, setDescriptionsForm] = useState(description);
  const [knowledgesForm, setKnowledgesForm] = useState(knowledge);

  const [descriptionForm, setDescriptionForm] = useState('');
  const [knowledgeForm, setKnowledgeForm] = useState('');
  const [formAuthor, setFormAuthor] = useState('');

  const [formImg, setFormImg] = useState(img);
  const [formPrice, setFormPrice] = useState(price);
  const [formTitle, setFormTitle] = useState(title);
  const [shortDescriptionForm, setShortDescriptionForm] = useState(shortDiscription);
  const [languageForm, setLanguageForm] = useState(language);
  const [dateForm, setDateForm] = useState(date);
  const [hoursForm, setHoursForm] = useState(hours);
  const [levelForm, setLevelForm] = useState(level);
  const [lecturesForm, setLecturesForm] = useState(lectures);

  const {setCourses} = useContext(StoreContext)

  const handleOnChangeAuthor = e => setFormAuthor(e.target.value)
  const handleOnChangeImg = e => setFormImg(e.target.value)
  const handleOnChangePrice = e => setFormPrice(e.target.value)
  const handleOnChangeTitle = e => setFormTitle(e.target.value)
  const handleOnChangeShortDescription = e => setShortDescriptionForm(e.target.value)
  const handleOnChangeDescription = e => setDescriptionForm(e.target.value)
  const handleOnChangeKnowledge = e => setKnowledgeForm(e.target.value)
  const handleOnChangeLanguage = e => setLanguageForm(e.target.value)
  const handleOnChangeDate = e => setDateForm(e.target.value)
  const handleOnChangeHours = e => setHoursForm(e.target.value)
  const handleOnChangeLevel = e => setLevelForm(e.target.value)
  const handleOnChangeLectures = e => setLecturesForm(e.target.value)

  const handleClickAddAuthor = (e) => {
    e.preventDefault();

    setFormAuthors(prev => [...prev, formAuthor])
    setFormAuthor('')
  }

  const handleClickAddDescription = (e) => {
    e.preventDefault();

    setDescriptionsForm(prev => [...prev, descriptionForm])
    setDescriptionForm('')
  }

  const handleClickAddKnowledge = (e) => {
    e.preventDefault();

    setKnowledgesForm(prev => [...prev, knowledgeForm])
    setKnowledgeForm('')
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const courseObejct = {
      authors: formAuthors,
      id,
      img: formImg,
      price: Number(formPrice),
      title: formTitle,
      date: dateForm,
      level: levelForm,
      hours: Number(hoursForm),
      lectures: Number(lecturesForm),
      shortDiscription: shortDescriptionForm,
      description: descriptionsForm,
      knowledge: knowledgesForm,
      language:  languageForm
    }

    if (isEditMode) { 
      const {data, status, message} = await request.put('/courses', courseObejct)

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

  const handleClickDeleteDescription = (e) => {
    const descToDelete = e.target.dataset.desc;
    setDescriptionsForm(prev => prev.filter(desc => desc !== descToDelete))
  }

  const handleClickDeleteKnowladge = (e) => {
    const knowToDelete = e.target.dataset.know;
    setKnowledgesForm(prev => prev.filter(know => know !== knowToDelete))
  }

  const authorsElements = formAuthors.map( author => (
    <li key={author} className={block('li-poup')}>
      <p>{author}</p>
      <button data-author={author} onClick={handleClickDeleteAuthor}>Usuń</button>
    </li>
  ))

  const descriptionsElements = descriptionsForm.map( desc => {
    const shortDesc = desc.slice(0, 30) + '...'
    return (
    <li key={shortDesc} className={block('li-poup')}>
      <p>{shortDesc}</p>
      <button data-desc={desc} onClick={handleClickDeleteDescription}>Usuń</button>
    </li>
  )})

  const knowladgesElements = knowledgesForm.map( know => {
    const shortKnow = know.slice(0, 30) + '...'
    return (
    <li key={shortKnow} className={block('li-poup')}>
      <p>{shortKnow}</p>
      <button data-know={know} onClick={handleClickDeleteKnowladge}>Usuń</button>
    </li>
  )})

  const correctButtonText = isEditMode ? 'Aktualizuj Kurs' : 'Utwórz kurs';

  return ( 
    <Modal handleOnClose={hidePopup} isOpen={isOpenPopup}>
      <div className={block()}>
        <form method="submit" onSubmit={handleOnSubmit}>
           <h4  className={block('titleAddCourseForm')}>Dodaj kurs</h4>
          <div >
            <label className={block('form-row')}>
              <input type="text" placeholder="Author" className={block('input')} value={formAuthor} onChange={handleOnChangeAuthor}/>
              <button type="button" onClick={handleClickAddAuthor} className={block('btn-poup')}>Dodaj autora</button>
            </label>
            <div>
             <p className={block('p-title-list')}>Lista autorów</p>
              <ul>
                {authorsElements}
              </ul>
            </div>
          </div>
          <div >
            <label className={block('form-row')}>
               <input type="text" placeholder="Adres obrazka" className={block('input')} value={formImg} onChange={handleOnChangeImg}/>
            </label>
          </div>
          <div >
            <label className={block('form-row')}>
              <input type="number" placeholder="Cena" className={block('input')} value={formPrice} onChange={handleOnChangePrice}/>
            </label>
          </div>
          <div >
            <label className={block('form-row')}>
              <input type="text" placeholder="Tytuł" className={block('input')} value={formTitle} onChange={handleOnChangeTitle}/>
            </label>
          </div>
          <div >
            <label className={block('form-row')}>
              <textarea type="text" rows="4" cols="50" placeholder="Krótki opis" className={block('input')} value={shortDescriptionForm} onChange={handleOnChangeShortDescription}/>
            </label>
          </div>
          <div >
            <label className={block('form-row')}>
              <textarea type="text" rows="4" cols="50" placeholder="Opis" className={block('input')} value={descriptionForm} onChange={handleOnChangeDescription}></textarea>
              <button type="button" onClick={handleClickAddDescription} className={block('btn-poup')}>Dodaj paragraf</button>
            </label>
            <div>
             <p className={block('p-title-list')}>Lista paragrfów</p>
              <ul>
                {descriptionsElements}
              </ul>
            </div>
          </div>
          <div >
            <label className={block('form-row')}>
              <textarea type="text" rows="4" cols="50" placeholder="Czegos sie nauczy" className={block('input')} value={knowledgeForm} onChange={handleOnChangeKnowledge}></textarea>
              <button type="button" onClick={handleClickAddKnowledge} className={block('btn-poup')}>Dodaj paragraf</button>
            </label>
            <div>
             <p className={block('p-title-list')}>Lista paragrfów</p>
              <ul>
                {knowladgesElements}
              </ul>
            </div>
          </div>
           <div >
            <label className={block('form-row')}>
              <input type="text" placeholder="Język" className={block('input')} value={languageForm} onChange={handleOnChangeLanguage}/>
            </label>
          </div>
           <div >
            <label className={block('form-row')}>
              <input type="text" placeholder="Data powstania" className={block('input')} value={dateForm} onChange={handleOnChangeDate}/>
            </label>
          </div>
          <div >
            <label className={block('form-row')}>
              <input type="number" placeholder="Czas trwania" className={block('input')} value={hoursForm} onChange={handleOnChangeHours}/>
            </label>
          </div>
          <div >
            <label className={block('form-row')}>
              <input type="text" placeholder="Poziom" className={block('input')} value={levelForm} onChange={handleOnChangeLevel}/>
            </label>
          </div>
          <div >
            <label className={block('form-row')}>
              <input type="number" placeholder="Ilosć kursów" className={block('input')} value={lecturesForm} onChange={handleOnChangeLectures}/>
            </label>
          </div>
          <div className={block('btn-box')}>
            <button type="submitt" className={block('btn-poup')}>{correctButtonText}</button>
            <button type="button" onClick={hidePopup} className={block('btn-poup')}>Anuluj</button>
          </div>
        </form>
      </div>
    </Modal>
   );
}
 
export default CoursePopup;