import React, {useState} from "react";
import bemCssModules from 'bem-css-modules'
import { default as CourseDescriptionStyles } from '../CourseDescription.module.scss';

const block = bemCssModules(CourseDescriptionStyles);
const MainContainer = ({description, knowledge, title, shortDiscription, hours, lectures, level}) => {

  let allKnowledges =null;
  let descriptionCourse =null;

  if(knowledge){
    allKnowledges = knowledge.map(knowledge => (
      <p key={knowledge} className={block('pargInformation')}><i className={"fas fa-check " + block('check')}></i>{knowledge}</p>
    ))

    descriptionCourse = description.map(description => {
      const classWeigth = description.length < 80 ? 'pargDescriptionWeigth' : ''
      return (
        <p key={description} className={block('pargDescription') + " " + block(classWeigth)}>{description}</p>
    )})
  }
  return ( 
    <div className={block('main-container')}>
      <article className={block('absoluteBlock')}>
        <div className={block('boxHeader')}>
          <h1 className={block('header-title')}>{title}</h1>
          <p className={block('header-shortDiscription')}>{shortDiscription}</p>
          <p className={block('info')}><span className={block('span--bold')}>Łacznie:</span> {hours} h <span>{lectures} wykładów</span> <span>{level}</span></p>
        </div>
      </article>
        <article className={block('main-info')}>
          <section className={block('toLearn')}>
            <h3 className={block('titleToLearn')}>Czego się nauczysz</h3>
            <div className={block('boxInformation')}>
              {allKnowledges}
            </div>
          </section>
          <section className={block('description-info')}>
            <h3 className={block('titleToDescription')}>Opis</h3>
            <div className={block('box-description')}>
              {descriptionCourse}
            </div>
          </section>
        </article>   
      </div>
   );
}
 
export default MainContainer;