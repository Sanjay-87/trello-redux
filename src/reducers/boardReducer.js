import { FETCH_BOARDS, ADD_BOARD } from '../actions/types';

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BOARDS:
      return {
        ...state,
        items: action.payload,
      };
    case ADD_BOARD:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
}
