import React from 'react';
import Sort from '../components/Sort';
import {
  setSortId,
  setCategoryId,
  setPageCount,
  setFilters,
  setSortPrice,
  filterSelector,
} from '../redux/slices/filterSlice';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import qs from 'qs';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { useNavigate, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import styles from '../scss/app.scss';
import { fetchPizzas } from '../redux/slices/pizzasSlice';

const Home = () => {
  const isMounted = React.useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const { categoryId, sortId, pageCount, sortPrice, searchValue } = useSelector(filterSelector);
  const { items, status } = useSelector((state) => state.pizzas);

  // const [activeIndex, setActiveIndex] = React.useState(0);
  const sortTitle = ['rating', 'price', 'title'];
  const order = ['grow', 'desc'];
  // const [sortBy, setSortBy] = React.useState(0);

  const [isLoading, setIsLoading] = React.useState(true);

  const onSetCategoryId = (id) => {
    dispatch(setCategoryId(id));
  };
  const onChangePage = (number) => {
    dispatch(setPageCount(number));
  };
  const onSetPrice = (id) => {
    dispatch(setSortPrice(id));
  };
  const onSetSort = (id) => {
    dispatch(setSortId(id));
  };
  const getPizzas = async () => {
    setIsLoading(true);

    // await axios
    //   .get(
    //     `https://63c543d5f80fabd877e44d8b.mockapi.io/items?page=${pageCount}&limit=4&${
    //       categoryId > 0 ? `category=${categoryId}` : ''
    //     }&sortBy=${sortTitle[sortId]}&order=${order[sortPrice]}`,
    //   )
    //   .then((response) => {
    //     setItems(response.data);
    //     setIsLoading(false);
    //     console.log('1');
    //   });
    try {
      dispatch(
        fetchPizzas({
          sortId,
          categoryId,
          sortPrice,
          pageCount,
          order,
          sortTitle,
        }),
      );
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
    window.scrollTo(0, 0);
  };

  // React.useEffect(() => {
  //   document.body.addEventListener('click', (event) => {
  //     console.log(`X: ${event.clientX}\r\nY: ${event.clientY}`);
  //   });
  // }, []);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(
        setFilters({
          ...params,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
  }, [sortId, categoryId, sortPrice, pageCount]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortId,
        categoryId,
        pageCount,
        sortPrice,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [sortId, categoryId, sortPrice, pageCount]);

  const pizzas = items
    .filter((obj) => {
      return obj.title.toLowerCase().includes(searchValue.toLowerCase());
    })
    .map((value) => (
      <Link key={value.id} to={`/pizza/${value.id}`}>
        <PizzaBlock
          id={value.id}
          title={value.title}
          price={value.price}
          img={value.imageUrl}
          sizes={value.sizes}
          types={value.types}
        />
      </Link>
    ));
  const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />);

  return (
    <>
      <div class="content__top">
        {<Categories categoryId={categoryId} onSetCategoryId={(id) => onSetCategoryId(id)} />}
        {
          <Sort
            sortId={sortId}
            onChangeSort={(i) => onSetSort(i)}
            price={sortPrice}
            onSetPrice={(i) => onSetPrice(i)}
          />
        }
      </div>
      <h2 class="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div>Something went wrong</div>
      ) : (
        <div class="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}

      <Pagination value={pageCount} onChangePage={(pageCount) => onChangePage(pageCount)} />
    </>
  );
};

export default Home;
