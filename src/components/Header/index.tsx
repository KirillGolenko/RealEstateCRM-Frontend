import React from 'react';
import Options from './OptionsPannel';

import PageInfo from './PageInfo';
import SearchBar from './SearchBar';
import UserInfo from './UserInfo';

const Header = () => {
  return (
    <div className='all-header-container'>
      <div className='header-container'>
        <PageInfo />
        <SearchBar />
      </div>
      <div className='header-options-container'>
        <UserInfo />
        <Options />
      </div>
    </div>
  );
};

export default Header;
