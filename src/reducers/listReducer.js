import { FETCH_LISTS, ADD_LIST, RESET_LIST } from '../actions/types';

const initalState = {
  items: [],
};

export default function (state = initalState, action) {
  switch (action.type) {
    case FETCH_LISTS:
      return {
        ...state,
        items: action.payload,
      };
    case ADD_LIST:
      return {
        ...state,
        items: [...state.items, action.payload.list],
      };
    case RESET_LIST:
      state.items = [];
      return state;
    default:
      return state;
  }
}
