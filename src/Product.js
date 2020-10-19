import React from "react";
import "./Product.css";
import {useStateValue} from './StateProvider';

const Product = ({id, title, image, rating , price}) => {
  const [{basket}, dispatch] = useStateValue();

  console.log("this is basket >>>>",basket);
  const addToBasket = ()=>{
      dispatch({
        type:'ADD_TO_BASKET',
        item:{
          id :id,
          title:title,
          image:image,
          rating:rating,
          price:price
        }
      });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_,i)=>(<p>*</p>))}
        </div>
   
        <img src={image} alt=""/>
        <button onClick={addToBasket}> Add to basket</button>
      </div>
    </div>
  );
};

export default Product;


