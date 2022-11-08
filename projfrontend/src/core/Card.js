import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import { isAutheticated } from '../auth/helper/index';


const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = f => f,
  //   function(f){return f}
  reload = undefined
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cartTitle = product ? product.name : "A photo from pexels";
  const cartDescrption = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "DEFAULT";
  const cartCategory = product ? product.category?.name : "Reading Book";
  

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
  };

  const getARedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = addtoCart => {
    return (
      (isAutheticated()===false || isAutheticated().user.role === 0) &&
      addtoCart && (
        <button
          onClick={addToCart}
          className="btn btn-md btn-success mb-3"
        >
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = removeFromCart => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };
  return (
    <div className=" product-card">
	
		<div className="product-tumb img ">
    <ImageHelper product={product} />
		</div>
		<div className="product-details">
    {getARedirect(redirect)}
    <span className="product-category">{cartCategory}</span>
			<b><h4 className="text-dark">{cartTitle}</h4></b>
			<p className="text-dark">{cartDescrption}</p>
			<div className="product-bottom-details">        
				<div className="product-price mt-2">
          <small>${cartPrice+10}</small>${cartPrice}
          
        </div>
          <div className="col-12">{showAddToCart(addtoCart)}</div>
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
