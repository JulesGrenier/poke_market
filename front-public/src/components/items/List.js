import React from 'react';
import {
  Container,
  Grid
} from 'semantic-ui-react';
import FilterBar from './FilterBar';
import ItemContainer from '../../containers/items/ItemContainer';
import Pagination from './Pagination';
import '../../styles/items/list.scss';
import '../../styles/items/item.scss';

const List = ({ items, handlePageChange, currentPage }) => {
  return (
    <div id="items-list">
      <Container text textAlign="center">
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <FilterBar />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            {
              items &&
              items.map((item, i) => 
                <Grid.Column key={i} mobile={8} tablet={5} computer={4}>
                  <ItemContainer {...item} />
                </Grid.Column>
              )
            }
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Pagination
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default List;