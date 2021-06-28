import React, {useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';
import beCssModules from 'bem-css-modules'

import {default as ModalStyles } from './Modal.module.scss';

const block = beCssModules(ModalStyles)

const Modal =({children, isOpen, shouldBeCloseOnOutsideClick, handleOnClose}) =>{

  const modalRef = useRef(null);
  const previousActiveElement = useRef(null)

  useEffect(() => {
    if(!modalRef.current) {
      return;
    }

    const {current: modal} = modalRef;

    if(isOpen) {
      previousActiveElement.current = document.activeElement;
      modal.showModal();
    }else if (previousActiveElement.current) {
      modal.close();
      previousActiveElement.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const {current: modal} = modalRef;

    const handleCancel = event => {
      event.preventDefault();
      handleOnClose();
    }

    modal.addEventListener('cancel', handleCancel);

    return () => {
      modal.removeEventListener('cancel', handleCancel)
    }
  }, [handleOnClose])

  const handleOutSideClick = ({target}) => {
    const {current} = modalRef;

    if(shouldBeCloseOnOutsideClick && target === current) {
      handleOnClose()
    }
  }

  return ReactDOM.createPortal((
    <dialog className={block()} ref={modalRef} onClick={handleOutSideClick}>
      {children}
    </dialog>
  ), document.body)
}

export default Modal;