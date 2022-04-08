import React from 'react';

import { Input } from 'antd';
import 'antd/dist/antd.css';

const SearchBar = () => {
  const { Search } = Input;

  // const handleSearch = () => {};

  return (
    <Search
      className='search-bar'
      placeholder='Search'
      // onSearch={() => handleSearch()}
    />
  );
};

export default SearchBar;
