import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, removeItems, cartItemSelector } from '../../redux/slices/cartSlice';

type CartItemsProps = {
  size: number;
  id: string;
  title: string;
  price: number;
  img: string;
  type: string;
};

const PizzaCart: React.FC<CartItemsProps> = ({ size, id, title, price, img, type }) => {
  // const typeNames = ['тонкое', 'традиционное'];
  const dispatch = useDispatch();
  const cartItem = useSelector(cartItemSelector(id));

  const addedCount: any = cartItem ? cartItem : 0;

  const onClickAdd = () => {
    const item = {
      id,
    };
    dispatch(addItem(item));
  };
  const onClickRemove = () => {
    const item = {
      id,
    };
    dispatch(removeItem(item));
  };
  const onClickRemoveItems = () => {
    const item = {
      id,
    };
    dispatch(removeItems(item));
  };

  return (
    <div className="pizza-cart-wrapper">
      <div className="pizza-cart">
        <div className="pizza-cart-flex">
          <div className="pizza-cart-main">
            <img className="pizza-cart__image" src={img} alt="Pizza" />
            <div className="pizza-cart-text">
              <h4 className="pizza-cart__title">{title}</h4>
              <h5 className="pizza-cart__text">
                {type} , {size} см
              </h5>
            </div>
          </div>
          <div className="pizza-cart-center">
            <div className="pizza-cart-change">
              <button className="pizza-cart-btn" onClick={onClickRemove}>
                <svg
                  className="pizza-cart-icon"
                  // class="feather feather-plus-circle"
                  fill="none"
                  height="24"
                  stroke="orangered"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="8" x2="16" y1="12" y2="12" />
                </svg>
              </button>
              {addedCount.count && <i>{addedCount.count}</i>}
              <button className="pizza-cart-btn" onClick={onClickAdd}>
                <svg
                  className="pizza-cart-icon"
                  // class="feather feather-plus-circle"
                  fill="none"
                  height="24"
                  stroke="orangered"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" x2="12" y1="8" y2="16" />
                  <line x1="8" x2="16" y1="12" y2="12" />
                </svg>
              </button>
            </div>
            <div className="pizza-cart__price">{price}$</div>
          </div>
        </div>

        <button className="pizza-cart-remove" onClick={onClickRemoveItems}>
          <svg
            fill="orangered"
            data-name="Layer 1"
            height="30"
            id="Layer_1"
            viewBox="0 0 200 200"
            width="30"
            xmlns="http://www.w3.org/2000/svg">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PizzaCart;
