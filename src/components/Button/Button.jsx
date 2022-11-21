import React from 'react';
import PropTypes from 'prop-types';
import 'components/Styles/styles.css';



const Button = ({ loadMore }) => {

  function Loader(){
    loadMore()
  }
 
 return (
  <div className="ButtonBox">
  <button type="button" className="Button" onClick={Loader}>
  Loard more
  </button>
  </div>
 )
};

Button.defaultProps = {
  onClick: () => null,
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;