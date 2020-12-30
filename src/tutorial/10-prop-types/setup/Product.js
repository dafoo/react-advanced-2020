import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';  // requires extension

const Product = ({image, name, price}) => {
  return <article className='product'>
    <img src={image.url} alt={name}/>
    <h4>{name}</h4>
    <p>${price}</p>
  </article>;
};

Product.propTypes = {
  image:PropTypes.object.isRequired,  // scream if not available
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
};

// fallback values
Product.defaultProps = {
  name: 'default name',
  price: 3.99,
  image: defaultImage, 
};

export default Product;
