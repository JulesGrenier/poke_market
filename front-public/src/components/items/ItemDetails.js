import React from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../../styles/items/item-details.scss';
import ActionBar from './ActionBar';

const ItemDetails = ({ item }) => {
  const {
    name,
    effect_entries,
    category,
    cost,
    sprites
  } = item;

  const stock = 10;

  let formatedCatego;
  if (category) formatedCatego = category.name.split('-').map(part => part.replace(part.charAt(0), part.charAt(0).toUpperCase())).join(' ');

  return (
    <Container text>
      {
        item
        && (
          <div className="item-details">
            <div className="header">
              {
                sprites
                && name
                && <img src={sprites.default} alt={name} className="item-sprite" />
              }
              {
                name
                && <h2 className="detail item-name">{name}</h2>
              }
            </div>

            <ActionBar cost={cost} stock={stock} />

            <div className="detail item-category">
              <span className="label">Category</span>
              {
                category
                && <p className="desc">{formatedCatego}</p>
              }
            </div>

            <div className="detail item-desc">
              <span className="label">Description</span>
              {
                effect_entries
                && <p className="desc">{effect_entries[0].effect}</p>
              }
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
