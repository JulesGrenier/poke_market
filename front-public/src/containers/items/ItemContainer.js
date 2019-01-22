import React, { Component, Fragment } from 'react';
import Item from '../../components/items/Item';

class ItemContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      item: {}
    };
  }

  componentWillMount(){
    const { url } = this.props;
    fetch(url)
    .then(res => res.json())
    .then(item =>
      this.setState( { item })
    );
  }

  componentWillReceiveProps(newProps){
    this.setState({
      item: newProps.item
    });
  }

  render() {

    const { item } = this.state;

    return (
      <Fragment>
        {
          item &&
          <Item item={item} />
        }
      </Fragment>
    );
  }
}

export default ItemContainer;