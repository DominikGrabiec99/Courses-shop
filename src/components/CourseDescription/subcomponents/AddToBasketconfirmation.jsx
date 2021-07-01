import React from "react";
import Modal from "../../Modal/Modal";
import { Link } from "react-router-dom";
import bemCssModules from 'bem-css-modules'
import { default as AddToBasketconfirmationStyles } from './AddToBasketconfirmation.module.scss';

const block = bemCssModules(AddToBasketconfirmationStyles)

const AddToBasketconfirmation = ({handleOnClose, isModalAddToBasketOpen, img, title, authors}) => {
  
  const allAuthors = authors ? authors.join(', ') : null

  return ( 
    <Modal handleOnClose={handleOnClose} isOpen={isModalAddToBasketOpen} shouldBeCloseOnOutsideClick={true}>
      <div className={block()}>
        <div className={block('wrapper')}>
          <div className={block('box')}>
            <div className={block('img-box')}>
              <img className={block('image')} src={img} alt={title} />
            </div>
            <div className={block('info-box')}> 
              <p className={block('title')}>{title}</p>
              <p className={block('authors')}><span className={block('bold-span')}>Autorzy: </span>{allAuthors}</p>
            </div>
          </div>
          <div className={block('btn-box')}>
            <button onClick={handleOnClose} className={block('btn-back')}>Kontynuuj zakupy</button>
            <Link to='/basket' className={block('btn-link')}><button className={block('btn-goToBasket')}>Przejdź do koszyka</button></Link>
          </div>
        </div>
      </div>
    </Modal>
   );
}
 
export default AddToBasketconfirmation;