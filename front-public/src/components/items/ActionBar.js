import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../../styles/items/action_bar.scss';
import pokecoin from '../../images/pokecoin.svg';

const ActionBar = ({ stock, price }) => (
  <div className="action-bar">
    <div className="item-cost">
      {
        price > 0
        && (
          <span>
            Price: {price}
            <img src={pokecoin} alt="pokecoin" className="pokecoin" />
          </span>
        )
      }
    </div>

    <div className="item-stock">
      {
        stock > 0
          ? <span>Stock: {stock}</span>
          : <span className="sold-out">Sold Out</span>
      }
    </div>

    {
      stock > 0
      && (
        <div className="add-to-cart">
          <Input action={{ icon: 'add to cart' }} type="number" max={stock} min={1} defaultValue="1" />
        </div>
      )
    }

  </div>
);

ActionBar.propTypes = {
  stock: PropTypes.number,
  price: PropTypes.number
};

ActionBar.defaultProps = {
  stock: 0,
  price: 0
};

export default ActionBar;
