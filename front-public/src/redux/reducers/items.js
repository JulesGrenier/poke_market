import {
  GET_ITEMS,
  GET_ITEM,
  GET_ITEMS_BY_CATEGORY
} from '../constants/actionTypes';

const initialState = {
  list: {},
  selectedCategory: "",
  selectedItem: {}
};

export default (state = initialState, action) => {
  switch(action.type){

    case GET_ITEMS:
      return {
        ...state,
        list: action.payload
      }

    case GET_ITEM:
      return {
        ...state,
        selectedItem: action.payload
      }

    case GET_ITEMS_BY_CATEGORY:
      return {
        ...state,
        selectedCategory: action.category
      }

    default:
      return state;
  }
}
