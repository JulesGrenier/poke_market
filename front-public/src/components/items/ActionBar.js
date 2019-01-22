import React from 'react';
import { Input, Icon } from 'semantic-ui-react';
import '../../styles/items/action_bar.scss';

const ActionBar = ({ stock, cost }) => {
  return (
    <div className="action-bar">
      <div className="item-cost">
        {
          cost > 0 &&
          <span>
            Cost: {cost}
            <Icon name="money bill alternate outline" />
          </span>
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
        cost > 0 && stock > 0 &&
        <div className="add-to-cart">
          <Input action={{ icon: 'add to cart' }} type="number" max={stock} min={1} defaultValue="1" />
        </div>
      }

    </div>
  );
};

export default ActionBar;