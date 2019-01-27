import React, { Component, Fragment } from 'react';
import Item from '../../components/items/Item';

class ItemContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {}
    };

    this.fetchItem = this.fetchItem.bind(this);
  }

  componentWillMount() {
    const { url } = this.props;
    this.fetchItem(url);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ item: {} });
    const { url } = newProps;
    this.fetchItem(url);
  }

  fetchItem(url) {
    return (
      fetch(url)
        .then(res => res.json())
        .then(item => this.setState({ item }))
    );
  }

  render() {
    const { item } = this.state;

    return (
      <Item item={item} />
    );
  }
}

export default ItemContainer;
