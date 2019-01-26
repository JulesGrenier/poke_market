import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../../styles/items/action_bar.scss';
import pokecoin from '../../images/pokecoin.svg';

const ActionBar = ({ stock, cost }) => (
  <div className="action-bar">
    <div className="item-cost">
      {
        cost > 0
        && (
          <span>
            Cost: {cost}
            <img src={pokecoin} alt="pokecoin" className="pokecoin" />
          </span>
        )
      }
    </div>

    <div className="item-stock">
      {
        cost > 0 && stock > 0
          ? <span>Stock: {stock}</span>
          : <span className="sold-out">Sold Out</span>
      }
    </div>

    {
      cost > 0
      && stock > 0
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
  cost: PropTypes.number
};

ActionBar.defaultProps = {
  stock: 0,
  cost: 0
};

export default ActionBar;
