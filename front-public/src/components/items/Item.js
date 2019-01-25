import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const Item = ({ item }) => {

  const {
    sprites,
    name,
    cost
  } = item;

  let formatedName;
  if (name) formatedName = name.split('-').map(part => part.replace(part.charAt(0), part.charAt(0).toUpperCase())).join(' ');

  return (
    <div className="product">
      {
        sprites &&
        <Fragment>
          <img
            src={sprites.default}
            alt={formatedName}
            className="item-sprite"
          />
          <Link to={`/browse/item/${name}`}>
            <h3 className="item-name">{formatedName}</h3>
          </Link>
          <span className="item-cost">
            {
              cost > 0
                ? <span>
                  {`${cost} `}
                  <Icon name="money bill alternate outline" />
                </span>
                : <span className="sold-out">Sold out</span>
            }
          </span>
          <div className="add-to-cart">
            <Icon name="add to cart" />
          </div>
        </Fragment>
      }
    </div>
  )
};

export default Item;