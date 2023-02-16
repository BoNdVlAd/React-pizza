import axios from 'axios';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza = () => {
  const navigate = useNavigate();
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  const params = useParams();
  React.useEffect(() => {
    async function fetchPizzas() {
      try {
        const { data } = await axios.get(`https://63c543d5f80fabd877e44d8b.mockapi.io/items/${id}`);
        setPizza(data);
      } catch (error) {
        navigate('/');
        alert('Error while receiving a pizza');
      }
    }
    fetchPizzas();
  }, []);

  if (!pizza) {
    return <div>Загрузка</div>;
  }
  const { title, imageUrl, price } = pizza;
  return (
    <div>
      <img src={imageUrl} />
      <h2>{title}</h2>
      <p>
        While your app will only use a single router, several routers are available depending on the
        environment your app is running in. This document should help you figure out which one to
        use.
      </p>
      <h4>{price} $</h4>
    </div>
  );
};

export default FullPizza;
