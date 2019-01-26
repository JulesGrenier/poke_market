import {
  GET_ITEMS,
  GET_ITEM,
  GET_ITEMS_BY_CATEGORY
} from '../constants/actionTypes';

export const getItems = (pageToFetch) => dispatch => {
  const offset = pageToFetch <= 1 ? 0 : pageToFetch * 20;
  fetch(`https://pokeapi.co/api/v2/item/?offset=${offset}&limit=20`)
    .then(res => res.json())
    .then(items => dispatch({
      type: GET_ITEMS,
      payload: items
    }));
};

export const getItem = (url) => dispatch => {
  fetch(url)
    .then(res => res.json())
    .then(item => dispatch({
      type: GET_ITEM,
      payload: item
    }));
};

export const getItemsByCategory = (category) => dispatch => {
  dispatch({
    type: GET_ITEMS_BY_CATEGORY,
    category
  });
};
