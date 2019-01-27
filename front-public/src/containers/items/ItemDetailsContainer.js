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
    const { slug } = match.params;
    fetch(`http://localhost:4000/api/products/${slug}`)
      .then(res => res.json())
      .then(data => {
        const item = data.results[0];
        document.title = item.name;
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
