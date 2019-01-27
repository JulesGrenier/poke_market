import React, { Component } from 'react';
import Item from '../../components/items/Item';

class ItemContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {}
    };
  }

  componentWillMount() {
    const { item } = this.props;
    this.setState({ item });
  }

  componentWillReceiveProps(newProps) {
    this.setState({ item: newProps.item });
  }

  render() {
    const { item } = this.state;

    return (
      <Item item={item} />
    );
  }
}

export default ItemContainer;
