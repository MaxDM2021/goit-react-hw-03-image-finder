import React from 'react';
import PropTypes from 'prop-types';
import 'components/Styles/styles.css';



const Button = ({ loadMore }) => {
 
 return (
  <>
 <button type="button" className="Button" onClick={() => {loadMore()}}>
  Loard more
  </button>
  </>
 )
};

Button.defaultProps = {
  onClick: () => null,
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;