import {
  FETCH_CHECKLISTS,
  ADD_CHECKLIST,
  DELETE_CHECKLIST,
  RESET_CHECKLIST,
} from '../actions/types';

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CHECKLISTS:
      return {
        ...state,
        items: action.payload,
      };
    case ADD_CHECKLIST:
      return {
        ...state,
        items: [...state.items, action.payload.checklist],
      };
    case DELETE_CHECKLIST:
      let newItems = state.items.filter(
        (checklist) => checklist.id !== action.payload.id
      );
      return {
        ...state,
        items: newItems,
      };
    case RESET_CHECKLIST:
      state.items = [];
      return state;
    default:
      return state;
  }
}
