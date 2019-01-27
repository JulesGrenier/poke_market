import React, { Component } from 'react';
import ItemDetails from '../../components/items/ItemDetails';

class ItemDetailsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {}
    };
  }

  componentWillMount() {
    const { match } = this.props;
    const { name } = match.params;
    fetch(`https://pokeapi.co/api/v2/item/${name}`)
      .then(res => res.json())
      .then(item => {
        const formatedName = name.split('-').map(part => part.replace(part.charAt(0), part.charAt(0).toUpperCase())).join(' ');
        document.title = formatedName;
        item.name = formatedName;
        this.setState({ item });
      });
  }

  render() {
    const { item } = this.state;

    return (
      <ItemDetails item={item} />
    );
  }
}

export default ItemDetailsContainer;
