import React from 'react';
import {
  Input,
  Select
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../../styles/items/filter_bar.scss';

const FilterBar = ({ categories }) => {
  const options = [
    { key: 'all', text: 'All', value: 'all' },
    { key: 'articles', text: 'Articles', value: 'articles' },
    { key: 'products', text: 'Products', value: 'products' },
  ];

  return (
    <div className="filter-bar">
      <Input type="text" placeholder="Search..." action>
        <input />
        <Select compact options={options} defaultValue="all" />
      </Input>
    </div>
  );
};

FilterBar.propTypes = {
  categories: PropTypes.instanceOf(Object)
};

FilterBar.defaultProps = {
  categories: null
};

export default FilterBar;
