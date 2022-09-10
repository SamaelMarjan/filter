import React from 'react';

import Search from '../../components/Home/SearchBar/Search';
import Filter from '../../components/Home/FilterPanel/Filter';
import List from '../../components/Home/List/List';

const Home = () => {
  return (
    <div className='home'>
        {/* Search Bar */}
        <Search />

        {/* Side Panels */}
        <Filter />

        {/* List & Empty View */}
        <List />
    </div>
  )
}

export default Home;