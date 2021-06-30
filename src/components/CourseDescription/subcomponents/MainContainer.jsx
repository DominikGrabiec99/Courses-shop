import React, {useState} from "react";
import bemCssModules from 'bem-css-modules'
import { default as CourseDescriptionStyles } from '../CourseDescription.module.scss';

const block = bemCssModules(CourseDescriptionStyles);
const MainContainer = ({description, knowledge}) => {

  let allKnowledges =null;
  let descriptionCourse =null;

  if(knowledge){
    allKnowledges = knowledge.map(knowledge => (
      <p key={knowledge}>{knowledge}</p>
    ))

    descriptionCourse = description.map(description => (
      <p key={description}>{description}</p>
    ))
  }
  return ( 
    <div className={block('main-container')}>
        <article className={block('main-info')}>
          <section>
            <h3>Czego się nauczysz</h3>
            {allKnowledges}
          </section>

          <section>
            <h3>Opis</h3>
            <div>
              {descriptionCourse}
            </div>
          </section>
        </article>   
      </div>
   );
}
 
export default MainContainer;