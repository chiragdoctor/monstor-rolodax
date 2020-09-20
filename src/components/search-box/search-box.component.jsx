import React from 'react';

import './serach-box.styles.css';

const SearchBox = ({ handleChange, placeholder, searchField }) => {
  return (
    <input
      type='search'
      className='search'
      placeholder={placeholder}
      onChange={handleChange}
      value={searchField}
    />
  );
};

export default SearchBox;
