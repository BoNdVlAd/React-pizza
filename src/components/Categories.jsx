import React from 'react';

const Categories = ({ onSetCategoryId, categoryId }) => {
  const categories = ['Все', 'Мясные', 'Гриль', 'Острые', 'Вегетарианская', 'Закрытые'];

  return (
    <div class="categories">
      <ul>
        {categories.map((e, index) => (
          <li
            key={index}
            onClick={() => onSetCategoryId(categories.indexOf(e))}
            className={categoryId === categories.indexOf(e) ? 'active' : ''}>
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
