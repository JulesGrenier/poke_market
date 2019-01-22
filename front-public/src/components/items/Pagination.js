import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../../styles/items/pagination.scss';

const Pagination = ({ currentPage }) => {

  const prev = parseInt(currentPage) - 1, next = parseInt(currentPage) + 1;

  return (
    <div id="pagination">
      {
        currentPage > 1 &&
        <Link
          to={`/browse/${prev}`}
          className="prev"
        >
          <Icon name="chevron left" />
        </Link>
      }
      <span className="curr">
        {`Page ${currentPage}`}
      </span>
      <Link
        to={`/browse/${next}`}
        className="next"
      >
        <Icon name="chevron right" />
      </Link>
    </div>
  );
};

export default Pagination;