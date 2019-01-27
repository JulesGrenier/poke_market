import React from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../../styles/items/item-details.scss';
import ActionBar from './ActionBar';

const ItemDetails = ({ item }) => {
  const {
    name,
    description,
    stock,
    category_name,
    price,
    picture
  } = item;

  return (
    <Container text>
      {
        item
        && (
          <div className="item-details">
            <div className="header">
              {
                picture
                && name
                && <img src={picture} alt={name} className="item-sprite" />
              }
              {
                name
                && <h2 className="detail item-name">{name}</h2>
              }
            </div>

            <div className="body">
              <ActionBar price={price} stock={stock} />

              <div className="item-infos">
                <div className="detail item-category">
                  <span className="label">Category</span>
                  {
                    category_name
                    && <p className="desc">{category_name}</p>
                  }
                </div>

                <div className="detail item-desc">
                  <span className="label">Description</span>
                  {
                    description
                    && <p className="desc">{description}</p>
                  }
                </div>
              </div>
            </div>
          </div>
        )
      }
    </Container>
  );
};

ItemDetails.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired
};

export default ItemDetails;
