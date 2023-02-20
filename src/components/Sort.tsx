import React from 'react';

const Sort = ({ sortId, onChangeSort, price, onSetPrice }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const sort: string[] = ['популярности', 'цене', 'алфавиту'];
  const sortName: string = sort[sortId];
  const sortRef = React.useRef<HTMLDivElement>(null);

  const typeNames: string[] = ['от большего к меньшему', 'от меньшего к большему'];

  const popUp = () => {
    setIsVisible(!isVisible);
  };
  const setSortedPrice = (index: number) => {
    onSetPrice(index);
  };
  const setSorted = (index: number) => {
    onChangeSort(index);
    setIsVisible(!isVisible);
  };
  console.log(sortRef);
  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setIsVisible(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div ref={sortRef} className="sort">
      <div onClick={() => popUp()} className="sort__label">
        <svg
          className={isVisible ? 'active_label' : 'rotate'}
          // className="rotate"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span>{sortName}</span>
      </div>
      <div className="pizza-block__selector .price">
        <ul>
          {typeNames.map((e, index) => {
            return (
              <li
                key={index}
                onClick={() => setSortedPrice(index)}
                className={price === index ? 'active' : ''}>
                {e}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="sort__popup">
        {isVisible && (
          <ul>
            {sort.map((e, index) => (
              <li
                onClick={() => setSorted(index)}
                key={index}
                className={sortId === index ? 'active' : ''}>
                {e}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sort;
