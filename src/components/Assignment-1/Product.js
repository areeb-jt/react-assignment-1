/* eslint-disable react/prop-types */
import React from 'react';

const Product = (props) => {
  const {title,price,rating,desc,img_src} = props
  return (
      <article className="product">
      <img src={img_src} alt="" />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p>Price: $ {price}</p>
        <p>Rating: {rating}/5</p>
        <p className="product__desc">Description: {desc}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
