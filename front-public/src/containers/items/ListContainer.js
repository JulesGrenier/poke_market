import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../../redux/actions/index';
import List from '../../components/items/List';

class ListContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      items: {}
    };
  }

  componentWillMount(){
    document.title = "Browse";
    const { pageId } = this.props.match.params;
    const pageToGet = pageId ? pageId : 1;
    this.props.getItems(pageToGet);
  }

  componentWillReceiveProps(newProps){
    this.setState({
      items: newProps.items
    });
  }

  render() {

    const { items } = this.state;
    const { pageId } = this.props.match.params;
    const currentPage = pageId ? pageId : 1;

    return (
      <List
        items={items.results}
        currentPage={currentPage}
      />
    );
  }
}

const mapStateToProps = state => ({
  items: state.items.list,
});

export default connect(mapStateToProps, { getItems })(ListContainer);