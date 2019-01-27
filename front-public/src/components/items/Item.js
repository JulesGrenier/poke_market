import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Placeholder } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import pokecoin from '../../images/pokecoin.svg';

const Item = ({ item }) => {
  const {
    name,
    slug,
    picture,
    price,
    stock,
  } = item;

  if (!Object.keys(item).length) {
    return (
      <div className="product">
        <Placeholder style={{ height: '150px', width: '100%' }}>
          <Placeholder.Image />
        </Placeholder>
      </div>
    );
  }

  return (
    <div className="product">
      {
        picture
        && (
          <Fragment>
            <div className="item-infos">
              <Link to={`/browse/item/${slug}`}>
                <img
                  src={picture}
                  alt={name}
                  className="item-sprite"
                />
                <h3 className="item-name">{name}</h3>
                <span className="item-cost">
                  <span>
                    {price}
                    <img src={pokecoin} alt="pokecoin" className="pokecoin" />
                  </span>
                </span>
              </Link>
            </div>
            {
              stock > 0
                ? <div className="add-to-cart"><Icon name="add to cart" /></div>
                : <div className="add-to-cart sold-out"><span className="sold-out">Sold out</span></div>
            }
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
