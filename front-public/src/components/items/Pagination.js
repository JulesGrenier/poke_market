import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../styles/items/pagination.scss';

const Pagination = ({ currentPage, handlePageChange }) => {
  const prev = parseInt(currentPage) - 1;
  const next = parseInt(currentPage) + 1;

  return (
    <div id="pagination">
      {
        currentPage > 1
        && (
          <Link
            to={`/browse/${prev}`}
            onClick={() => handlePageChange(prev)}
            className="prev"
          >
            <Icon name="chevron left" />
          </Link>
        )
      }
      <span className="curr">
        {`Page ${currentPage}`}
      </span>
      <Link
        to={`/browse/${next}`}
        onClick={() => handlePageChange(next)}
        className="next"
      >
        <Icon name="chevron right" />
      </Link>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired
};

export default Pagination;
