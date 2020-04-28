import { FETCH_CARDS, ADD_CARD, DELETE_CARD } from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  let id;
  switch (action.type) {
    case FETCH_CARDS:
      id = action.payload.id;
      return {
        ...state,
        [`${id}`]: action.payload.cards,
      };
    case ADD_CARD:
      id = action.payload.id;
      return {
        ...state,
        [`${id}`]: [...state[`${id}`], action.payload.card],
      };
    case DELETE_CARD:
      id = action.payload.listId;
      let newCards = state[`${id}`].filter(
        (card) => card.id !== action.payload.id
      );
      return {
        ...state,
        [`${id}`]: newCards,
      };
    default:
      return state;
  }
}
