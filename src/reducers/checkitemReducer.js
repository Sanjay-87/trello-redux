import {
  FETCH_CHECKITEMS,
  ADD_CHECKITEM,
  DELETE_CHECKITEM,
  UPDATE_CHECKITEM_STATE,
  UPDATE_CHECKITEM_NAME,
} from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  let id;
  switch (action.type) {
    case FETCH_CHECKITEMS:
      id = action.payload.id;
      return {
        ...state,
        [`${id}`]: action.payload.checkitems,
      };
    case ADD_CHECKITEM:
      id = action.payload.id;
      return {
        ...state,
        [`${id}`]: [...state[`${id}`], action.payload.checkitem],
      };
    case DELETE_CHECKITEM:
      id = action.payload.checklistId;
      let newItems = state[`${id}`].filter(
        (checkitem) => checkitem.id !== action.payload.id
      );
      return {
        ...state,
        [`${id}`]: newItems,
      };
    case UPDATE_CHECKITEM_STATE:
      return {
        ...state,
      };
    case UPDATE_CHECKITEM_NAME:
      return {
        ...state,
      };
    default:
      return state;
  }
}
