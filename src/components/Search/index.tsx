import React from 'react';
import styles from './Search.module.scss';

import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

const Search = () => {
  const dispatch = useDispatch();

  const inputRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState<string>();

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current.focus();
  };
  const onInputRequest = React.useCallback(
    debounce((event) => {
      dispatch(setSearchValue(event.target.value));
    }, 500),
    [],
  );
  const onInputChange = (event) => {
    setValue(event.target.value);
    onInputRequest(event);
  };

  return (
    <div className={styles.search}>
      <svg
        className={styles.icon}
        id="Icons"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>.cls-1</style>
        </defs>
        <path d="M18.856,14.624a10.022,10.022,0,1,0-4.234,4.234l4.254,4.255a2.994,2.994,0,1,0,4.239-4.23ZM2,10a8,8,0,1,1,8,8A8.009,8.009,0,0,1,2,10ZM21.7,21.708a1,1,0,0,1-1.4,0l-3.967-3.968a10.092,10.092,0,0,0,1.4-1.406L21.705,20.3a.976.976,0,0,1-.009,1.407Z" />
        <path d="M10,4a6.006,6.006,0,0,0-6,6,1,1,0,0,0,2,0,4,4,0,0,1,4-4,1,1,0,0,0,0-2Z" />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={(event) => onInputChange(event)}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {value && (
        <svg
          onClick={() => onClickClear()}
          className={styles.clear}
          version="1.1"
          viewBox="0 0 24 24">
          <g id="info" />
          <g id="icons">
            <path
              d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z"
              id="exit"
            />
          </g>
        </svg>
      )}
    </div>
  );
};

export default Search;
