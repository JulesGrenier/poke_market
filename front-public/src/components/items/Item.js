import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const Item = ({ item }) => {

  const {
    sprites,
    name,
    cost
  } = item;

  let formatedName;
  if(name) formatedName = name.split('-').map(part => part.replace(part.charAt(0), part.charAt(0).toUpperCase())).join(' ');

  return (
    <div className="product">
      {
        sprites &&
        <Link to={`/browse/item/${name}`}>
          <img
            src={sprites.default}
            alt={formatedName}
            className="item-sprite"
          />
          <h3 className="item-name">{formatedName}</h3>
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
        </Link>
      }
    </div>
  )
};

export default Item;