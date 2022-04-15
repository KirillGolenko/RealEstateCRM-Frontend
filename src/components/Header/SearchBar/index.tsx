import React from 'react';

import { Input } from 'antd';
import 'antd/dist/antd.css';

const SearchBar = () => {
  const { Search } = Input;

  return <Search className='search-bar' placeholder='Search' />;
};

export default SearchBar;
