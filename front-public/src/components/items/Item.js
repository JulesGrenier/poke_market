import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import pokecoin from '../../images/pokecoin.svg';

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
        sprites
        && (
          <Fragment>
            <div className="item-infos">
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
                      ? (
                        <span>
                          {cost}
                          <img src={pokecoin} alt="pokecoin" className="pokecoin" />
                        </span>
                      )
                      : <span className="sold-out">Sold out</span>
                  }
                </span>
              </Link>
            </div>
            <div className="add-to-cart">
              <Icon name="add to cart" />
            </div>
          </Fragment>
        )
      }
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired
};

export default Item;
