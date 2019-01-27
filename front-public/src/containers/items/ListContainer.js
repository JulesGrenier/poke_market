import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getItems } from '../../redux/actions/index';
import List from '../../components/items/List';

class ListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {}
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentWillMount() {
    document.title = 'Browse';
    window.scroll(0, 0);

    const {
      match,
      getItems
    } = this.props;

    const { pageId } = match.params;
    let pageToGet;
    if (!pageId) {
      pageToGet = 1;
    } else {
      pageToGet = pageId;
    }
    getItems(pageToGet);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      items: newProps.items
    });
  }

  handlePageChange(page) {
    this.setState({ items: {} });
    const { getItems } = this.props;
    getItems(page);
    window.scroll(0, 0);
  }

  render() {
    const { items } = this.state;
    const { match } = this.props;
    const { pageId } = match.params;
    let currentPage;
    if (!pageId) {
      currentPage = 1;
    } else {
      currentPage = parseInt(pageId, 0);
    }

    return (
      <Fragment>
        {
          items.results
          && (
            <List
              items={items.results}
              currentPage={currentPage}
              handlePageChange={this.handlePageChange}
            />
          )
        }
      </Fragment>
    );
  }
}

ListContainer.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  getItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  items: state.items.list,
});

export default connect(mapStateToProps, { getItems })(ListContainer);
