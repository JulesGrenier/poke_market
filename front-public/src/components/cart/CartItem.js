import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Icon,
  Popup,
  Input
} from 'semantic-ui-react';

const CartItem = ({ sprite, name, formatedName, cost, quantity }) => {

  sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";
  name = "poke-ball";
  formatedName = "Poke Ball";
  cost = 1000;
  quantity = 10;

  return (
    <div className="cart-item">
      <Grid doubling stackable>
        <Grid.Row>
          <Grid.Column width={6}>
            <img src={sprite} alt="grg" className="item-sprite" />
            <span className="item-name">
              <Link to={`/browse/item/${name}`}>{formatedName}</Link>
            </span>
            <span> &times; </span>
            <span className="item-quantity"> {quantity}</span>
          </Grid.Column>
          <Grid.Column width={3}>
            <span className="item-cost">
              {cost}
              <img src={require("../../images/pokecoin.svg")} alt="pokecoin" className="pokecoin"/>
            </span>
          </Grid.Column>
          <Grid.Column width={7}>
            <div className="actions">
              <Popup
                trigger={
                  <span className="edit">
                    <Icon name="pencil" />
                  </span>
                }
                content={<Input label="amount" type="number" max={10} min={1} />}
                on='click'
                position='top right'
              />

              <span className="cancel">
                <Icon name="cancel" />
              </span>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default CartItem;