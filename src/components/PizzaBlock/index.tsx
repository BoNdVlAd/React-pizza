import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import { itemSelector } from '../../redux/slices/filterSlice';
import { Link } from 'react-router-dom';

type PizzaBlockProps = {
  sizes: [];
  id: string;
  title: string;
  price: number;
  img: string;
};
const PizzaBlock: React.FC<PizzaBlockProps> = ({ id, title, price, img, sizes }) => {
  const typeNames = ['тонкое', 'традиционное'];
  const dispatch = useDispatch();
  const cartItem = useSelector(itemSelector(id));

  const addedCount: any = cartItem ? cartItem : 0;

  // const [count, setCount] = useState(0);
  const [size, setSize] = useState(0);
  const [dough, setDough] = useState(0);

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      img,
      type: typeNames[dough],
      size: sizes[size],
    };
    dispatch(addItem(item));
  };
  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <Link key={id} to={`/pizza/${id}`}>
          <img className="pizza-block__image" src={img} alt="Pizza" />
          <h4 className="pizza-block__title">{title}</h4>
        </Link>
        <div className="pizza-block__selector">
          <ul>
            {typeNames.map((e, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setDough(index)}
                  className={dough === index ? 'active' : ''}>
                  {e}
                </li>
              );
            })}
          </ul>
          <ul>
            {sizes.map((e, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setSize(index)}
                  className={size === index ? 'active' : ''}>
                  {e}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от{price}$</div>
          <button className="button button--outline button--add" onClick={onClickAdd}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount.count && <i>{addedCount.count}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
