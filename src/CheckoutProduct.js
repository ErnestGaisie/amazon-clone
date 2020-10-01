import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  console.log(id, title, image, price, rating);
  const [{ basket }, dispatch] = useStateValue();
  const RemoveFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>☪ </p>
            ))}
        </div>
        <button className="" onClick={RemoveFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
