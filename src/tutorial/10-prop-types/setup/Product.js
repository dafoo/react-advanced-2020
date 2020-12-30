import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';  // requires extension

const Product = ({image, name, price}) => {
  const url = image && image.url 
  return <article className='product'>
    <img src={url || defaultImage} alt={name || 'default'}/>
    <h4>{name || 'default'}</h4>
    <p>${price || 3.99}</p>
  </article>;
};

Product.propTypes = {
  image:PropTypes.object.isRequired,  // scream if not available
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
};

// fallback values
// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: defaultImage, 
// };

export default Product;
