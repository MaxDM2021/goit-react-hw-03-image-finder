import React, { Component } from "react";
import { createPortal } from "react-dom";
import 'components/Styles/styles.css';


const modalRoot = document.querySelector("#modal-root");

 class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log("Modal componentWillUnmount");
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
  if (e.code === 'Escape') {
      console.log("Нажали ESC, нужно закрыть модалку");
      this.props.onClose();
  }
  }

  handleBackdropClick = e => {
  if (e.currentTarget === e.target) {
      console.log('Кликнули в бекдроп, нужно закрыть модалку')
      this.props.onClose();
  }
  }

  clickModal = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    this.props.onClose();
  }


  render() 
  {
    const { src, alt } = this.props;
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal" onClick={this.clickModal}>
        <img src={src} alt={alt} width="800" height="600"/>
        </div>
      </div>,
      modalRoot
    );
  }
}


export default Modal




























// import PropTypes from 'prop-types';
// import * as basicLightbox from 'basiclightbox'
// import "basiclightbox/dist/basicLightbox.min.css"


// const Modal = ({ images }) => {

// basicLightbox.create( 
// <div class="overlay">
//   <div class="modal">
//     <img src={images.largeImageURL} alt=""/>
//   </div>
// </div>
//     ).show();
// };


// Modal.propTypes = {
//     image: PropTypes.object,
// };


// export default Modal 
