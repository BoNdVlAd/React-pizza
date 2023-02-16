import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Cart.module.scss';
import PizzaCart from '../../components/PizzaCart';
import { cartSelector, clearItems, setCart } from '../../redux/slices/cartSlice';
import qs from 'qs';
import { Navigate, useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector(cartSelector);
  const isMounted = React.useRef(false);

  const onClickClear = () => {
    if (window.confirm('are you sure ?')) {
      dispatch(clearItems());
    }
  };

  // const cartGood = cartItems.map((e) => {
  //   return {
  //     id: e.id,
  //   };
  // });
  // console.log(cartGood);

  // // React.useEffect(() => {
  // //   if (window.location.search) {
  // //     const params = qs.parse(window.location.search);
  // //     dispatch(
  // //       setCart({
  // //         ...params,
  // //       }),
  // //     );
  // //   }
  // // }, []);

  // React.useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       cartGood,
  //     });
  //     navigate(`?${queryString}`);
  //   }
  //   isMounted.current = true;
  // }, []);

  // React.useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       cartGood,
  //     });
  //     navigate(`?${queryString}`);
  //   }
  //   isMounted.current = true;
  // }, []);

  // const pizzas = cartItems.map((value) => (
  //   <PizzaCart
  //     id={value.id}
  //     title={value.title}
  //     price={value.price}
  //     img={value.imageUrl}
  //     // sizes={value.sizes}
  //     // types={value.types}
  //   />
  // ));
  return (
    <>
      {cartItems.length > 0 ? (
        <div className={styles.cart}>
          <div className={styles.cart__header}>
            <h1>Cart</h1>
            <button className={styles.cart__button} onClick={onClickClear}>
              Empty cart
            </button>
          </div>
          {cartItems.map((value) => (
            <PizzaCart
              id={value.id}
              title={value.title}
              price={value.price}
              img={value.img}
              type={value.type}
              size={value.size}
            />
          ))}
        </div>
      ) : (
        <div className={styles.image}>
          <img src="https://shop.millenniumbooksource.com/static/images/cart1.png" alt="" />
        </div>
      )}
    </>
  );
};

export default Cart;
